// src/components/ThemeToggle.tsx
import React, { useState } from 'react';
import Toggle from 'react-toggle';
import { FaRegMoon} from 'react-icons/fa';
import { LuSun } from "react-icons/lu";
import 'react-toggle/style.css'; 

const ThemeToggle: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark', !isDarkTheme);
  };

  return (
    <div className="flex items-center">
      <label>
        <Toggle
          checked={isDarkTheme}
          onChange={handleToggle}
          icons={{ checked: '', unchecked: '' }}
        />
      </label>
      <span className="ml-2 mb-1.5">
        {isDarkTheme ? <FaRegMoon size={20} color="#767676" /> : <LuSun size={22} color="#767676" />}
      </span>
    </div>
  );
};

export default ThemeToggle;
