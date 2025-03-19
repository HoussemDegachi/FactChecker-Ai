import React from 'react';

function ErrorComp({ errorData }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-6 py-10">
      <div className="w-20 h-20 mb-6 relative">
        {/* Error Icon/Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-full h-full text-indigo-600 p-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      
      <h2 className="text-xl font-bold text-indigo-600 mb-3">Analysis Error</h2>
      
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4 mb-6 w-full shadow-md">
        <p className="text-indigo-800 text-center break-words">
          {errorData?.message || "Something went wrong. Please try again later."}
        </p>
      </div>
      
      <button 
        onClick={() => window.location.reload()} 
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 
          px-6 py-3 rounded-full text-white font-bold 
          shadow-lg transition-all duration-300 group"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
        <span className="relative flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </span>
      </button>
    </div>
  );
}

export default ErrorComp;