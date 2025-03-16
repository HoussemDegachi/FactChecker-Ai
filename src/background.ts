import axios from "axios"
import { useAnalysis } from "~contexts/AnalysisProvider"

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