import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (word: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
      setInput('');
    } else {
      alert('Please enter a word to search');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <div className="relative w-full max-w-3xl"> 
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a word..."
          className="rounded-xl p-2 pr-10 bg-[#f4f4f4] dark:bg-[#212121] text-black dark:text-white w-full" 
        />
        <span 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
          onClick={handleSearch}
        >
          <FaSearch size={15} color="#a743f2" />
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
