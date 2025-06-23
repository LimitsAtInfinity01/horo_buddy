import os
import requests
from rich import print_json
from dotenv import load_dotenv


from .error import TarotError

load_dotenv()
API_KEY = os.getenv('ROXYAPI_KEY')

class RoxyAPITarot:
    def __init__(self) -> None:
        self.base_url = 'https://roxyapi.com/api/v1/data/astro/tarot/'
    
    def threeCardDraw(self):
        self.THREECARD_URL = f'{self.base_url}three-card-draw?token={API_KEY}'
        try:
            response = requests.get(self.THREECARD_URL)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise TarotError('Cannot draw three tarot cards')
        except requests.RequestException:
            print('Cannot connect to API')
            return None


    def yes_no_tarot_reading(self):
        self.YES_URL = f'{self.base_url}yes-or-no?token={API_KEY}'
        try:
            response = requests.get(self.YES_URL)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise TarotError('Cannot draw yes or no tarot card')
        except requests.RequestException:
            print('Cannot connect to API')
            return None
        
    def singleCardDraw(self):
        self.SINGLE_URL = f'{self.base_url}single-card-draw?token={API_KEY}'
        try:
            response = requests.get(self.SINGLE_URL)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise TarotError('Cannot draw single tarot card')
        except requests.RequestException:
            print('Cannot connect to API')
            return None

    def full_tarot_deck_list(self):
        self.FULL_DECK_URL = f'{self.base_url}deck?token={API_KEY}'
        try:
            response = requests.get(self.FULL_DECK_URL)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise TarotError('Cannot retrieve full tarot deck')
        except requests.RequestException:
            print('Cannot connect to API')
            return None
        
    def specific_tarot_card(self, card_name: str):
        self.SPECIFIC_CARD_URL = f'{self.base_url}card/{card_name}?token={API_KEY}'
        try:
            response = requests.get(self.SPECIFIC_CARD_URL)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise TarotError('Cannot retrieve specific tarot card')
        except requests.RequestException:
            print('Cannot connect to API')
            return None

    def specific_tarot_spread(self, spread_type: str):
        self.SPECIFIC_SPREAD_URL = f'{self.base_url}spread/{spread_type}?token={API_KEY}'
        try:
            response = requests.get(self.SPECIFIC_SPREAD_URL)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise TarotError('Cannot retrieve specific tarot spread')
        except requests.RequestException:
            print('Cannot connect to API')
            return None
                