// src/components/Modal.tsx

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-[#212121] text-black dark:text-white rounded-lg p-4 max-w-md mx-auto relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-[#a743f2]">
                    <AiOutlineClose size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
