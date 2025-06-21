import os
import requests
from rich import print_json
from dotenv import load_dotenv
from .error import NumerologyError

load_dotenv()
API_KEY = os.getenv('ROXYAPI_KEY')


class RoxyAPINumerology:
    def __init__(self) -> None:
        self.base_url = f'https://roxyapi.com/api/v1/data/astro/numerology/'

    def numerologyFigures(self, user_info):
        self.NUM_URL = f'{self.base_url}key-figures?token={API_KEY}'
        try:
            response = requests.post(self.NUM_URL, json=user_info, timeout=10)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise NumerologyError(message='Cannot retrieve numerology figures')
        except requests.RequestException:
            print('Cannot connect to Numerology figures endpoint')
    
    def numerologyInterpretation(self, user_info):
        self.INTER_URL = f'{self.base_url}interpretations?token={API_KEY}'
        try:
            response = requests.post(self.INTER_URL, json=user_info, timeout=10)
            if 299 >= response.status_code >=200:
                return response.json()
            else:
                raise NumerologyError('Cannot retrieve numerology interpretation')
        except requests.RequestException:
            print('Cannot connect to numerology interpretaion endpoint ')

    def lifePath(self, birth_date: str):
        # https://roxyapi.com/api/v1/data/astro/numerology/life-path-number?birthdate={birth_date}&token={your_api_token}
        self.PATH_URL = f'{self.base_url}life-path-number?birthdate={birth_date}&token={API_KEY}'
        print(self.PATH_URL)
        try:
            response = requests.get(self.PATH_URL)
            print(response.status_code)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise NumerologyError('Cannot retrieve life path data')
        except requests.RequestException:
            print('Cannot connect to life path endpoint')

    #TODO needs testing
    def soulUrgeNumber(self, full_name: str):
        # https://roxyapi.com/api/v1/data/astro/numerology/soul-urge-number?full_name={full_name}&token={your_api_token}
        self.SOUL_URL = f'{self.base_url}soul-urge-number?full_name={full_name}&token={API_KEY}'
        try:
            response = requests.get(self.SOUL_URL)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise NumerologyError('Cannot retrieve soul urge number')
        except requests.RequestException:
            print('Cannot connect to soul urge number endpoint')

    def compatibilityAnalysis(self, users_data):
        # https://roxyapi.com/api/v1/data/astro/numerology/compatibility?token={your_api_token}
        self.COMP_URL = f'{self.base_url}compatibility?token={API_KEY}'
        try:
            response = requests.post(url=self.COMP_URL, json=users_data, timeout=10)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise NumerologyError('Cannot retrieve compability data')
        except requests.RequestException:
            print('Cannot connect to compatibility endpoint')
