import { title } from "process"
import type { PlasmoCSConfig } from "plasmo"
import { toast } from "react-toastify"

import { getVideoAnalysis } from "~utils/getYtVideo"

export {}

toast("Content script loaded", {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
});

const ColorsSet = {
  info: "#4F46E5",
  misleading: "#c9c302",
  correct: "#10B981",
  success: "#10B981",
  wrong: "#EF4444",
  error: "#EF4444"
};

// Simple notification function for content script
const showNotification = (
  message: string,
  type: "info" | "success" | "error" | "misleading" = "info"
) => {
  const notificationId = "info-checker-notification";

  // Remove existing notification if any
  const existingNotification = document.getElementById(notificationId);
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.id = notificationId;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    z-index: 99999;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  `;

  // Set color based on type
  switch (type) {
    case "success":
      notification.style.backgroundColor = ColorsSet.success;
      break;
    case "error":
      notification.style.backgroundColor = ColorsSet.error;
      break;
    case "misleading":
      notification.style.backgroundColor = ColorsSet.misleading;
      break;
    default:
      notification.style.backgroundColor = ColorsSet.info;
  }

  notification.textContent = message;
  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => notification.remove(), 300);
  }, 5000);
};

const displayTimelineBubbles = (data) => {
  console.log(data);
  const timebar = document.querySelector(".ytp-progress-bar");
  const videoLength = document.querySelector("video").duration;

  for (let item of data.data.timestamps) {
    if (!item.timestampInS) continue;
    console.log(item.timestampInS);

    const newBubble = document.createElement("span");
    newBubble.classList.add("timeline-bubble");
    newBubble.style.borderRadius = "50%";
    newBubble.style.minHeight = "12px";
    newBubble.style.minWidth = "12px";
    newBubble.style.transform = "translate(-30%,0)"; // Center the bubble and Making It More Accurate.
    newBubble.style.backgroundColor = `${item.label === "Correct" ? ColorsSet.correct : item.label === "Misleading" ? ColorsSet.misleading : ColorsSet.wrong}`;
    if (item.label != "Wrong") newBubble.style.opacity = "0.8";
    newBubble.style.position = "absolute";
    newBubble.style.top = "-3px";
    newBubble.style.zIndex = "100";
    newBubble.style.left = `${(item.timestampInS * 100) / videoLength}%`;
    console.log(newBubble);
    timebar.append(newBubble);
  }
};

const clearTimelineBubbles = () => {
  const bubbles = document.querySelectorAll(".timeline-bubble");
  for (let bubble of bubbles) {
    bubble.remove();
  }
};

let warningInterval;

const enableWarningOnError = (data) => {
  warningInterval = setInterval(() => {
    const videoTime = Math.trunc(document.querySelector("video").currentTime);
    for (let item of data.data.timestamps) {
      if (videoTime === item.timestampInS && item.label !== "Correct") {
        const NotificationType =
          item.label === "Correct"
            ? "success"
            : item.label === "Misleading"
              ? "misleading"
              : "error"; // Set notification type based on label
        showNotification(`${item.label} information detected`, NotificationType);
      }
    }
  }, 1000);
};

const disableWarningOnError = () => {
  if (!warningInterval) return;
  clearInterval(warningInterval);
  warningInterval = undefined;
};

const displayWindowData = (data, isError = false) => {
  if (isError) return;
  displayTimelineBubbles(data);
  enableWarningOnError(data);
};

const undisplayWindowData = () => {
  clearTimelineBubbles();
  disableWarningOnError();
};

let lastUrl = window.location.href;
let requestSent = false;

const checkYouTube = async () => {
  if (requestSent) return;

  undisplayWindowData();
  if (
    window.location.hostname === "www.youtube.com" &&
    window.location.pathname === "/watch"
  ) {
    showNotification("Analyzing video for factual accuracy...", "info");
    chrome.runtime.sendMessage({
      type: "UPDATE_UI",
      data: { isYtVideo: null }
    });

    try {
      const videoAnalysis = await getVideoAnalysis(window.location.href);
      showNotification("Analysis completed!", "success");
      displayWindowData(videoAnalysis);
      chrome.runtime.sendMessage({
        type: "UPDATE_UI",
        data: { isYtVideo: true, videoAnalysis }
      });
    } catch (e) {
      displayWindowData(e, true);
      showNotification(
        "An error occurred while trying to analyze video\nopen popup for more info",
        "error"
      );
      chrome.runtime.sendMessage({
        type: "UPDATE_UI",
        data: { isYtVideo: "error", videoAnalysis: e.response }
      });
    }
  } else {
    chrome.runtime.sendMessage({
      type: "UPDATE_UI",
      data: { isYtVideo: false }
    });
  }

  requestSent = true;
};

const createToastContainer = () => {
  const container = document.createElement("div");
  container.id = "plasmo-toast-container";
  document.body.appendChild(container);

  const shadowRoot = container.attachShadow({ mode: "open" });

  // Add toastify styles
  const style = document.createElement("style");
  style.textContent = `
  /* Minified CSS from react-toastify */
  .Toastify__toast-container{position:fixed;z-index:9999;...}
  /* ... rest of react-toastify CSS ... */
  `;
  shadowRoot.appendChild(style);

  // Create the actual container
  const toastContainer = document.createElement("div");
  shadowRoot.appendChild(toastContainer);

  return toastContainer;
};

// Function to show toast notifications from content script
const showToast = (message, type = "info") => {
  // Simple implementation using the shadow DOM
  const container = document
    .getElementById("plasmo-toast-container")
    ?.shadowRoot?.querySelector("div");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `Toastify__toast Toastify__toast--${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    toast.remove();
  }, 5000);
};

// Initialize when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  try {
    createToastContainer();
  } catch (e) {
  } finally {
    // Test toast
    showToast("Content script loaded successfully!");
  }
});

// Show initial notification
if (
  window.location.hostname === "www.youtube.com" &&
  window.location.pathname === "/watch"
)
  showNotification("Info Checker extension activated", "info");
checkYouTube(); // initial
