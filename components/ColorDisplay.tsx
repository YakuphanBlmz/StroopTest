
import React from 'react';

interface ColorDisplayProps {
  word: string;
  textColorClass: string;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ word, textColorClass }) => {
  const fullTextColorClass = `text-${textColorClass}`;

  return (
    <div className="flex items-center justify-center w-full h-64 bg-gray-800 rounded-xl shadow-2xl my-8">
      <h1
        key={word + textColorClass} // Force re-render for animation
        className={`${fullTextColorClass} text-7xl md:text-9xl font-extrabold tracking-wider animate-fade-in`}
        style={{ textShadow: `0 0 15px var(--tw-shadow-color)` }}
      >
        {word}
      </h1>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ColorDisplay;
