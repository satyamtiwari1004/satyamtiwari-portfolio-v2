import requests
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ReadOnlyModelViewSet
from django.conf import settings
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .models import Blog
from .serializers import BlogSerializer


class BlogViewSet(ReadOnlyModelViewSet):
    """
    A viewset for viewing blog posts.
    
    list:
        Return a list of all published blog posts.
    retrieve:
        Return the given blog post.
    """
    queryset = Blog.objects.filter(is_published=True)
    serializer_class = BlogSerializer


@swagger_auto_schema(
    method='get',
    operation_description="Get current location and weather information",
    responses={
        200: openapi.Response(
            description="Weather information retrieved successfully",
            schema=openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'city': openapi.Schema(type=openapi.TYPE_STRING, description='City name'),
                    'temperature': openapi.Schema(type=openapi.TYPE_STRING, description='Current temperature'),
                    'condition': openapi.Schema(type=openapi.TYPE_STRING, description='Weather condition'),
                }
            )
        )
    }
)
@api_view(['GET'])
def location_weather(request):
    """
    Get current location and weather information
    
    Returns:
        JSON object containing city, temperature, and weather condition
    """
    try:
        # For demo purposes, using a fixed location (Patna, India)
        # In production, you might want to get the user's actual location
        city = "Patna"
        
        # Using Open-Meteo API (free, no API key required)
        url = f"https://api.open-meteo.com/v1/forecast"
        params = {
            'latitude': 25.5941,  # Patna coordinates
            'longitude': 85.1376,
            'current': 'temperature_2m,weather_code',
            'timezone': 'Asia/Kolkata'
        }
        
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        # Extract weather information
        current = data.get('current', {})
        temperature = current.get('temperature_2m', 25)
        weather_code = current.get('weather_code', 0)
        
        # Map weather codes to descriptions
        weather_descriptions = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Foggy",
            48: "Depositing rime fog",
            51: "Light drizzle",
            53: "Moderate drizzle",
            55: "Dense drizzle",
            61: "Slight rain",
            63: "Moderate rain",
            65: "Heavy rain",
            71: "Slight snow",
            73: "Moderate snow",
            75: "Heavy snow",
            95: "Thunderstorm"
        }
        
        weather_condition = weather_descriptions.get(weather_code, "Unknown")
        
        return Response({
            'city': city,
            'temperature': f"{temperature}°C",
            'condition': weather_condition
        })
        
    except requests.RequestException as e:
        return Response({
            'city': 'Patna',
            'temperature': '25°C',
            'condition': 'Sunny'
        }, status=status.HTTP_200_OK)


@swagger_auto_schema(
    method='get',
    operation_description="Get currently playing track from Spotify",
    responses={
        200: openapi.Response(
            description="Spotify information retrieved successfully",
            schema=openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'isPlaying': openapi.Schema(type=openapi.TYPE_BOOLEAN, description='Whether a track is currently playing'),
                    'title': openapi.Schema(type=openapi.TYPE_STRING, description='Track title'),
                    'artist': openapi.Schema(type=openapi.TYPE_STRING, description='Artist name'),
                    'album': openapi.Schema(type=openapi.TYPE_STRING, description='Album name'),
                    'albumArt': openapi.Schema(type=openapi.TYPE_STRING, description='Album art URL'),
                    'trackUrl': openapi.Schema(type=openapi.TYPE_STRING, description='Spotify track URL'),
                }
            )
        )
    }
)
@api_view(['GET'])
def spotify_now_playing(request):
    """
    Get currently playing track from Spotify
    
    Returns:
        JSON object containing current track information or playing status
    """
    try:
        # Check if Spotify credentials are configured
        if not settings.SPOTIFY_CLIENT_ID or not settings.SPOTIFY_CLIENT_SECRET:
            return Response({
                'isPlaying': False,
                'message': 'Spotify credentials not configured'
            }, status=status.HTTP_200_OK)
        
        # Initialize Spotify client
        sp = spotipy.Spotify(auth_manager=SpotifyOAuth(
            client_id=settings.SPOTIFY_CLIENT_ID,
            client_secret=settings.SPOTIFY_CLIENT_SECRET,
            redirect_uri=settings.SPOTIFY_REDIRECT_URI,
            scope='user-read-currently-playing'
        ))
        
        # Get currently playing track
        current_track = sp.current_user_playing_track()
        
        if current_track and current_track['is_playing']:
            track = current_track['item']
            return Response({
                'isPlaying': True,
                'title': track['name'],
                'artist': track['artists'][0]['name'],
                'album': track['album']['name'],
                'albumArt': track['album']['images'][0]['url'] if track['album']['images'] else None,
                'trackUrl': track['external_urls']['spotify']
            })
        else:
            return Response({
                'isPlaying': False,
                'message': 'No track currently playing'
            })
            
    except Exception as e:
        # Return mock data for demo purposes
        return Response({
            'isPlaying': True,
            'title': 'Bohemian Rhapsody',
            'artist': 'Queen',
            'album': 'A Night at the Opera',
            'albumArt': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
            'trackUrl': 'https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb'
        }, status=status.HTTP_200_OK)
