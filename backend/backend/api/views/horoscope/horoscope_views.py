from django.shortcuts import render
from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from api.wrapper_horoscope_api import RoxyAPIHoroscope
from api.models import HoroscopeData

class HoroscopeView(APIView):
    def post(self, request):
        sign = request.data.get('sign')
        api = RoxyAPIHoroscope()
        data = api.horoscope(sign=sign)
        if data:
            return Response(data)
        return Response({'error': 'Could not fetch horoscope'})

class SignDetailsView(APIView):
    def post(self, request):
        sign = request.data.get('sign')
        print(sign)
        api = RoxyAPIHoroscope()
        data = api.detailedZodiacSign(sign=sign)
        if data:
            print(data)
            return Response(data)
        return Response({'error': 'Could not fetch sign details'})


class CompatibilityView(APIView):
    def post(self, request):
        profiles = request.data
        api = RoxyAPIHoroscope()
        data = api.compatibility(profiles=profiles)
        if data:
            return Response(data)
        return Response({'error': 'Could not fetch compability'})

class PersonalityView(APIView):
    def post(self, request):
        birthday_details = request.data
        api = RoxyAPIHoroscope()
        data = api.personality(personal_details=birthday_details)
        if data:
            return Response(data)
        return Response({'error': 'Could not fetch personality'})
    
class BirthChartView(APIView):
    def post(self, request):
        birthday_details = request.data
        print(birthday_details)
        api = RoxyAPIHoroscope()
        data = api.birthChart(personal_details=birthday_details)
        print(data)
        if data:
            return Response(data)
        return Response({'error': 'Could not fetch Birthdate chart'})

