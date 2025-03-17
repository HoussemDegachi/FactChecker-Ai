import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react"



import { Storage } from "@plasmohq/storage";





const storage = new Storage();
// Define the shape of the context state
type VideoInfo = {
  id: string;
  title: string;
  duration: number;
  thumbnail: string;
};

type GlobalContextType = {
  videoData: VideoInfo | null;
  setVideoData: (data: VideoInfo) => void;
};

// Create a Context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Provider Component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [videoData, setVideoData] = useState<VideoInfo | null>(null);

  // Load state from `chrome.storage.sync` when the app starts
  useEffect(() => {
    (async () => {
      const storedData = await storage.get("videoData");
      if (storedData) {
        setVideoData(JSON.parse(storedData) as VideoInfo);
      }
    })();
  }, []);

  // Save to `chrome.storage.sync` when state updates
  useEffect(() => {
    if (videoData) {
      storage.set("videoData", videoData);
    }
  }, [videoData]);

  return (
    <GlobalContext.Provider value={{ videoData, setVideoData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook to Use Context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
