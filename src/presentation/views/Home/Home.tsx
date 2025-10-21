import { useVideoList } from "@/core/hooks";
import { VideosList, Video } from "@/presentation/components";

export const HomePage: React.FC = () => {
  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Videos
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover the latest and most popular videos
        </p>
      </div>
      <VideosList
        customHook={useVideoList}
        render={(videos) => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos?.items?.map((video) => (
              <Video
                key={video.id}
                title={video.snippet?.title}
                channelTitle={video.snippet?.channelTitle}
                publishedAt={video.snippet?.publishedAt}
                description={video.snippet?.description}
                duration={video.contentDetails?.duration}
                viewCount={video.statistics?.viewCount}
                thumbnailUrl={
                  video.snippet?.thumbnails?.maxres?.url ||
                  video.snippet?.thumbnails?.high?.url
                }
              />
            ))}
          </div>
        )}
      />
    </div>
  );
};
