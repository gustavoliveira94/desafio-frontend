import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { searchVideos } from "../services/videos";
import type { YouTubeSearchListResponse } from "../interfaces/searchList";

export const useSearchList = () => {
  const { query } = useParams();

  const [videos, setVideos] = useState<YouTubeSearchListResponse>(
    {} as YouTubeSearchListResponse,
  );
  const [loading, setLoading] = useState(true);

  const getSearchVideos = useCallback(async () => {
    try {
      const response = await searchVideos(query as string);

      setVideos(response);
    } catch {
      setVideos({} as YouTubeSearchListResponse);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    if (query) {
      getSearchVideos();

      return;
    }
  }, [getSearchVideos, query]);

  return {
    videos,
    loading,
    thereAreNoVideos: !loading && !videos?.items?.length,
  };
};
