
import React, { useState, useEffect, useCallback } from 'react';
import ColorDisplay from './components/ColorDisplay';
import Controls from './components/Controls';
import Palette from './components/Palette';
import { COLORS } from './constants';
import type { ColorInfo } from './types';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1500); // in milliseconds
  const [currentColor, setCurrentColor] = useState<ColorInfo>(COLORS[0]);
  const [currentTextColor, setCurrentTextColor] = useState<ColorInfo>(COLORS[1]);

  const updateColors = useCallback(() => {
    let wordIndex = Math.floor(Math.random() * COLORS.length);
    let colorIndex = Math.floor(Math.random() * COLORS.length);

    // Ensure the word and color are never the same
    while (wordIndex === colorIndex) {
      colorIndex = Math.floor(Math.random() * COLORS.length);
    }

    setCurrentColor(COLORS[wordIndex]);
    setCurrentTextColor(COLORS[colorIndex]);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(updateColors, speed);
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, speed, updateColors]);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
    if (!isPlaying) {
        // Start with a fresh color immediately
        updateColors();
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
          Stroop Testi
        </h1>
        <p className="text-gray-400 mb-8 text-base sm:text-lg">
          Kelimeyi <strong className="text-red-400">okuma</strong>, rengi <strong className="text-blue-400">söyle</strong>!
        </p>
      </div>

      <ColorDisplay
        word={currentColor.name_tr}
        textColorClass={currentTextColor.tailwindClass}
      />

      <Controls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        speed={speed}
        setSpeed={setSpeed}
      />

      <Palette colors={COLORS} />
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Bilişsel esnekliğinizi ve odaklanma yeteneğinizi test edin.</p>
        <p>Bu uygulama Yakuphan BİLMEZ tarafından geliştirilmiştir.</p>
      </footer>
    </main>
  );
};

export default App;
