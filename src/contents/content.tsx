console.log("🚀 Content script loaded!");
import { Storage } from "@plasmohq/storage";
import FetchVideoData from "~Utils/FetchVideoData"

const storage = new Storage();

const detectVideoPlay = () => {
  const videoPlayer = document.querySelector("video");

  if (!videoPlayer) {
    console.warn("No video player found.");
    return;
  }else {
    console.log("🎬 Video player found!");
  }

  videoPlayer.addEventListener("play", async () => {
    console.log("🎬 Video started playing!");

    const videoUrl = window.location.href;

    // Fetch processed data from the backend
    const videoData = await FetchVideoData(videoUrl);

    if (videoData) {
      await storage.set("video-info", videoData);

      // Send a message to the background script to trigger the popup
      chrome.runtime.sendMessage({ action: "openPopup" });
      alert("🚀 Popup triggered!");
    }
  });
};

// Run detection when the page loads
detectVideoPlay();
