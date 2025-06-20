
# views.py  
from django.shortcuts import render
from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer, ProfileSerializer
from .models import Profile

# For returning DUMMY responses
from django.http import JsonResponse
from .horoscope_api import horoscope, compability, birth_chart, personality, signDetails


# Importing API Wrapper for RoxyAPI Horoscopes
from .horoscope_api import RoxyAPIHoroscope


class UserRegisterView(generics.CreateAPIView):
    """
    POSTing { "username": "...", "password": "..." }
    will create a new User.
    """

    serializer_class = UserSerializer 
    # queryset is only needed for browsable API introspection
    queryset = User.objects.all()

class HoroscopeView(APIView):
    def get(self, request, sign):
        return JsonResponse(horoscope) 
    #     api = RoxyAPIHoroscope()
    #     data = api.horoscope(sign=sign)
    #     if data:
    #         return Response(data)
    #     return Response({'error': 'Could not fetch horoscope'})

class SignDetailsView(APIView):
    def get(self, request, sign):
        print(signDetails)
        return JsonResponse(signDetails)
        # api = RoxyAPIHoroscope()
        # data = api.detailedZodiacSign(sign=sign)
        # if data:
        #     return Response(data)
        # return Response({'error': 'Could not fetch sign details'})


class CompabilityView(APIView):
    def post(self, request):
        return Response(compability)
        # profiles = request.data.get('people')
        # api = RoxyAPIHoroscope()
        # data = api.compability(profiles=profiles)
        # if data:
        #     return Response(data)
        # return Response({'error': 'Could not fetch compability'})

class PersonalityView(APIView):
    def post(self, request):
        return Response(personality)
        # birthday_details = request.data.get('birthdate_details')
        # api = RoxyAPIHoroscope()
        # data = api.personality(personal_details=birthday_details)
        # if data:
        #     return Response(data)
        # return Response({'error': 'Could not fetch personality'})
    
class BirthChartView(APIView):
    def post(self, request):
        return Response(birth_chart)
        # birthday_details = request.data
        # print(birthday_details)
        # api = RoxyAPIHoroscope()
        # data = api.birthChart(personal_details=birthday_details)
        # print(data)
        # if data:
        #     return Response(data)
        # return Response({'error': 'Could not fetch Birthdate chart'})

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