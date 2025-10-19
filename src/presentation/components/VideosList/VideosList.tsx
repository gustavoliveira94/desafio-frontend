import type { YouTubeVideo } from "@/core/interfaces/video";

import { useGetVideos } from "@/core/hooks/useGetVideos";

interface VideosListProps {
  render: (videos: YouTubeVideo[]) => React.ReactElement;
}

export const VideosList: React.FC<VideosListProps> = ({ render }) => {
  const { videos } = useGetVideos();

  return render(videos);
};
