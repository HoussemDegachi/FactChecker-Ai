import { useEffect, useState } from "react"

import FactCard from "~Component/FactCard"
import Header from "~Sections/Header"

import "./style.css"

function IndexPopup() {
  const [data, setData] = useState(null)
  const CurrentUrl = window.location.href


  // Listen for messages from content script
  useEffect(() => {
    const port = chrome.runtime.connect({ name: "popup" })

    port.onMessage.addListener((msg) => {
      if (msg.type === "UPDATE_UI") {
        setData(msg.data)
      }
    })

    port.postMessage({ type: "REQUEST_UPDATE" })

    return () => port.disconnect()
  }, [])

  useEffect(() => {
    console.log("YOUR DATA IN POPUP")
    console.log(data)
  }, [data])

  return (
    <div
      className={
        "w-[400px] h-[600px] flex flex-col" +
        "items-center justify-center overflow-y-auto flex-grow"
      }>
      {!data ? (
        "Loading"
      ) : !data.isYtVideo ? (
        "Not a youtube video"
      ) : (
        <>
          <Header isAnalyzing={true} />
          <div
            className={
              "absolute top-[60px] overflow-y-auto max-h-[540px] flex flex-col "
            }>
            <FactCard TrueFact={true} />
            <FactCard TrueFact={false} />
            <button
              className={"bg-green-500 rounded-xl px-2 py-1 text-white"}
              type={"button"}
              onClick={() => {
                chrome.tabs.create({
                  url: `https://missinformation-detector-1.vercel.app/analysis/${encodeURIComponent(CurrentUrl)}`
                })
              }}>
              Detailed Report
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default IndexPopup
