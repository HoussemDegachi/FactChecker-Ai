import axios from "axios"
<<<<<<< HEAD
import { useAnalysis } from "~contexts/AnalysisProvider"
=======
import { storage } from "~Utils/GlobalStorage"
>>>>>>> 10f67e3 (We can Now Store The Data but We can't get it from The Popup Window)

export {}
console.log("HELLO WORLD FROM BGSCRIPTS")
const {analysis, setAnalysis, loadingAnalysis, setLoadingAnalysis, available, setAvailable} = useAnalysis()

const sendVideoDataToServer = async (videoUrl) => {
  console.log("🚀 Sending video data to server:", videoUrl);
  try {
    const response = await axios.get(`https://missinformation-detector-b-production.up.railway.app/analysis/${videoUrl}`);
    return response;
  } catch (error) {
    throw error;
  }
}

<<<<<<< HEAD
=======
const extractVideoId = (url: string): string | null => {
  const regex = /(?:youtu\.be\/|v=)([\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};



const storeVideoData = async (videoData: string) => {
  try {
    // Store the data in Plasmo Storage
    await storage.set("videoData", videoData);
    console.log("📦 Stored video data in Plasmo Storage!", videoData);
  }catch (error) {
    console.error("❌ Error storing video data:", error);
  }
}

>>>>>>> 10f67e3 (We can Now Store The Data but We can't get it from The Popup Window)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  setAvailable(true)
  setLoadingAnalysis(true)
  setAnalysis(null)

  if (message.type === "VIDEO_STARTED") {
    console.log("🎬 Background Script Received: Video Started on", message.url)

    sendVideoDataToServer(encodeURIComponent(message.url)).then((response) => {
      console.log("✅ API Response:", response.data);
      setAnalysis(response.data)
      chrome.runtime.sendMessage({ type: "API_SUCCESS", data: response.data });
      // Store the data in Plasmo Storage
      storeVideoData(JSON.stringify(response.data));

    }).catch((error) => {
      setAvailable(false)
      console.error("❌ API Error:", error);
      chrome.runtime.sendMessage({ type: "API_ERROR", error: error.message });
    }).finally(() => {
      setLoadingAnalysis(false)
    })

    sendResponse({ status: "Popup Triggered" })
    // Trigger the popup (or any other action)
    chrome.action.openPopup();
  }
})