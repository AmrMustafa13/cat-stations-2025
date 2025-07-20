// Basic Components Example
function BasicGreeting() {
  return (
    <div className="text-center py-8">
      <p className="text-2xl text-gray-700 mb-4">Welcome to React!</p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
        <p className="text-sm text-green-800">
          <strong>Component Info:</strong> This is a simple functional component that returns JSX.
        </p>
      </div>
    </div>
  );
}

export default BasicGreeting; 