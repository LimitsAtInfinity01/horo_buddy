import os
import requests
from rich import print_json
from dotenv import load_dotenv
from .error import HoroscopeError

load_dotenv()
API_KEY = os.getenv("ROXYAPI_KEY")


class RoxyAPIHoroscope:
    def __init__(self, type: str = "", sign: str = "", birthdate: str = "") -> None:
        self.API_TOKEN = API_KEY
        self.type = type
        self.sign = sign
        self.birthdate = birthdate
        self.base_url = f"https://roxyapi.com/api/v1/data/astro/astrology/"

    def horoscope(self, sign: str):
        horoscopeURL = f"{self.base_url}horoscope/{sign}?token={self.API_TOKEN}"
        try:
            response = requests.get(horoscopeURL)
            print(response.status_code)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise HoroscopeError("Cannot retrieve horoscope")
        except requests.RequestException:
            print("Cannot connect to API")
            return None

    def detailedZodiacSign(self, sign: str):
        zodiacURL = f"{self.base_url}zodiac/{sign}?token={self.API_TOKEN}"
        try:
            response = requests.get(zodiacURL)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise HoroscopeError('Cannot retrieve Zodiac Details')
        except requests.RequestException:
            print('Cannot connect to API')
            return None


    def compatibility(self, profiles):
        compabilityURL = f"{self.base_url}compatibility?token={self.API_TOKEN}"
        try:
            response = requests.post(compabilityURL, json=profiles, timeout=10)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise HoroscopeError("Cannot retrive compability")
        except requests.RequestException:
            print("cannot connect to API")
            return None

    def personality(self, personal_details):
        personalityURL = f"{self.base_url}personality?token={API_KEY}"
        try:
            response = requests.post(personalityURL, json=personal_details, timeout=10)

            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise HoroscopeError("Cannot retrieve perosnality")
        except requests.RequestException:
            print("Cannot connect to API")
            return None

    def birthChart(self, personal_details):
        birthChartURL = f"{self.base_url}birth-chart?token={API_KEY}"
        try:
            response = requests.post(birthChartURL, json=personal_details, timeout=10)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise HoroscopeError("Cannot get birth chart")
        except requests.RequestException:
            print("Cannot connect to API")
            return None

