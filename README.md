# Satyam Rajesh Tiwari - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, Framer Motion, and Django. Features a playful design inspired by [jhey.dev](https://www.jhey.dev/) with smooth animations and dynamic content.

## 🚀 Features

### Frontend (React + TypeScript + Framer Motion)
- **Interactive Hero Section** with animated headline reveal
- **Live Weather & Location** data from Django API
- **Spotify "Now Playing"** widget
- **Cursor-following particle effects** and parallax background
- **Responsive design** for all devices
- **Smooth page transitions** and micro-interactions
- **Project showcase** with interactive modals
- **Skills visualization** with animated progress bars
- **Blog section** consuming Django REST API
- **Contact form** with animated inputs

### Backend (Django + Django REST Framework)
- **Weather API** integration using Open-Meteo
- **Spotify API** integration for "Now Playing" feature
- **Blog management** with admin interface
- **RESTful APIs** for dynamic content
- **CORS configuration** for frontend integration

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React (Icons)
- Axios

### Backend
- Django 4.2
- Django REST Framework
- Django CORS Headers
- Spotipy (Spotify API)
- Requests (HTTP client)
- SQLite (Development)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3000`

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start Django server:**
   ```bash
   python manage.py runserver
   ```
   The Django API will run on `http://localhost:8000`

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True

# Spotify API (Optional)
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
SPOTIFY_REDIRECT_URI=http://localhost:8000/api/spotify/callback

# Weather API (Optional - using free Open-Meteo by default)
WEATHER_API_KEY=your-weather-api-key
DEFAULT_LOCATION=Patna,India
```

## 🎨 Customization

### Colors & Styling
- Primary accent color: `#E63946` (defined in `tailwind.config.js`)
- Fonts: Playfair Display (headings), Inter (body)
- All colors and animations can be customized in `src/index.css`

### Content
- Update personal information in component files
- Add your projects in `src/components/Projects.tsx`
- Modify skills in `src/components/Skills.tsx`
- Add blog posts through Django admin interface

### API Endpoints
- `GET /api/location-weather/` - Weather and location data
- `GET /api/spotify/` - Spotify "Now Playing" data
- `GET /api/blogs/` - Blog posts list

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting platform

### Backend (Heroku/DigitalOcean)
1. Update `ALLOWED_HOSTS` in settings
2. Set `DEBUG=False` in production
3. Configure database (PostgreSQL recommended)
4. Set environment variables
5. Deploy using your preferred platform

## 🎯 Key Features Explained

### Animated Headline
The hero section features a staggered text animation that reveals "Hi, I'm Satyam Raj" word by word with smooth transitions.

### Cursor Particles
Interactive particle effects follow the mouse cursor, creating a playful and engaging experience.

### Live Data Integration
- **Weather API**: Real-time weather data for Patna, India (easily configurable)
- **Spotify Integration**: Shows currently playing track (requires Spotify API credentials)

### Project Showcase
Interactive project cards with hover effects and detailed modals showcasing your work.

### Skills Visualization
Animated skill bars and categorized technology icons with hover effects.

## 🔧 Development

### Project Structure
```
├── src/
│   ├── components/          # React components
│   ├── types.ts            # TypeScript definitions
│   └── index.css           # Global styles
├── backend/
│   ├── api/                # Django API app
│   ├── portfolio_backend/  # Django project settings
│   └── manage.py           # Django management
└── public/                 # Static assets
```

### Adding New Features
1. Create new components in `src/components/`
2. Add TypeScript types in `src/types.ts`
3. Create corresponding Django models/views if needed
4. Update API endpoints in `backend/api/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Satyam Rajesh Tiwari**
- GitHub: [@satyamtiwari1004](https://github.com/satyamtiwari1004)
- LinkedIn: [satyamrajeshtiwari](https://www.linkedin.com/in/satyamrajeshtiwari/)

## 🙏 Acknowledgments

- Design inspiration from [jhey.dev](https://www.jhey.dev/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Weather data from [Open-Meteo](https://open-meteo.com/)
- Music data from [Spotify Web API](https://developer.spotify.com/documentation/web-api/)

---

Made with ❤️ by Satyam Rajesh Tiwari