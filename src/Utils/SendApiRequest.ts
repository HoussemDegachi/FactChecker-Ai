import axios from "axios"


const API_BASE_URL = "https://your-api.com"; // Replace with your actual API

export const fetchVideoData = async (videoUrl: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/process-video`, {
      url: videoUrl,
    });
    return response.data; // Processed video data
  } catch (error) {
    console.error("Error fetching video data:", error);
    return null;
  }
};
