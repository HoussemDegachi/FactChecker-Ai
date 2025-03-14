import { useState } from "react"
import 'style.css'
import Header from "~Sections/Header"
import FactCard from "~Component/FactCard"
import Body from "~Sections/Body"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
      <div className={"w-[400px] h-[600px] flex flex-col" +
        "items-center justify-center"}>
        <Header/>
        {/*<Body>*/}
        {/*THe Two Components below are above Each Others*/}
          <FactCard TrueFact={true}/>
          <FactCard TrueFact={false}/>
        {/*</Body>*/}


      </div>
  )
}

export default IndexPopup
