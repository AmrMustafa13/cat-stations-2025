// Event Handling Example
function Button({ text }) {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:from-blue-600 hover:to-purple-700 hover:-translate-y-0.5 hover:shadow-lg mr-3 mb-3"
    >
      {text}
    </button>
  );
}

function EventHandling() {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 mb-4">Click any button to see the event handler in action:</p>
      <div className="flex flex-wrap">
        <Button text="Click Me!" />
        <Button text="Another Button" />
        <Button text="Try This One" />
      </div>
    </div>
  );
}

export default EventHandling; 