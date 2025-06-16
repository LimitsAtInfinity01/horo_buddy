from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator

from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


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
    print(password)
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
        