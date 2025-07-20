// Props Example
function Greeting({ name }) {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-4 rounded-lg text-center mb-3">
      <h2 className="text-xl font-semibold">Hello, {name}!</h2>
    </div>
  );
}

function PropsExample() {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">👋 Greetings</h3>
        <p className="text-gray-600">Same component, different props:</p>
      </div>
      
      <Greeting name="Amr" />
      <Greeting name="Sarah" />
      <Greeting name="Ahmed" />
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-6">
        <p className="text-sm text-purple-800">
          <strong>Props Info:</strong> Props make components reusable by passing different data to the same component.
        </p>
      </div>
    </div>
  );
}

export default PropsExample; 