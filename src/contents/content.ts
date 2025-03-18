import { getVideoAnalysis } from "~utils/getYtVideo";

export {}


const checkYouTube = async () => {
  if (window.location.hostname === "www.youtube.com" && window.location.pathname === "/watch") {
    const videoAnalysis = await getVideoAnalysis(window.location.href)
    console.log(videoAnalysis)
    console.log("passing")
    chrome.runtime.sendMessage({ type: "UPDATE_UI", data: {isYtVideo: true, videoAnalysis} });
  } else {
    chrome.runtime.sendMessage({ type: "UPDATE_UI", data: {isYtVideo: false}});
  }
}

checkYouTube()

// Observe URL changes (YouTube uses client-side navigation)
const observer = new MutationObserver(async function () {
    checkYouTube();
});

observer.observe(document.body, { childList: true, subtree: true });

window.addEventListener("beforeunload", () => observer.disconnect());