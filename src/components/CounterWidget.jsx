import React, { useState } from 'react';

export function CounterWidget() {
  const [value, setCount] = useState(() => {
    return 4;
  })

  function increment() {
    setCount(prevValue => prevValue + 1);
  }

  function decrement() {
    if (value > 0) {
      setCount(prevValue => prevValue - 1);
    }
  }

  function reset() {
    setCount(prevValue => prevValue - prevValue);
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-md mx-auto mb-20">
      <h3 className="text-xl font-semibold mb-4">დინამიური მრიცხველი</h3>
      <p className='counter-display mb-10 p-4 bg-white rounded-lg shadow-lg font-semibold inline-block'>{value}</p>
      <div className="buttons-container flex gap-20">
        <button className='increase cursor-pointer p-2 bg-green-500 hover:bg-green-600  rounded-lg shadow-md font-semibold text-white' onClick={increment}>increase</button>
        <button className='decrease cursor-pointer p-2 bg-red-500 hover:bg-red-600 rounded-lg shadow-md font-semibold text-white' onClick={decrement}>decrease</button>
        <button className='refresh cursor-pointer p-2 bg-gray-500 hover:bg-gray-600 rounded-lg shadow-md font-semibold text-white'onClick={reset}>reset</button>
      </div>
    </div>
  );
}