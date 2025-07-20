// JSX & Virtual DOM Example
function JSXExample() {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello, React!</h1>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
        <p className="text-sm text-blue-800">
          <strong>JSX Info:</strong> This JSX gets compiled to <code className="bg-blue-100 px-1 rounded">React.createElement('h1', null, 'Hello, React!')</code>
        </p>
      </div>
    </div>
  );
}

export default JSXExample; 