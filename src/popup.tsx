import "style.css"
import FactCard from "~Component/FactCard"
import Header from "~Sections/Header"
import GetCurrentTabUrl from "~Utils/GetCurrentTabUrl"
import Footer from "~Sections/Footer"

function IndexPopup() {
  const CurrentUrl = GetCurrentTabUrl();

  return (
    <div
      className={
        "w-[400px] h-[600px] flex flex-col" +
        "items-center justify-center overflow-y-auto flex-grow"
      }>
      <Header />
      <div className={"absolute top-[60px] overflow-y-auto max-h-[540px] "}>
        <FactCard TrueFact={true} />
        <FactCard TrueFact={false} />
      </div>
    </div>
  )
}

export default IndexPopup
