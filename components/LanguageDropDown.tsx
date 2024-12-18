"use client";
import React, { useState } from "react";

const LanguageDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Affan Oromo", "Amharic"];

  return (
    <div className="relative">
      {/* Half-Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-auto h-10 bg-blue-500 p-5 py-auto rounded-l-full  text-white flex items-center justify-center shadow-md"
      >
        {selectedLanguage}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 w-32 bg-white shadow-lg rounded-lg mt-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropDown;
