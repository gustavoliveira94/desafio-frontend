import { Video, VideosList } from "@/presentation/components";
import { useParams } from "react-router-dom";

export const SearchPage: React.FC = () => {
  const { query } = useParams();

  return (
    <>
      <h3 className="pt-8 text-2xl">Results to {query}:</h3>
      <VideosList
        render={(videos) => (
          <div className="grid grid-cols-1 gap-4 py-8">
            {videos.map((video) => (
              <Video
                key={video.id}
                snippet={video.snippet}
                contentDetails={video.contentDetails}
                statistics={video.statistics}
                type="search"
              />
            ))}
          </div>
        )}
      />
    </>
  );
};
