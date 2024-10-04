import React, { useState } from 'react';
import { RiBook2Line } from "react-icons/ri";
import ThemeToggle from './ThemeToggle';
import FontSelector from './FontSelector'; 

interface HeaderProps {
  toggleTheme: () => void; 
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [font, setFont] = useState('sans');

  const handleFontChange = (selectedFont: string) => {
    setFont(selectedFont);
    document.body.className = ''; 
    document.body.classList.add(`font-${selectedFont}`); 
  };

  return (
    <header className="flex justify-between items-center p-4 bg-transparent text-white w-full">
      <div className="flex items-center w-full max-w-3xl mx-auto justify-between"> 
        <div className="flex items-center">
          <RiBook2Line className="text-[#979797] mr-2" size={24} />
        </div>
        <div className="flex items-center space-x-4">
          <FontSelector onChangeFont={handleFontChange} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
