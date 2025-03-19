import axios from "axios";

export const getVideoAnalysis = async (videoUrl: string) => {
    try {
      return await axios.get(
        `https://missinformation-detector-b-production.up.railway.app/analysis/${encodeURIComponent(videoUrl)}`
      );
    } catch (error) {
      throw error
    }
  }