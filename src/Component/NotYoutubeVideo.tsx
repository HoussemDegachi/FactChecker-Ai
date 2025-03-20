import React from 'react';
import AnimatedButton from "~Component/Button"

function NotYoutubeVideo() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6 bg-gray-900">
      {/* Main container */}
      <div className="relative flex flex-col items-center justify-center mb-6">
        {/* Face with eyes */}
        <div className="relative w-40 h-40 rounded-full bg-gray-900 mb-8 flex items-center justify-center shadow-xl">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 opacity-30 animate-pulse"></div>
          {/* Inner face color */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
          
          {/* Eyes container */}
          <div className="relative w-28 h-10 flex justify-between">
            {/* Left eye */}
            <div className="eye sad">
              <div className="pupil"></div>
              <div className="eyelid"></div>
            </div>
            
            
            {/* Right eye */}
            <div className="eye sad">
              <div className="pupil"></div>
              <div className="eyelid"></div>
            </div>
          </div>
          
          {/* Sad mouth */}
          <div className="absolute w-20 h-10 overflow-hidden bottom-8">
            <div className="w-20 h-20 border-4 border-cyan-300 rounded-full mt-14 opacity-80"></div>
          </div>
        </div>

        {/* Text message */}
        <h2 className="text-cyan-400 text-2xl font-bold mb-2 text-center">Play a YouTube video</h2>
        <p className="text-gray-300 text-center max-w-xs">
          This extension only works on YouTube video pages. Navigate to a YouTube video to analyze facts.
        </p>
        <AnimatedButton text="Go to YouTube" onClick={() => window.open("https://youtube.com")} />
      </div>

      {/* Custom CSS for the eye animations */}
      <style>{`
        .eye {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          overflow: hidden;
          display: inline-block;
        }
        
        .pupil {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #000;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: lookAround 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        .eye.sad .pupil {
          animation: sadLook 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        .eyelid {
          position: absolute;
          width: calc(100% + 10px);
          height: 0;
          background: #111827; /* matches bg-gray-900 */
          top: -5px;
          left: -5px;
          animation: blink 6s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        .eye.sad:after {
          content: '';
          position: absolute;
          width: calc(100% + 20px);
          height: 0;
          border-radius: 50%;
          background: #111827; /* matches bg-gray-900 */
          left: -10px;
          top: -10px;
          animation: sadAnimate 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        @keyframes blink {
          0%, 45%, 52%, 100% {
            height: 0;
          }
          48%, 49% {
            height: 40px;
          }
        }
        
        @keyframes lookAround {
          0%, 20% {
            transform: translate(-50%, -50%);
          }
          25% {
            transform: translate(-70%, -50%);
          }
          50% {
            transform: translate(-30%, -50%);
          }
          75% {
            transform: translate(-50%, -70%);
          }
          100% {
            transform: translate(-50%, -50%);
          }
        }
        
        @keyframes sadLook {
          0%, 10% {
            transform: translate(-50%, -50%);
          }
          20%, 40% {
            transform: translate(-50%, 30%);
          }
          50%, 60% {
            transform: translate(-70%, -50%);
          }
          70%, 80% {
            transform: translate(-30%, -50%);
          }
          100% {
            transform: translate(-50%, -50%);
          }
        }
        
        @keyframes sadAnimate {
          0%, 10% {
            height: 0;
          }
          20%, 40% {
            height: 100%;
          }
          50%, 100% {
            height: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default NotYoutubeVideo;