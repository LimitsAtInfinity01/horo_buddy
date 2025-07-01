# model.py

from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=256, blank=False)
    last_name = models.CharField(max_length=256, blank=False)
    zodiac_sign = models.CharField(max_length=256, blank=False)
    email = models.CharField(max_length=256, blank=False) #TODO remove this one and use the one from users
    birthdate = models.DateTimeField(null=True, blank=True)
    time_of_birth = models.TimeField(null=True, blank=True)
    birth_location = models.CharField(max_length=256, blank=False)

    def __str__(self):
        return f"{self.name} {self.last_name} ({self.user.username})"


class HoroscopeData(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    horoscope = models.JSONField(default=None)
    sign_details = models.JSONField(default=None) 
    personality = models.JSONField(default=None)
    birth_chart = models.JSONField(default=None)

    def __str__(self):
        return f"Horoscope data for {self.user.username}"
