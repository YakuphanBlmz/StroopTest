
import React from 'react';
import type { ColorInfo } from '../types';

interface PaletteProps {
  colors: ColorInfo[];
}

const Palette: React.FC<PaletteProps> = ({ colors }) => {
  return (
    <div className="w-full max-w-2xl mt-8 p-6 bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-center text-cyan-400 mb-4">
        Renk Paleti ({colors.length} Renk)
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {colors.map((color) => {
          const bgColorClass = `bg-${color.tailwindClass}`;
          const borderColorClass = `border-${color.tailwindClass}`;
          return (
            <div key={color.name_tr} className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full ${bgColorClass} border-2 ${borderColorClass} shadow-lg`}
              ></div>
              <span className="text-sm font-medium text-gray-300">{color.name_tr}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Palette;
