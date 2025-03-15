import { Storage } from "@plasmohq/storage";
import FetchVideoData from "~Utils/FetchVideoData"

const storage = new Storage();

const detectVideoPlay = () => {
  const videoPlayer = document.querySelector("video");

  if (!videoPlayer) {
    console.warn("No video player found.");
    return;
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
    }
  });
};

// Run detection when the page loads
detectVideoPlay();
