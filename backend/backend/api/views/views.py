
# views.py  
from django.shortcuts import render
from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.serializers import UserSerializer, ProfileSerializer
from api.models import Profile

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

