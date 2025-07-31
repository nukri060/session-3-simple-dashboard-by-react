import React, { useState } from 'react';

export function TextToggleWidget() {
  const [userInput, setUserInput] = useState('');
  const [visible, setVisibility] = useState(false);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const changeVisibility = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-md mx-auto transition-all duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-300">
        ინტერაქტიული ტექსტის გადამრთველი
      </h3>

      <input
        type="text"
        id="interactive-input"
        name="interactive-input"
        placeholder="შეიყვანეთ ტექსტი აქ..."
        onChange={handleInputChange}
        className="w-full px-4 py-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out hover:border-blue-500"
      />

      <div className="flex justify-between items-start gap-2 mb-4 transition-all duration-300 ease-in-out">
        <p className={`text-sm text-gray-500 font-medium transition-opacity duration-300 ease-in-out break-words min-w-0 flex-1 ${visible ? "opacity-100" : "opacity-0"}`}>
          {userInput || 'ტექსტი გამოჩნდება აქ.'}
        </p>
        <p className="text-sm text-gray-500 whitespace-nowrap transition-colors duration-300">
          სიმბოლოები: {userInput.length}
        </p>
      </div>

      <button
        className="toggle-visibility bg-black text-white px-4 py-2 rounded-lg mt-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 active:scale-95"
        onClick={changeVisibility}
      >
        ტექსტის ჩვენება/დამალვა
      </button>
    </div>
  );
}
