import { mockYouTubeVideos } from "../utils/mockVideos";

export const useGetVideos = () => {
  return {
    videos: mockYouTubeVideos,
  };
};
