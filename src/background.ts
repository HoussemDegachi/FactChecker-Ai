export {}
console.log("HELLO WORLD FROM BGSCRIPTS")

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "VIDEO_STARTED") {
    console.log("🎬 Background Script Received: Video Started on", message.url)

    // Trigger the popup (or any other action)
    chrome.action.openPopup()

    sendResponse({ status: "Popup Triggered" })
  }
})
