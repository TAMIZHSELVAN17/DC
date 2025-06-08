import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Icon to Open Popup */}
      {!isOpen && (
        <button
          onClick={togglePopup}
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
        >
          <IoLogoWhatsapp className="w-6 h-6" />
        </button>
      )}

      {/* Popup Content */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 border border-gray-200">
          {/* Header */}
          <div className="bg-teal-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-400 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <div>
                <h3 className="font-semibold">Dass Computer</h3>
                <p className="text-xs">Replies within 30 minutes</p>
              </div>
            </div>
            <button onClick={togglePopup} className="text-white hover:text-gray-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Message Section */}
          <div className="p-4 bg-gray-100">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-semibold">Dass Computer</p>
              <p>Hello! 💻</p>
              <p>Looking for laptops, computers, or accessories? How can we assist you today?</p>
              <p className="text-xs text-gray-500 text-right">9:06 AM</p>
            </div>
          </div>

          {/* Start Chat Button */}
          <div className="p-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-full py-2 rounded-lg flex items-center justify-center hover:bg-green-600 transition"
            >
              <IoLogoWhatsapp className="w-5 h-5 mr-2" />
              Start Chat
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
