import "style.css"

import FactCard from "~Component/FactCard"
import Header from "~Sections/Header"
import GetCurrentTabUrl from "~Utils/GetCurrentTabUrl"
import { useEffect, useState } from "react"
import { storage } from "~Utils/GlobalStorage"

function IndexPopup() {
  const CurrentUrl = GetCurrentTabUrl();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

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