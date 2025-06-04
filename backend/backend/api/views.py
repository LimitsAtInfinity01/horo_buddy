from django.shortcuts import render
from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all().order_by('-created')
    serializer_class = NoteSerializer

def create_note():
    note = Note(
        title='First Note',
        body='Hello World'
    )
    note.save()
