import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import FactCard from "~Component/FactCard"
import Header from "~Sections/Header"

import "./style.css"
import LoadingSquares from "~Component/LoadingSquares"

function IndexPopup() {
  const [data, setData] = useState(null)
  const CurrentUrl = window.location.href

  // Listen for messages from content script
  useEffect(() => {
    const port = chrome.runtime.connect({ name: "popup" })

    port.onMessage.addListener((msg) => {
      if (msg.type === "UPDATE_UI") {
        setData(msg.data)
        // Show toast when data updates
        toast.info("Data updated")
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
      {/* ToastContainer must be included in your component tree */}
      <ToastContainer position="bottom-right" />
      
      {!data ? (
        <LoadingSquares />
      ) : !data.isYtVideo ? (
        "Not a youtube video"
      ) : (
        <>
          <Header isAnalyzing={true} />
          <div
            className={
              "absolute top-[60px] overflow-y-auto max-h-[540px] flex flex-col "
            }>
            {data.videoAnalysis.data.timestamps.map((item) => (
              <FactCard
                TrueFact={item.validation.isValid}
                key={item._id}
                data={item}
              />
            ))}
            <button
              className={"bg-green-500 rounded-xl px-2 py-1 text-white"}
              type={"button"}
              onClick={() => {
                chrome.tabs.create({
                  url: `https://missinformation-detector-1.vercel.app/analysis/${data.videoAnalysis.data.originalId}`
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