// Conditional Rendering Example
import { useState } from "react";

function LoginMessage({ isLoggedIn }) {
  return (
    <div className={`p-4 rounded-lg font-medium ${
      isLoggedIn 
        ? 'bg-green-100 text-green-800 border border-green-300' 
        : 'bg-red-100 text-red-800 border border-red-300'
    }`}>
      {isLoggedIn ? (
        <p className="flex items-center">
          ✅ Welcome back! You are logged in.
        </p>
      ) : (
        <p className="flex items-center">
          ❌ Please log in to continue.
        </p>
      )}
    </div>
  );
}

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="space-y-6">
      <LoginMessage isLoggedIn={isLoggedIn} />
      
      <div className="text-center">
        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            isLoggedIn
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isLoggedIn ? "🔐 Logout" : "🔑 Login"}
        </button>
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Current state:</strong> isLoggedIn = {isLoggedIn ? 'true' : 'false'}
        </p>
      </div>
    </div>
  );
}

export default ConditionalRendering; 