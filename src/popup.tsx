import { useState } from "react"
import 'style.css'
import Header from "~Sections/Header"
import FactCard from "~Component/FactCard"
import Body from "~Sections/Body"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
      <div className={"w-[400px] h-[600px] flex flex-col" +
        "items-center justify-center overflow-y-auto flex-grow"}>
        <Header/>
        {/*<Body>*/}
        {/*overflow-y: auto;*/}
        {/*max-height: 540px;*/}
        <div className={'absolute top-[60px] overflow-y-auto max-h-[540px] '}>
        {/*THe Two Components below are above Each Others*/}
          <FactCard TrueFact={true}/>
          <FactCard TrueFact={false}/>
        </div>
        {/*</Body>*/}


      </div>
  )
}

export default IndexPopup
