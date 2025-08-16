import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorBubbles from './components/CursorBubbles';
import BackgroundGrid from './components/BackgroundGrid';
import { WeatherData, SpotifyData, BlogPost } from './types';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [spotify, setSpotify] = useState<SpotifyData | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set accent color
    document.documentElement.style.setProperty("--accent", "#E63946");
    
    // Fetch data from Django backend
    const fetchData = async () => {
      try {
        const [weatherRes, spotifyRes, blogsRes] = await Promise.all([
          fetch('/api/location-weather/'),
          fetch('/api/spotify/'),
          fetch('/api/blogs/')
        ]);

        if (weatherRes.ok) {
          const weatherData = await weatherRes.json();
          setWeather(weatherData);
        }

        if (spotifyRes.ok) {
          const spotifyData = await spotifyRes.json();
          setSpotify(spotifyData);
        }

        if (blogsRes.ok) {
          const blogsData = await blogsRes.json();
          setBlogs(blogsData.results || blogsData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <BackgroundGrid />
      <CursorBubbles />
      
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-12 w-12 border-4 border-accent border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <HeaderNav />
      <Hero weather={weather} spotify={spotify} />
      <About />
      <Skills />
      <Projects />
      <Blog blogs={blogs} />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
