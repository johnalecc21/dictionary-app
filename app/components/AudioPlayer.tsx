import React, { useRef, useEffect } from 'react';
import { FaPlay } from "react-icons/fa6";

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); 
      audioRef.current.currentTime = 0; 
      audioRef.current.load();
    }
  }, [audioUrl]); 

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handlePlay}
        className="bg-[#ebd0fa] text-white p-4 rounded-full hover:bg-[#dfccea] dark:bg-[#3b383d]"
      >
        <FaPlay size={15} color="#a743f2" />
      </button>

      <audio ref={audioRef}>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
