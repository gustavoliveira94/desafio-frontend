import { apiClient } from "@/configs/api/api";
import type { YouTubeVideoListResponse } from "../interfaces/videoList";
import type { YouTubeSearchListResponse } from "../interfaces/searchList";

export const listVideos = async (): Promise<YouTubeVideoListResponse> =>
  await apiClient(
    "/videos?part=snippet,statistics&chart=mostPopular&maxResults=12",
  );

export const searchVideos = async (
  query: string,
): Promise<YouTubeSearchListResponse> =>
  await apiClient(`/search?part=snippet&type=video&maxResults=24&q=${query}`);
