from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views.views import UserRegisterView, ProfileView
                    

from api.views.horoscope.horoscope_views import HoroscopeView, CompatibilityView, PersonalityView, BirthChartView, SignDetailsView
from api.views.numerology.numerology_views import (NumerologyFiguresView, NumerologyInterpretationView, 
                                                   lifePathView, SoulUrgeNumber, CompatibilityAnalysisView)        
from api.views.tarot.tarot_views import (ThreeCardDrawView, SingleCardDrawView, YesNoTarotReadingView,
                                         FullTarotDeckView, SpecificTarotCardView, SpecificTarotSpread)
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
    
    # Horoscope endpoint urls
    path('horoscope/', HoroscopeView.as_view(), name='horoscope'),
    path('sign_details/', SignDetailsView.as_view(), name='sign_details'),
    path('horoscope_compatibility/', CompatibilityView.as_view(), name='horoscope_compatibility'),
    path('personality/', PersonalityView.as_view(), name='personality'),
    path('birth_chart/', BirthChartView.as_view(), name='birth_chart'),
    path('profile/', ProfileView.as_view(), name='profile'),

    
    # Numerology Endpoint urls
    path('numerology_figures/', NumerologyFiguresView.as_view(), name='numerolog_figures'),
    path('numerology_interpretation/', NumerologyInterpretationView.as_view(), name='numerology_interpretation'),
    path('life_path/', lifePathView.as_view(), name='life_path'),
    path('soul_urge_number/', SoulUrgeNumber.as_view(), name='soul_urge_number'),
    path('numerology_compatibility/', CompatibilityAnalysisView.as_view(), name='numerology_compatibility'),

    # Tarot endpoint urls
    path('three_card_draw/', ThreeCardDrawView.as_view(), name='three_card_draw'),
    path('single_card_draw/', SingleCardDrawView.as_view(), name='single_card_draw'),
    path('yes_no_tarot_reading/', YesNoTarotReadingView.as_view(), name='yes_no_tarot_reading'),
    path('full_tarot_deck/', FullTarotDeckView.as_view(), name='full_tarot_deck'),
    path('specific_tarot_card/', SpecificTarotCardView.as_view(), name='specific_tarot_card'),
    path('specific_tarot_spread/', SpecificTarotSpread.as_view(), name='specific_tarot_spread')
]