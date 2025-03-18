import "style.css"

import FactCard from "~Component/FactCard"
import Header from "~Sections/Header"
import GetCurrentTabUrl from "~Utils/GetCurrentTabUrl"
import { useEffect, useState } from "react"
import { storage } from "~Utils/GlobalStorage"
import ExtractVideoId from "~Utils/ExtractVideoId"

function IndexPopup() {
  const CurrentUrl = GetCurrentTabUrl();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [IsLoading, setIsLoading] = useState(false)

  // Getting video data from storage
  const [videoData, setVideoData] = useState(null);

  // Listen for changes in Plasmo Storage
  const WatchForDataChanges = () => {
    const unsubscribe = storage.watch({
      "videoData": (c) => {
        console.log("🔄 Plasmo Storage Updated:", c.newValue);
        setVideoData(c.newValue);
      }
    });
    return unsubscribe;
  };

  useEffect(() => {
    try {
      const getVideoData = async () => {
        const data = await storage.get("videoData");
        console.log("📥 Retrieved from storage:", data);
        setVideoData(data);
        // console.log(data.originalId);
      };
      getVideoData();
      const unsubscribe = WatchForDataChanges();

      // Cleanup function
      return () => {
        if (unsubscribe) unsubscribe();
      };
    }catch (error) {
      console.error("❌ Error getting video data:", error);
    }
  }, []);
// log the videoData state
  useEffect(() => {
    console.log("📊 Current videoData state:", videoData);
  }, [videoData]);


  useEffect(() => {
    // Watch for changes in "isLoading"
    storage.watch({
      "isLoading":
      (newValue) => {
        console.log("Loading state updated:", newValue)
        setIsLoading(newValue.newValue);
        setIsAnalyzing(newValue.newValue);
      }
    })
  }, [])

  return (
    <div
      className={
        "w-[400px] h-[600px] flex flex-row PopupContainer" +
        "items-center justify-center overflow-y-auto flex-grow rounded-xl bg-transparent"
      }>
      <Header isAnalyzing={isAnalyzing} />
      <div className={"absolute top-[60px] overflow-y-auto max-h-[540px] flex flex-col "}>
        <FactCard TrueFact={true}  />
        <FactCard TrueFact={false} />
        <button className={'bg-green-500 rounded-xl px-2 py-1 text-white'} type={"button"} onClick={() => { chrome.tabs.create({ url:`https://missinformation-detector-1.vercel.app/analysis/${ExtractVideoId(CurrentUrl)}` });
        }}>Detailed Report
        </button>
      </div>

    </div>
  )
}

export default IndexPopup