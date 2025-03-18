import axios from "axios";

export const getVideoAnalysis = async (videoUrl: string) => {
    console.log("🚀 Sending video data to server:", videoUrl);
    try {
      return await axios.get(
        `https://missinformation-detector-b-production.up.railway.app/analysis/${encodeURIComponent(videoUrl)}`
      );
    } catch (error) {
      console.log(error);
    }
  }