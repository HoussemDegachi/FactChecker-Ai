import { Storage } from "@plasmohq/storage";

// Create a storage instance
export const storage = new Storage({
  area: "sync" // Use "local" or "session" if needed
});
