from rest_framework import viewsets
from .models import PracticeSession
from .serializers import PracticeSessionSerializer

class PracticeSessionViewSet(viewsets.ModelViewSet):
    queryset = PracticeSession.objects.all()
    serializer_class = PracticeSessionSerializer