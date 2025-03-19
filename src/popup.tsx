// IndexPopup.jsx
import { useEffect, useState } from "react";
import FactCard from "~Component/FactCard";
import Header from "~Sections/Header";
import "./style.css";
import LoadingSquares from "~Component/LoadingSquares";
import ErrorComp from "~Component/ErrorComp";
import NotYoutubeVideo from "~Component/NotYoutubeVideo";
import AnimatedButton from "~Component/Button";

function IndexPopup() {
  const [data, setData] = useState(null);

    const openIndepthAnalysisPage = () => {
      chrome.storage.local.set({ videoAnalysisData: data.videoAnalysis.data }, () => {
        const url = chrome.runtime.getURL(`tabs/IndepthAnalysis.html`);
        chrome.tabs.create({ url });
      });
    };
  
  // Listen for messages from content script
  useEffect(() => {
    const port = chrome.runtime.connect({ name: "popup" });
    const createFetchingInterval = (delay) => {
      return setInterval(() => {
        port.postMessage({ type: "REQUEST_UPDATE" });
      }, delay);
    };
    port.onMessage.addListener((msg) => {
      if (msg.type === "UPDATE_UI") {
        setData(msg.data);
      }
    });
    let fetchingUpdatesInterval;
    if (!data || (data.isYtVideo === null && !fetchingUpdatesInterval)) {
      fetchingUpdatesInterval = createFetchingInterval(30);
    } else if (!data || data.isYtVideo === null) {
      clearInterval(fetchingUpdatesInterval);
      fetchingUpdatesInterval = createFetchingInterval(400);
    } else if (data && data.isYtVideo !== null && fetchingUpdatesInterval) {
      clearInterval(fetchingUpdatesInterval);
    }
    return () => port.disconnect();
  }, []);
  return (
    <div
      className={
        "w-[400px] h-[600px] flex flex-col" +
        "items-center justify-center flex-grow "
      }
    >
      {!data || data.isYtVideo === null ? (
        <LoadingSquares />
      ) : !data.isYtVideo ? (
        <NotYoutubeVideo />
      ) : data.isYtVideo === "error" ? (
        <ErrorComp errorData={data.videoAnalysis.data} />
      ) : (
        <>
          <Header isAnalyzing={true} />
          <div
            className={
              "absolute top-[60px] max-h-[540px] flex flex-col mt-1 w-full pr-4 scroll-smooth overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar-thumb]:bg-gray-300  dark:[&::-webkit-scrollbar-track]:bg-neutral-700  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            }
          >
            {data.videoAnalysis.data.timestamps.map((item) => (
              <FactCard
                TrueFact={item.validation.isValid}
                key={item._id}
                data={item}
              />
            ))}

            <AnimatedButton
              onClick={
                openIndepthAnalysisPage
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
export default IndexPopup;
