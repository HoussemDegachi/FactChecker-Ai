import { useEffect, useState } from "react"

import FactCard from "~Component/FactCard"
import Header from "~Sections/Header"

import "./style.css"
import LoadingSquares from "~Component/LoadingSquares"

function IndexPopup() {
  const [data, setData] = useState(null)

  // Listen for messages from content script
  useEffect(() => {
    const port = chrome.runtime.connect({ name: "popup" })

    const createFetchingInterval = (delay) => {
      return setInterval(() => {
        port.postMessage({ type: "REQUEST_UPDATE" })
      }, delay)
    }

    port.onMessage.addListener((msg) => {
      if (msg.type === "UPDATE_UI") {
        setData(msg.data)
      }
    })

    let fetchingUpdatesInterval
    if (!data || data.isYtVideo === null && !fetchingUpdatesInterval) {
      fetchingUpdatesInterval = createFetchingInterval(30)
    } else if (!data || data.isYtVideo === null) {
      clearInterval(fetchingUpdatesInterval)
      fetchingUpdatesInterval = createFetchingInterval(400)
    } else if (data && data.isYtVideo !== null && fetchingUpdatesInterval) {
      clearInterval(fetchingUpdatesInterval)
    }

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
      
      {!data || data.isYtVideo === null ? (
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