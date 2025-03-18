import { getVideoAnalysis } from "~utils/getYtVideo";

export {}

let lastUrl = window.location.href

const checkYouTube = async () => {
  console.log("lastUrl", lastUrl)
  console.log("url:", window.location.href)
  if (window.location.hostname === "www.youtube.com" && window.location.pathname === "/watch") {
    const videoAnalysis = await getVideoAnalysis(window.location.href)
    console.log(videoAnalysis)
    console.log("passing")
    chrome.runtime.sendMessage({ type: "UPDATE_UI", data: {isYtVideo: true, videoAnalysis} });
  } else {
    chrome.runtime.sendMessage({ type: "UPDATE_UI", data: {isYtVideo: false}});
  }

}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "fetchData") {
    console.log("Recieved request to update based on tab")
    checkYouTube()
  }
})

checkYouTube() // initial