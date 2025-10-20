interface VideosListProps<T> {
  render: (videos: T) => React.ReactElement;
  customHook: () => {
    videos: T;
    loading: boolean;
    thereAreNoVideos: boolean;
  };
}

export const VideosList = <T,>({ render, customHook }: VideosListProps<T>) => {
  const { videos, loading, thereAreNoVideos } = customHook();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (thereAreNoVideos) {
    return <p>No videos found.</p>;
  }

  return render(videos);
};
