import type { PlasmoCSConfig } from "plasmo"
import { toast } from "react-toastify"

import { getVideoAnalysis } from "~utils/getYtVideo"

console.log("Content script loaded")
toast("Content script loaded", {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
})

// Simple notification function for content script
const showNotification = (
  message: string,
  type: "info" | "success" | "error" = "info"
) => {
  const notificationId = "info-checker-notification"

  // Remove existing notification if any
  const existingNotification = document.getElementById(notificationId)
  if (existingNotification) {
    existingNotification.remove()
  }

  // Create notification element
  const notification = document.createElement("div")
  notification.id = notificationId
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    z-index: 99999;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  `

  // Set color based on type
  switch (type) {
    case "success":
      notification.style.backgroundColor = "#10B981"
      break
    case "error":
      notification.style.backgroundColor = "#EF4444"
      break
    default:
      notification.style.backgroundColor = "#4F46E5"
  }

  notification.textContent = message
  document.body.appendChild(notification)

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = "0"
    setTimeout(() => notification.remove(), 300)
  }, 5000)
}

export {}

let lastUrl = window.location.href

const checkYouTube = async () => {
  console.log("lastUrl", lastUrl)
  console.log("url:", window.location.href)
  if (
    window.location.hostname === "www.youtube.com" &&
    window.location.pathname === "/watch"
  ) {
    showNotification("Analyzing video for factual accuracy...", "info")
    chrome.runtime.sendMessage({
      type: "UPDATE_UI",
      data: { isYtVideo: null }
    })

    try {
      const videoAnalysis = await getVideoAnalysis(window.location.href)
      console.log(videoAnalysis)
      console.log("passing")
      showNotification("Analysis complete!", "success")
      chrome.runtime.sendMessage({
        type: "UPDATE_UI",
        data: { isYtVideo: true, videoAnalysis }
      })
    } catch (e) {
      console.log("An error occured")
      chrome.runtime.sendMessage({
        type: "UPDATE_UI",
        data: { isYtVideo: "error", videoAnalysis: e.response }
      })
    }

  } else {
    chrome.runtime.sendMessage({
      type: "UPDATE_UI",
      data: { isYtVideo: false }
    })
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "fetchData") {
    console.log("Received request to update based on tab")
    checkYouTube()
  }
})

const createToastContainer = () => {
  const container = document.createElement("div")
  container.id = "plasmo-toast-container"
  document.body.appendChild(container)

  const shadowRoot = container.attachShadow({ mode: "open" })

  // Add toastify styles
  const style = document.createElement("style")
  style.textContent = `
  /* Minified CSS from react-toastify */
  .Toastify__toast-container{position:fixed;z-index:9999;...}
  /* ... rest of react-toastify CSS ... */
  `
  shadowRoot.appendChild(style)

  // Create the actual container
  const toastContainer = document.createElement("div")
  shadowRoot.appendChild(toastContainer)

  return toastContainer
}

// Function to show toast notifications from content script
const showToast = (message, type = "info") => {
  // Simple implementation using the shadow DOM
  const container = document
    .getElementById("plasmo-toast-container")
    ?.shadowRoot?.querySelector("div")
  if (!container) return

  const toast = document.createElement("div")
  toast.className = `Toastify__toast Toastify__toast--${type}`
  toast.textContent = message

  container.appendChild(toast)

  // Auto-remove after 5 seconds
  setTimeout(() => {
    toast.remove()
  }, 5000)
}

// Initialize when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  try {
    createToastContainer()
  } catch (e) {
    console.log(e)
  } finally {
    console.log("Toast container created")
    // Test toast
    showToast("Content script loaded successfully!")
  }
})

// Show initial notification
if (
  window.location.hostname === "www.youtube.com" &&
  window.location.pathname === "/watch"
)
  showNotification("Info Checker extension activated", "info")
checkYouTube() // initial
