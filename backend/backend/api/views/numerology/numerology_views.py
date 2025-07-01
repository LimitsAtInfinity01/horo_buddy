from django.shortcuts import render
from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.wrapper_numerology_api import RoxyAPINumerology

class NumerologyFiguresView(APIView):
    def post(self, request):
        user_info = request.data
        api = RoxyAPINumerology()
        data = api.numerologyFigures(user_info=user_info)
        if data:
            return Response(data)
        return Response({'error': 'Could not fetch numerology figures'})

#TODO: Need Test 
class NumerologyInterpretationView(APIView):
    def post(self, request):
        use_infor = request.data
        api = RoxyAPINumerology()
        data = api.numerologyInterpretation(user_info=use_infor)
        if data:
            return Response(data)
        return Response({'error': 'Could not fetch numerology interpretation'})
#TODO: Need Test
class lifePathView(APIView):
    def post(self, request):
        birthdate = request.data.get('birthdate')
        api = RoxyAPINumerology()
        data = api.lifePath(birthdate=birthdate)
        if data:
            return Response(data)
        return Response({'error': 'Could not fetch numerology life path'})

#TODO: Needs Test    
class SoulUrgeNumber(APIView):
    def post(self, request):
        full_name = request.data.get('full_name')
        api = RoxyAPINumerology()
        data = api.soulUrgeNumber(full_name=full_name)
        if data:
            return Response(data)
        return Response({'erro': 'Could not fetch numerology soul urge number'})

#TODO: Needs Test
class CompatibilityAnalysisView(APIView):
    def post(self, request):
        user_data = request.data
        api = RoxyAPINumerology()
        data = api.compatibilityAnalysis(users_data=user_data)
        if data:
            return Response(data)
        return Response({'error': 'Could not fetch numerology compatibility analysis'})        