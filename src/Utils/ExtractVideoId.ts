const extractVideoId = (url: string): string | null => {
  const regex = /(?:youtu\.be\/|v=)([\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export default extractVideoId;