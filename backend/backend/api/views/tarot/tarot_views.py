from django.shortcuts import render
from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from api.wrapper_tarot_api import RoxyAPITarot

class ThreeCardDrawView(APIView):
    def get(self, request):
        api = RoxyAPITarot()
        data = api.threeCardDraw()
        if data:
            return Response(data)
        return Response({'error': 'Could not draw three tarot cards'})

class SingleCardDrawView(APIView):
    def get(self, request):
        api = RoxyAPITarot()
        data = api.singleCardDraw()
        if data:
            return Response(data)
        return Response({'error': 'Could not draw single tarot card'})
    
class YesNoTarotReadingView(APIView):
    def get(self, request):
        api = RoxyAPITarot()
        data = api.yes_no_tarot_reading()
        if data:
            return Response(data)
        return Response({'error': 'Could not draw yes or no tarot card'})

class FullTarotDeckView(APIView):
    def get(self, request):
        api = RoxyAPITarot()
        data = api.full_tarot_deck_list()
        if data:
            return Response(data)
        return Response({'error': 'Could not retrieve full tarot deck'})

class SpecificTarotCardView(APIView):
    def post(self, request):
        card_name = request.data.get('card_name')
        api = RoxyAPITarot()
        data = api.specific_tarot_card(card_name=card_name)
        if data:
            return Response(data)
        return Response({'error': 'Could not retrieve specific tarot card'})

class SpecificTarotSpread(APIView):
    def post(self, request):
        spread_name = request.data.get('spread_type')
        api = RoxyAPITarot()
        data = api.specific_tarot_spread(spread_type=spread_name)
        if data:
            return Response(data)
        return Response({'error': 'Could not retrieve specific tarot spread'})