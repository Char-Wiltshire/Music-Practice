from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PracticeSessionViewSet

router = DefaultRouter()
router.register(r'practice_sessions', PracticeSessionViewSet, basename='practice_session')

urlpatterns = [
    path ('api/', include(router.urls)),
]