// Final Project – Feedback App
import { useState } from "react";

function FeedbackApp() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newFeedback = { 
        id: Date.now(), // Simple ID for demo
        name, 
        comment,
        timestamp: new Date().toLocaleString()
      };
      setFeedbackList([...feedbackList, newFeedback]);
      setName("");
      setComment("");
    }
  };

  const clearAll = () => {
    setFeedbackList([]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">💬 Feedback App</h2>
        <p className="text-gray-600">Share your thoughts and see what others are saying!</p>
      </div>
      
      {/* Feedback Form */}
      <div className="bg-white rounded-xl shadow-lg border p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none"
              required
            />
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              Your Feedback
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              rows="4"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none resize-none"
              required
            />
          </div>
          
          <div className="flex gap-4">
            <button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg"
            >
              🚀 Submit Feedback
            </button>
            {feedbackList.length > 0 && (
              <button 
                type="button" 
                onClick={clearAll}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                🗑️ Clear All
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Feedback List */}
      <div className="bg-white rounded-xl shadow-lg border p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            📝 Feedback ({feedbackList.length})
          </h3>
          {feedbackList.length > 0 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {feedbackList.length} {feedbackList.length === 1 ? 'comment' : 'comments'}
            </span>
          )}
        </div>
        
        {feedbackList.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💭</div>
            <p className="text-gray-500 text-lg">No feedback yet.</p>
            <p className="text-gray-400">Be the first to share your thoughts!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {feedbackList.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {feedback.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{feedback.name}</h4>
                      <p className="text-sm text-gray-500">{feedback.timestamp}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-13">
                  {feedback.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedbackApp; 