// import type { PlasmoCSConfig } from "plasmo";
// import { useEffect, useState } from "react"
// import extractVideoId from "~Utils/ExtractVideoId"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
//
// export const config: PlasmoCSConfig = {
//   matches: ["https://www.youtube.com/watch*"]
// }
//
// const ContentScript = () => {
//   useEffect(() => {
//     console.log("✅ Plasmo Content Script Loaded!")
//     toast.info("ℹ️ Plasmo Content Script Loaded!", { position: "bottom-right" })
//
//     let hasStarted = false // Track if video has started
//     let observer: MutationObserver | null = null
//     let retryTimeout: NodeJS.Timeout | null = null
//
//
//     // Function to detect YouTube video
//     const detectVideo = () => {
//       const video = document.querySelector("video")
//
//       if (video) {
//         console.log("🎥 Video detected!");
//
//         const videoId = extractVideoId(window.location.href); // Extracted from URL
//         const videoThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Thumbnail URL
//
//
//
//
//
//
//         // Prevent multiple event listener bindings
//         if (!video.dataset.listenerAdded) {
//           video.dataset.listenerAdded = "true" // Mark that the listener is set
//
//           video.addEventListener("playing", () => {
//             // Using playing event to detect video start instead Of Play event.
//             if (!hasStarted) {
//               hasStarted = true
//               alert("🚀 Video started playing for the FIRST TIME!")
//
//               // Send message and handle response
//               chrome.runtime.sendMessage(
//                 { type: "VIDEO_STARTED", url: window.location.href },
//                 (response) => {
//                   if (chrome.runtime.lastError) {
//                     console.error(
//                       "❌ Error sending message:",
//                       chrome.runtime.lastError.message
//                     )
//                   } else {
//                     console.log("✅ Response from background:", response)
//                   }
//                 }
//               )
//             }
//           })
//
//           video.addEventListener("loadeddata", () => {
//             hasStarted = false
//           })
//         }
//       } else {
//         console.log("⚠️ No video found, retrying...")
//         retryTimeout = setTimeout(detectVideo, 1000) // Retry after 1 second
//       }
//     }
//
//     // Run detection when the extension loads
//     detectVideo()
//
//     // Watch for YouTube’s dynamic content changes
//     observer = new MutationObserver(() => {
//       detectVideo()
//     })
//
//     observer.observe(document.body, { childList: true, subtree: true })
//
//     // Cleanup function
//     return () => {
//       if (observer) observer.disconnect()
//       if (retryTimeout) clearTimeout(retryTimeout)
//     }
//   }, [])
//
//   return <ToastContainer />
// }
//
// export default ContentScript