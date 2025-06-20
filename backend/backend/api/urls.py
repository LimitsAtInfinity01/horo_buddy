from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (UserRegisterView, HoroscopeView, CompabilityView, 
                    PersonalityView, BirthChartView, ProfileView,
                    SignDetailsView)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()


urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('token/',    TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('horoscope/<str:sign>/', HoroscopeView.as_view(), name='horoscope'),
    path('sign_details/<str:sign>/', SignDetailsView.as_view(), name='sign_details'),
    path('compability/', CompabilityView.as_view(), name='compability'),
    path('personality/', PersonalityView.as_view(), name='personality'),
    path('birth_chart/', BirthChartView.as_view(), name='birth_chart'),
    path('profile/', ProfileView.as_view(), name='profile'),
]