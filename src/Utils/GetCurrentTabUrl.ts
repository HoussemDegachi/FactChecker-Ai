import { useEffect, useState } from "react"

const GetCurrentTabUrl = () => {
  const [CurrentUrl, setCurrentUrl] = useState<string>("")

  const getCurrentTabUrl = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    setCurrentUrl(tab.url)
  }

  useEffect(() => {
    getCurrentTabUrl()
  }, [])

  useEffect(() => {
    console.log(CurrentUrl)
  }, [CurrentUrl])

  return CurrentUrl
}

export default GetCurrentTabUrl
