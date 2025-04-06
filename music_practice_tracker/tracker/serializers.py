from rest_framework import serializers
from .models import PracticeSession

class PracticeSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PracticeSession
        fields = ['id', 'instrument', 'duration', 'date']