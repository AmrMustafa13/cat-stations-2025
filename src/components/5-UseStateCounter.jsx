// useState Example
import { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="text-2xl font-semibold text-gray-800 mb-2">Count:</p>
        <p className="text-4xl font-bold text-blue-600">{count}</p>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button 
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Reset
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default UseStateCounter; 