// Controlled Inputs + Forms Example
import { useState } from "react";

function ControlledInputs() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      alert(`Hello, ${name}!`);
    } else {
      alert("Please enter your name first!");
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg"
        >
          Submit
        </button>
      </form>
      
      <div className="bg-gray-50 p-4 rounded-lg border">
        <p className="text-sm text-gray-600 mb-2">
          <strong>Current input value:</strong>
        </p>
        <p className="text-lg font-medium text-gray-800 bg-white px-3 py-2 rounded border">
          {name || "(empty)"}
        </p>
      </div>
    </div>
  );
}

export default ControlledInputs; 