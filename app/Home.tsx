"use client"; 
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WordCard from './components/WordCard';
import { WordData } from './types/word';
import { useDispatch, useSelector } from 'react-redux';
import { addWordToHistory, clearHistory } from './redux/slices/wordSlice';
import Modal from './components/Modal';

const Home: React.FC = () => {
    const [wordData, setWordData] = useState<WordData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const history = useSelector((state: { words: { history: { word: string; date: string }[] } }) => state.words.history); 

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark'); 
    };

    const fetchWordData = async (word: string) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) {
                if (response.status === 404) {
                    alert(`The word "${word}" was not found. Please try a different word.`);
                } else {
                    throw new Error('Error fetching word data');
                }
                return;
            }

            const data: WordData[] = await response.json();
            setWordData(data[0]);
            dispatch(addWordToHistory({ word, date: new Date().toISOString() }));
        } catch (error) {
            console.error(error);
            alert('There was an error fetching the word data. Please try again later.');
        }
    };

    const handleClearHistory = () => {
        dispatch(clearHistory());
        setIsModalOpen(false);
    };

    return (
        <div className={`flex flex-col w-full min-h-screen p-4 text-black dark:text-white dark:bg-[#121111]`}>
            <Header toggleTheme={toggleTheme} />
            <SearchBar onSearch={fetchWordData} />
            {wordData && (
                <WordCard
                    word={wordData.word}
                    phonetic={wordData.phonetic}
                    phonetics={wordData.phonetics}  
                    meanings={wordData.meanings}
                    synonyms={wordData.meanings.flatMap((m) => m.synonyms || [])}
                />
            )}

            <div className="grid place-items-center mt-4">
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="bg-[#a743f2] text-white p-2 rounded"
                >
                    Show History
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-4">Search History</h2>
                    <ul>
                        {history && history.length > 0 ? ( 
                            history.map((entry, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-400">
                                    <span className="text-purple-500 mr-2">•</span> 
                                    {entry.word} - {new Date(entry.date).toLocaleString()}
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500">The history is empty.</li> 
                        )}
                    </ul>
                    <div className="flex justify-center">
                        <button
                            onClick={handleClearHistory}
                            className="mt-4 bg-[#a743f2] text-white p-2 rounded focus:outline-none"
                        >
                            Clear History
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Home;
