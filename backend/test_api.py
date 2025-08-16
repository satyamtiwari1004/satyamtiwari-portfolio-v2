#!/usr/bin/env python
"""
Simple API test script for Satyam's Portfolio API
Run this script to test all API endpoints
"""

import requests
import json
from datetime import datetime

# API base URL
BASE_URL = "http://localhost:8000"

def test_endpoint(endpoint, description):
    """Test a single API endpoint"""
    print(f"\n{'='*60}")
    print(f"Testing: {description}")
    print(f"Endpoint: {BASE_URL}{endpoint}")
    print(f"{'='*60}")
    
    try:
        response = requests.get(f"{BASE_URL}{endpoint}")
        
        print(f"Status Code: {response.status_code}")
        print(f"Response Time: {response.elapsed.total_seconds():.2f}s")
        
        if response.status_code == 200:
            print("✅ SUCCESS")
            try:
                data = response.json()
                print(f"Response Data: {json.dumps(data, indent=2)}")
            except json.JSONDecodeError:
                print(f"Response Text: {response.text}")
        else:
            print("❌ FAILED")
            print(f"Error: {response.text}")
            
    except requests.exceptions.ConnectionError:
        print("❌ CONNECTION ERROR")
        print("Make sure the Django server is running on port 8000")
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")
    
    print("-" * 60)

def main():
    """Test all API endpoints"""
    print("🚀 Testing Satyam's Portfolio API")
    print(f"Base URL: {BASE_URL}")
    print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Test endpoints
    endpoints = [
        ("/api/blogs/", "Blog Posts API"),
        ("/api/location-weather/", "Weather & Location API"),
        ("/api/spotify/", "Spotify Now Playing API"),
        ("/swagger/", "Swagger Documentation"),
        ("/redoc/", "ReDoc Documentation"),
        ("/api-docs/", "API Documentation"),
    ]
    
    for endpoint, description in endpoints:
        test_endpoint(endpoint, description)
    
    print(f"\n{'='*60}")
    print("🎉 API Testing Complete!")
    print(f"{'='*60}")
    print("\n📚 Documentation URLs:")
    print(f"  Swagger UI: {BASE_URL}/swagger/")
    print(f"  ReDoc: {BASE_URL}/redoc/")
    print(f"  API Docs: {BASE_URL}/api-docs/")
    print("\n🔗 API Endpoints:")
    print(f"  Blogs: {BASE_URL}/api/blogs/")
    print(f"  Weather: {BASE_URL}/api/location-weather/")
    print(f"  Spotify: {BASE_URL}/api/spotify/")

if __name__ == "__main__":
    main()
