import { Storage } from "@plasmohq/storage";

// Create a storage instance
export const storage = new Storage({
  area: "local" // Use "local" or "session" if needed
});
