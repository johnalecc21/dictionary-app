import React from 'react';
import { RiArrowDownWideLine } from "react-icons/ri";

interface FontSelectorProps {
  onChangeFont: (font: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ onChangeFont }) => {
  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFont(e.target.value);
  };

  return (
    <div className="relative flex items-center space-x-2">
      <select
        id="font-select"
        onChange={handleFontChange}
        className="p-2 rounded-md bg-transparent dark:bg-[#212121] text-black dark:text-white appearance-none pr-8 border border-transparent focus:outline-none focus:border-transparent"
      >
        <option value="sans">Sans-Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Monospace</option>
      </select>
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#a743f0] pointer-events-none">
        <RiArrowDownWideLine size={16} /> 
      </span>
    </div>
  );
};

export default FontSelector;
