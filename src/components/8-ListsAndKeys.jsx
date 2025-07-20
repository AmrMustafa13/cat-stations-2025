// Lists & Keys Example
import { useState } from "react";

function ListsAndKeys() {
  const [todos] = useState([
    "Learn React", 
    "Practice", 
    "Build Projects",
    "Master Hooks",
    "Create Portfolio"
  ]);

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        📝 Todo List
      </h3>
      <ul className="bg-white rounded-lg shadow-md border divide-y divide-gray-200">
        {todos.map((todo, index) => (
          <li 
            key={index} 
            className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mr-3">
                {index + 1}
              </span>
              <span className="text-gray-800">{todo}</span>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Each list item has a unique <code className="bg-blue-100 px-1 rounded">key</code> prop for React's virtual DOM optimization.
        </p>
      </div>
    </div>
  );
}

export default ListsAndKeys; 