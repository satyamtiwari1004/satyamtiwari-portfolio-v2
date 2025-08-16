from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'blogs', views.BlogViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('location-weather/', views.location_weather, name='location-weather'),
    path('spotify/', views.spotify_now_playing, name='spotify-now-playing'),
]
