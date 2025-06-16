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
                print(response.json())
                return response.json()
            else:
                raise HoroscopeError("Cannot retrieve horoscope")
        except requests.RequestException:
            print("Cannot connect to API")
            return None

    def compability(self, profiles):
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
        print(personalityURL)
        try:
            response = requests.post(personalityURL, json=personal_details, timeout=10)
            print(response)
            print(response.status_code)
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
            print(response)
            if 299 >= response.status_code >= 200:
                return response.json()
            else:
                raise HoroscopeError("Cannot get birth chart")
        except requests.RequestException:
            print("Cannot connect to API")
            return None



compability = {
    "people": [
        {
            "name": "Alice",
            "zodiac_sign": "Aries",
            "personality": "Bold, ambitious, and energetic...",
        },
        {
            "name": "Bob",
            "zodiac_sign": "Cancer",
            "personality": "Emotional, intuitive, and nurturing...",
        },
    ],
    "compatibility": {
        "level": "challenging",
        "points": {"love": 6, "thinking": 5, "goals": 7, "family": 6, "temper": 5},
        "comment": "Aries and Cancer form a complex relationship...",
    },
}
personality = {
    "name": "John Doe",
    "zodiac_sign": "Aries",
    "personality": "Bold, ambitious, and energetic. Aries thrives on competition...",
    "symbol": "♈",
    "element": "Fire",
    "modality": "Cardinal",
    "image": "https://cdn.roxyapi.com/img/astrology/aries.png",
}
horoscope={
    'sign': 'scorpio',
    'horoscope': 'A little self-compassion can make a big difference in your day., Scorpio. At times, you feel that every experience leaves a lasting imprint on you.'
}
birth_chart = {
    "name": "Bruce Wayne",
    "birthdate": "1991-11-21",
    "time_of_birth": "21:55:00",
    "sun": {
        "name": "Sun",
        "quality": "Fixed",
        "element": "Water",
        "sign": "Sco",
        "sign_num": 7,
        "position": 28.855784958164463,
        "abs_pos": 238.85578495816446,
        "emoji": "♏️",
        "point_type": "Planet",
        "house": "Sixth_House",
        "retrograde": False,
    },
    "moon": {
        "name": "Moon",
        "quality": "Fixed",
        "element": "Earth",
        "sign": "Tau",
        "sign_num": 1,
        "position": 25.18106059952352,
        "abs_pos": 55.18106059952352,
        "emoji": "♉️",
        "point_type": "Planet",
        "house": "Twelfth_House",
        "retrograde": False,
    },
    "mercury": {
        "name": "Mercury",
        "quality": "Mutable",
        "element": "Fire",
        "sign": "Sag",
        "sign_num": 8,
        "position": 20.887733300889522,
        "abs_pos": 260.8877333008895,
        "emoji": "♐️",
        "point_type": "Planet",
        "house": "Seventh_House",
        "retrograde": False,
    },
    "venus": {
        "name": "Venus",
        "quality": "Cardinal",
        "element": "Air",
        "sign": "Lib",
        "sign_num": 6,
        "position": 13.397819232805091,
        "abs_pos": 193.3978192328051,
        "emoji": "♎️",
        "point_type": "Planet",
        "house": "Sixth_House",
        "retrograde": False,
    },
    "mars": {
        "name": "Mars",
        "quality": "Fixed",
        "element": "Water",
        "sign": "Sco",
        "sign_num": 7,
        "position": 24.758499421872898,
        "abs_pos": 234.7584994218729,
        "emoji": "♏️",
        "point_type": "Planet",
        "house": "Sixth_House",
        "retrograde": False,
    },
    "houses": [
        {
            "name": "First_House",
            "quality": "Mutable",
            "element": "Air",
            "sign": "Gem",
            "sign_num": 2,
            "position": 8.15547887202699,
            "abs_pos": 68.15547887202699,
            "emoji": "♊️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Second_House",
            "quality": "Mutable",
            "element": "Air",
            "sign": "Gem",
            "sign_num": 2,
            "position": 28.56930911611724,
            "abs_pos": 88.56930911611724,
            "emoji": "♊️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Third_House",
            "quality": "Cardinal",
            "element": "Water",
            "sign": "Can",
            "sign_num": 3,
            "position": 15.579787008297103,
            "abs_pos": 105.5797870082971,
            "emoji": "♋️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Fourth_House",
            "quality": "Fixed",
            "element": "Fire",
            "sign": "Leo",
            "sign_num": 4,
            "position": 4.097239769076907,
            "abs_pos": 124.09723976907691,
            "emoji": "♌️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Fifth_House",
            "quality": "Fixed",
            "element": "Fire",
            "sign": "Leo",
            "sign_num": 4,
            "position": 29.25311458854833,
            "abs_pos": 149.25311458854833,
            "emoji": "♌️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Sixth_House",
            "quality": "Cardinal",
            "element": "Air",
            "sign": "Lib",
            "sign_num": 6,
            "position": 10.95444625340437,
            "abs_pos": 190.95444625340437,
            "emoji": "♎️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Seventh_House",
            "quality": "Mutable",
            "element": "Fire",
            "sign": "Sag",
            "sign_num": 8,
            "position": 8.155478872027004,
            "abs_pos": 248.155478872027,
            "emoji": "♐️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Eighth_House",
            "quality": "Mutable",
            "element": "Fire",
            "sign": "Sag",
            "sign_num": 8,
            "position": 28.56930911611721,
            "abs_pos": 268.5693091161172,
            "emoji": "♐️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Ninth_House",
            "quality": "Cardinal",
            "element": "Earth",
            "sign": "Cap",
            "sign_num": 9,
            "position": 15.579787008297103,
            "abs_pos": 285.5797870082971,
            "emoji": "♑️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Tenth_House",
            "quality": "Fixed",
            "element": "Air",
            "sign": "Aqu",
            "sign_num": 10,
            "position": 4.097239769076907,
            "abs_pos": 304.0972397690769,
            "emoji": "♒️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Eleventh_House",
            "quality": "Fixed",
            "element": "Air",
            "sign": "Aqu",
            "sign_num": 10,
            "position": 29.25311458854833,
            "abs_pos": 329.2531145885483,
            "emoji": "♒️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
        {
            "name": "Twelfth_House",
            "quality": "Cardinal",
            "element": "Fire",
            "sign": "Ari",
            "sign_num": 0,
            "position": 10.954446253404372,
            "abs_pos": 10.954446253404372,
            "emoji": "♈️",
            "point_type": "House",
            "house": None,
            "retrograde": None,
        },
    ],
}

# needs to be in this format for compability
profiles_object = {
  "people": [
    {
      "name": "Alice",
      "birthdate": "1992-03-22",
      "time_of_birth": "08:15:00"
    },
    {
      "name": "Bob",
      "birthdate": "1989-07-15",
      "time_of_birth": "20:45:00"
    }
  ]
}

personality_object = [{
    "name": "John Doe",
    "birthdate": "1990-04-15",
    "time_of_birth": "14:30:00"
}]

birth_chart_object = {
    "name": "John Doe",
    "birthdate": "1990-04-15",
    "time_of_birth": "14:30:00",
    "location": "UTC"
}

