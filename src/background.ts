const tabMessages = new Map<number, any>();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "UPDATE_UI" && sender.tab?.id !== undefined) {
    tabMessages.set(sender.tab.id, msg.data);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  const message = tabMessages.get(activeInfo.tabId) || { isYtVideo: false };
  chrome.runtime.sendMessage({ type: "UPDATE_UI", data: message });
});

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup") {
    port.onDisconnect.addListener(() => {
      port.onMessage.removeListener(listener);
    });

    const listener = (msg) => {
      if (msg.type === "REQUEST_UPDATE") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const currentTabId = tabs[0]?.id;
          const message = currentTabId ? (tabMessages.get(currentTabId) || { isYtVideo: false }) : { isYtVideo: false };
          port.postMessage({ type: "UPDATE_UI", data: message });
        });
      }
    };

    port.onMessage.addListener(listener);
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.active) {
    // Notify content script when the URL changes
    chrome.tabs.sendMessage(tabId, { action: "fetchData" }).catch(() => {})
    chrome.tabs.sendMessage(tabId, { action: "getCurrentTime" }).catch(() => {})
  }
})

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab?.url?.includes("youtube.com")) {
      chrome.tabs.sendMessage(tab.id!, { action: "fetchData" }).catch(() => {})
      chrome.tabs.sendMessage(tab.id!, { action: "getCurrentTime" }).catch(() => {})
    }
  })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.active) {
    // Notify content script when the URL changes
    chrome.tabs.sendMessage(tabId, { action: "fetchData" }).catch(() => {})
    chrome.tabs.sendMessage(tabId, { action: "getCurrentTime" }).catch(() => {})
  }
})

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab?.url?.includes("youtube.com")) {
      chrome.tabs.sendMessage(tab.id!, { action: "fetchData" }).catch(() => {})
      chrome.tabs.sendMessage(tab.id!, { action: "getCurrentTime" }).catch(() => {})
    }
  })
})