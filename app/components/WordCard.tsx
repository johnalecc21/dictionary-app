import React from 'react';
import AudioPlayer from './AudioPlayer';
import { Phonetic, Meaning } from '../types/word';

interface WordCardProps {
  word: string;
  phonetic: string;
  phonetics?: Phonetic[]; 
  meanings: Meaning[];
  synonyms: string[];
}

const WordCard: React.FC<WordCardProps> = ({ word, phonetic, phonetics, meanings, synonyms }) => {

  const audioUrl = phonetics?.find((phonetic) => phonetic.audio)?.audio;

  return (
    <div className="mb-6 bg-transparent dark:bg-[#212121] dark:text-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto ">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-between">
        <span>{word}</span>
        {audioUrl && (
          <div className="ml-4">
            <AudioPlayer audioUrl={audioUrl} />
          </div>
        )}
      </h2>
      <p className="text-xl text-purple-500 mt-1">{phonetic}</p>

      <h3 className="font-light text-lg mt-6 text-gray-500 dark:text-gray-300">Meaning</h3>
      <ul className="list-none pl-0">
        {meanings.map((meaning, index) => (
          <li key={index} className="mb-2">
            <div className="flex items-center">
              <span className="font-semibold">{meaning.partOfSpeech}</span>
              <hr className="my-2 border-gray-200 dark:border-gray-600 flex-grow ml-2" /> 
            </div>
            <ul className="list-none pl-5">
              {meaning.definitions.map((def, idx) => (
                <li key={idx} className="flex items-start text-gray-700 dark:text-gray-400">
                  <span className="text-purple-500 mr-2">•</span> 
                  <span>{def.definition}</span>
                  {idx < meaning.definitions.length - 1 && ', '}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {synonyms.length > 0 && (
        <div className="flex items-center mt-6">
          <h3 className="font-light text-lg text-gray-500 dark:text-gray-300 mr-2">Synonyms:</h3>
          <p className="text-purple-500">{synonyms.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default WordCard;
