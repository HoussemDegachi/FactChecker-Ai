import React from "react"

const Header = ({isAnalyzing}) => {
  const TextLogoShadow = {
    textShadow:"0px 0px 10px cyan," +
      "0px 0px 20px cyan," +
      "0px 0px 40px cyan," +
      "0px 0px 80px cyan;"
  }
  return (
    // bg-[#4F46E5]
    <nav
      className={
        "w-[400px] h-[60px] bg-black flex justify-center items-center" +
        " px-4 py-2 text-base rounded-b-lg sticky top-0 left-0"
      }>
      <div className={"flex items-center justify-center"}>
        <h3 className={"text-white text-2xl font-bold TextLogoShadow"}>FactChecker-Ai</h3>
      </div>
      {/*<div className={"flex items-center justify-between w-[25%]"}>*/}
      {/*  <div className={`w-[10px] h-[10px] bg-[#10B981] rounded-full ${isAnalyzing ? 'animate-pulse' : ''}`}></div>*/}
      {/*  <h3 className={"text-white font-semibold"}>Analyzing</h3>*/}
      {/*</div>*/}
    </nav>
  )
}
export default Header