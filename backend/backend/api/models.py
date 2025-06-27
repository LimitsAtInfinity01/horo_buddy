# model.py

from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=256, blank=False)
    last_name = models.CharField(max_length=256, blank=False)
    zodiac_sign = models.CharField(max_length=256, blank=False)
    email = models.CharField(max_length=256, blank=False)
    birthdate = models.DateTimeField(null=True, blank=True)
    birth_location = models.CharField(max_length=256, blank=False)