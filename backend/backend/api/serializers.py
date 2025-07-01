# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator

from .models import Profile, HoroscopeData


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        required=True,
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="A user with that username already exists."
            )
        ]
    )
    password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
        
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('name', 'last_name', 'zodiac_sign', 'email', 'birthdate', 'birth_location', 'time_of_birth')

class HoroscopeDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoroscopeData
        fields = ('horoscope', 'sign_details', 'personality', 'birth_chart')
        read_only_fields = ('user',)

    def create(self, validated_data):
        user = self.context['request'].user
        return HoroscopeData.objects.create(user=user, **validated_data)