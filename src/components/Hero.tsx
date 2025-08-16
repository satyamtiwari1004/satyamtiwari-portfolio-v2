import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ThermometerSun, Music2, Play, Pause, Sparkles } from 'lucide-react';
import { WeatherData, SpotifyData } from '../types';

interface HeroProps {
  weather: WeatherData | null;
  spotify: SpotifyData | null;
}

const Hero: React.FC<HeroProps> = ({ weather, spotify }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const words = ["Hi,", "I'm", "Satyam", "Raj"];

  return (
    <section className="relative mx-auto mt-24 max-w-4xl px-6 pt-20 md:mt-32 md:pt-32">
      {/* Animated Headline */}
      <motion.div
        variants={headlineVariants}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <motion.h1 className="font-display text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300"
        >
          Software Engineer | Problem Solver | Innovator
        </motion.p>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 max-w-3xl text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
      >
        I'm a software engineer passionate about crafting user-friendly, scalable, and visually appealing applications. 
        With 4.5 years of hands-on experience, I enjoy solving challenging problems, building intuitive UIs, 
        and experimenting with creative interactions.
      </motion.p>

      {/* Live Data Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Weather Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-effect rounded-2xl p-6 border"
        >
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="text-accent" size={20} />
            <h3 className="font-medium">Location & Weather</h3>
          </div>
          {weather ? (
            <div className="space-y-2">
              <p className="text-2xl font-semibold">{weather.city}</p>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <ThermometerSun size={16} />
                <span>{weather.temperature} • {weather.condition}</span>
              </div>
            </div>
          ) : (
            <div className="animate-pulse">
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-24 mb-2"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-32"></div>
            </div>
          )}
        </motion.div>

        {/* Spotify Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-effect rounded-2xl p-6 border"
        >
          <div className="flex items-center gap-3 mb-3">
            <Music2 className="text-accent" size={20} />
            <h3 className="font-medium">Now Playing</h3>
          </div>
          {spotify && spotify.isPlaying ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {spotify.albumArt && (
                  <img 
                    src={spotify.albumArt} 
                    alt="Album Art" 
                    className="w-12 h-12 rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <p className="font-medium truncate">{spotify.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 truncate">
                    {spotify.artist}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full bg-accent p-2 text-white"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="text-slate-600 dark:text-slate-300">
              <p>Not currently playing</p>
              <p className="text-sm">Check back later!</p>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Signature */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-16 flex justify-center"
      >
        <svg viewBox="0 0 300 100" className="h-16 w-80">
          <motion.path
            d="M20 60 Q 60 20, 100 60 T 180 60 Q 220 20, 260 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-accent"
          />
          <motion.circle
            cx="80"
            cy="70"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
            className="text-accent"
          />
          <motion.circle
            cx="160"
            cy="70"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7, duration: 0.3 }}
            className="text-accent"
          />
        </svg>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="mt-16 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <Sparkles size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
