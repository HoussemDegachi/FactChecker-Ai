const LoadingSquares = () => (
  <div
    className="flex flex-col items-center justify-center w-full h-full"
    style={{ backgroundColor: "#111827" }}>
    <div className="loader">
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
    </div>
    <div className="loading-text mt-10">
      <div className="wave-text">Analyzing video content</div>
      <div className="subtitle">Detecting potential misinformation...</div>
    </div>
  </div>
)

export default LoadingSquares
