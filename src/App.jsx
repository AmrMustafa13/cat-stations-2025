import { useState } from 'react'
import './App.css'

// Import all example components
import JSXExample from './components/1-JSXExample'
import BasicGreeting from './components/2-BasicGreeting'
import PropsExample from './components/3-PropsExample'
import EventHandling from './components/4-EventHandling'
import UseStateCounter from './components/5-UseStateCounter'
import ConditionalRendering from './components/6-ConditionalRendering'
import ControlledInputs from './components/7-ControlledInputs'
import ListsAndKeys from './components/8-ListsAndKeys'
import UseEffectFetch from './components/9-UseEffectFetch'
import FeedbackApp from './components/10-FeedbackApp'

function App() {
  const [selectedExample, setSelectedExample] = useState('jsx')

  const examples = [
    { id: 'jsx', title: '1. JSX & Virtual DOM', component: <JSXExample /> },
    { id: 'greeting', title: '2. Basic Components', component: <BasicGreeting /> },
    { id: 'props', title: '3. Props', component: <PropsExample /> },
    { id: 'events', title: '4. Event Handling', component: <EventHandling /> },
    { id: 'state', title: '5. useState Hook', component: <UseStateCounter /> },
    { id: 'conditional', title: '6. Conditional Rendering', component: <ConditionalRendering /> },
    { id: 'forms', title: '7. Controlled Inputs & Forms', component: <ControlledInputs /> },
    { id: 'lists', title: '8. Lists & Keys', component: <ListsAndKeys /> },
    { id: 'effects', title: '9. useEffect & API Calls', component: <UseEffectFetch /> },
    { id: 'project', title: '10. Final Project - Feedback App', component: <FeedbackApp /> }
  ]

  const currentExample = examples.find(ex => ex.id === selectedExample)

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-effect shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            🚀 CAT Stations Session Examples
          </h1>
          <p className="text-lg text-gray-600">
            Interactive examples for learning React concepts
          </p>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <nav className="w-full lg:w-80 glass-effect rounded-xl p-6 shadow-xl h-fit">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              📚 Examples
            </h3>
            <ul className="space-y-2">
              {examples.map((example) => (
                <li key={example.id}>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedExample === example.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform translate-x-1'
                        : 'text-gray-700 hover:bg-gray-100 hover:translate-x-1 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedExample(example.id)}
                  >
                    {example.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <main className="flex-1 glass-effect rounded-xl p-8 shadow-xl max-h-[calc(100vh-12rem)] overflow-y-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-3 border-b-4 border-blue-500">
                {currentExample?.title}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                {currentExample?.component}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="glass-effect mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center">
          <p className="text-gray-600">
            Use the sidebar to navigate between different React concepts
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
