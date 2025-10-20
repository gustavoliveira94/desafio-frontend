import { useEffect, useState } from "react";

import { listVideos } from "../services/videos";
import type { YouTubeVideoListResponse } from "../interfaces/videoList";

export const useVideoList = () => {
  const [videos, setVideos] = useState<YouTubeVideoListResponse>(
    {} as YouTubeVideoListResponse,
  );
  const [loading, setLoading] = useState(true);

  const getVideos = async () => {
    try {
      const response = await listVideos();

      return setVideos(response);
    } catch {
      return {};
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return {
    videos,
    loading,
    thereAreNoVideos: !loading && !videos?.items?.length,
  };
};
