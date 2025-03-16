import "style.css"

import FactCard from "~Component/FactCard"
import Header from "~Sections/Header"
import GetCurrentTabUrl from "~Utils/GetCurrentTabUrl"
import { useState } from "react"

function IndexPopup() {
  const CurrentUrl = GetCurrentTabUrl();
  const [isAnalyzing, setIsAnalyzing] = useState(false);


  return (
    <div
      className={
        "w-[400px] h-[600px] flex flex-col" +
        "items-center justify-center overflow-y-auto flex-grow"
      }>
      <Header isAnalyzing={isAnalyzing} />
      <div className={"absolute top-[60px] overflow-y-auto max-h-[540px] "}>
        <FactCard TrueFact={true} />
        <FactCard TrueFact={false} />
      </div>
    </div>
  )
}

export default IndexPopup
