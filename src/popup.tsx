import { useEffect, useState } from "react"

import FactCard from "~Component/FactCard"
import Header from "~Sections/Header"

import "./style.css"
import LoadingSquares from "~Component/LoadingSquares"
import Error from "~Component/ErrorComp"
import ErrorComp from "~Component/ErrorComp"
import NotYoutubeVideo from "~Component/NotYoutubeVideo"

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

  return (
    <div
      className={
        "w-[400px] h-[600px] flex flex-col" +
        "items-center justify-center overflow-y-auto flex-grow "
      }>
      
      {!data || data.isYtVideo === null ? (
        <LoadingSquares />
      ) : !data.isYtVideo ? (
        <NotYoutubeVideo />
      ) : data.isYtVideo === "error"? <ErrorComp errorData={data.videoAnalysis.data} /> : (
        <>
          <Header isAnalyzing={true} />
          <div
            className={
              "absolute top-[60px] overflow-y-auto max-h-[540px] flex flex-col scroll-auto mt-1 w-full "
            }>
            {data.videoAnalysis.data.timestamps.map((item) => (
              <FactCard
                TrueFact={item.validation.isValid}
                key={item._id}
                data={item}
              />
            ))}
            <center>
              <button style={{boxShadow: "0 0 15px #02FFDD"}}
                className={"bg-gradient-to-r from-[#02FFDD] to-[#00BCFF] w-full rounded-xl px-2 py-1 " +
                  "text-black font-semibold text-2xl mb-3 mt-3"} //fixed bottom-10 left-1/2 -translate-x-1/2 text-2xl
                type={"button"}
                onClick={() => {
                  chrome.tabs.create({
                    url: `https://missinformation-detector-1.vercel.app/analysis/${data.videoAnalysis.data.originalId}`
                  })
                }}>
                Detailed Report
              </button>
            </center>
          </div>
        </>
      )}
    </div>
  )
}

export default IndexPopup