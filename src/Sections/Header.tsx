import React from "react"

const Header = ({isAnalyzing}) => {
  return (
    <nav
      className={
        "w-[400px] h-[60px] bg-[#4F46E5] flex justify-between items-center" +
        " px-4 py-2 text-base rounded-b-lg sticky top-0 left-0"
      }>
      <div className={"flex items-center justify-center"}>
        <h3 className={"text-white font-bold"}>FactChecker</h3>
      </div>
      <div className={"flex items-center justify-between w-[25%]"}>
        <div className={`w-[10px] h-[10px] bg-[#10B981] rounded-full ${isAnalyzing ? 'animate-pulse' : ''}`}></div>
        <h3 className={"text-white font-semibold"}>Analyzing</h3>
      </div>
    </nav>
  )
}
export default Header
