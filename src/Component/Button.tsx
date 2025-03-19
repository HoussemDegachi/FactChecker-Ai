// WaveButton.jsx
import React, { useEffect, useRef } from "react";

const AnimatedButton = ({ onClick }) => {
  const textRef = useRef(null);

  const handleClick = () => {
    if (onClick) onClick();
  };

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const letters = text.textContent.split("");
    text.textContent = "";

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.05}s`;

      if (letter === " ") {
        span.className = "inline-block transition-transform mr-2";
      } else {
        span.className = "inline-block transition-transform";
      }

      text.appendChild(span);
    });

    const spans = text.querySelectorAll("span");

    const animateWave = () => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.transform = "translateY(-10px)";
          setTimeout(() => {
            span.style.transform = "translateY(0)";
          }, 300);
        }, index * 50);
      });
    };

    setTimeout(animateWave, 500);

    const interval = setInterval(animateWave, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 flex justify-center">
      <button
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 
          w-4/5 rounded-full px-6 py-3.5 text-white font-bold text-lg mb-5 mt-3
          shadow-lg transition-all duration-300 group
          focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-80"
        type="button"
        onClick={handleClick}
      >
        <span
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        ></span>

        <div className="relative z-10 flex items-center justify-center">
          <span ref={textRef} className="mr-2 tracking-wide">
            Detailed Report
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        <style jsx>{`
          button:focus {
            box-shadow: 0 0 5px #ff00ff, 
                        0 0 10px #ff00ff, 
                        0 0 15px #ff00ff,
                        0 0 20px #ff00ff;
            outline: none;
          }
        `}</style>
      </button>
    </div>
  );
};

export default AnimatedButton;
