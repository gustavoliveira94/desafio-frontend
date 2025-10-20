import { useParams } from "react-router-dom";

import { Video, VideosList } from "@/presentation/components";
import { useSearchList } from "@/core/hooks";

export const SearchPage: React.FC = () => {
  const { query } = useParams();

  return (
    <>
      <h3 className="pt-8 text-2xl">Results to {query}:</h3>
      <VideosList
        customHook={useSearchList}
        render={(videos) => (
          <div className="grid grid-cols-1 gap-4 py-8">
            {videos?.items?.map((video) => (
              <Video
                key={video.id?.videoId}
                title={video.snippet?.title}
                channelTitle={video.snippet?.channelTitle}
                publishedAt={video.snippet?.publishedAt}
                description={video.snippet?.description}
                thumbnailUrl={
                  video.snippet?.thumbnails?.maxres?.url ||
                  video.snippet?.thumbnails?.high?.url
                }
                type="search"
              />
            ))}
          </div>
        )}
      />
    </>
  );
};
