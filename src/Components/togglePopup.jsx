import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../assets/Daas Computers LOGO.png"; // Your logo
import whatsapp from "../assets/whatsapp bg.jpg"; // Your background image

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={togglePopup}
          className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition duration-300"
        >
          <IoLogoWhatsapp className="w-6 h-6" />
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="w-80 rounded-lg shadow-2xl border border-gray-200 bg-white overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Dass Computers Logo"
                className="w-9 h-9 rounded-full bg-white object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold leading-tight">Dass Computer</h3>
                <p className="text-xs opacity-90">Typically replies within minutes</p>
              </div>
            </div>
            <button onClick={togglePopup} className="text-white hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

          {/* Message Preview with Background */}
          <div
            className="px-4 py-6 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${whatsapp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-md shadow-sm max-w-[85%]">
              <p className="text-xs font-semibold text-gray-800 mb-1">Dass Computer</p>
              <p className="text-sm text-gray-700">Hi 👋,<br /> how can I help you today?</p>
              <p className="text-[10px] text-right text-gray-400 mt-2">Now</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-4 pb-4 pt-2">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 transition"
            >
              <IoLogoWhatsapp className="w-5 h-5" />
              <span className="text-sm">Click here to start messaging</span>
            </a>
            <p className="text-center text-xs text-gray-500 mt-2">
              We'll communicate through WhatsApp
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
