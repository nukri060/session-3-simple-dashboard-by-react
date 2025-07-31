import React, { useState } from 'react';

export function TextToggleWidget() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        ინტერაქტიული ტექსტის გადამრთველი
      </h3>
      
      <input
        type="text"
        id="interactive-input"
        name="interactive-input"
        placeholder="შეიყვანეთ ტექსტი აქ..."
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 mb-4"
      />

      <p className="text-lg text-gray-700 font-medium">
        {userInput || 'ტექსტი გამოჩნდება აქ.'}
      </p>
    </div>
  );
}
