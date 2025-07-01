
# views.py  
from django.shortcuts import render
from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.serializers import UserSerializer, ProfileSerializer, HoroscopeDataSerializer
from api.models import Profile, HoroscopeData
from api.wrapper_horoscope_api import RoxyAPIHoroscope

class UserRegisterView(generics.CreateAPIView):
    """
    POSTing { "username": "...", "password": "..." }
    will create a new User.
    """
    serializer_class = UserSerializer 
    # queryset is only needed for browsable API introspection
    queryset = User.objects.all()

class ProfileView(APIView):
    permission_class = [IsAuthenticated]
    def get(self, request):
        profile, _ = Profile.objects.get_or_create(user=request.user)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
    
    def post(self, request):
        profile, _ = Profile.objects.get_or_create(user=request.user)
        print("Incoming data:", request.data)  # 👈 Add this line
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        else:
            print("Serializer errors:", serializer.errors)
            return Response(serializer.errors, status=400)

# horoscope_static/
class HoroscopeStaticData(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        profile =  Profile.objects.filter(user=request.user).first()
        if not profile:
            return Response({"error": "Profile not founf"},status=404)
        
        horoscope_data = HoroscopeData.objects.filter(user=request.user).first()
        if horoscope_data: 
            serializer = HoroscopeDataSerializer(horoscope_data)
            return Response(serializer.data)
        
        api = RoxyAPIHoroscope()
        horoscope = api.horoscope(profile.zodiac_sign)
        detailed_zodiac_sign = api.detailedZodiacSign(sign=profile.zodiac_sign)
        date_string = str(profile.birthdate)
        date = date_string.split(' ')[0]
        personality = api.personality(personal_details={
                                                        "name": profile.name,
                                                        "birthdate": date,
                                                        "time_of_birth": "08:15:00" 
                                                    })
        birth_chart = api.birthChart(personal_details={
            "name": profile.name,
            "birthdate": date,
            "time_of_birth": "12:00", #TODO: change this so accept any time
            "location": "UTC" #TODO: change this so accepts any timezone
        })

        horoscope_data= HoroscopeData.objects.create(user=request.user,
                                                    horoscope=horoscope,
                                                    sign_details=detailed_zodiac_sign,
                                                    personality=personality,
                                                    birth_chart=birth_chart)
        serializer = HoroscopeDataSerializer(horoscope_data)

        return Response(serializer.data)
    
