
import React from 'react';

interface ControlsProps {
  isPlaying: boolean;
  togglePlay: () => void;
  speed: number;
  setSpeed: (speed: number) => void;
}

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const Controls: React.FC<ControlsProps> = ({ isPlaying, togglePlay, speed, setSpeed }) => {
  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
      <button
        onClick={togglePlay}
        className={`flex items-center justify-center px-6 py-3 rounded-lg font-bold text-lg shadow-md transition-transform transform hover:scale-105 ${
          isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
        {isPlaying ? 'Durdur' : 'Başlat'}
      </button>
      <div className="flex-grow w-full sm:w-auto flex items-center gap-4">
        <label htmlFor="speed" className="text-gray-300 font-medium whitespace-nowrap">
          Hız: {(speed / 1000).toFixed(1)}s
        </label>
        <input
          id="speed"
          type="range"
          min="500"
          max="3000"
          step="100"
          value={speed}
          onChange={handleSpeedChange}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
      </div>
    </div>
  );
};

export default Controls;
