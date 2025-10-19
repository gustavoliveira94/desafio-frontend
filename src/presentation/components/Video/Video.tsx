import React from "react";

import type { YouTubeVideo } from "@/core/interfaces/video";

export const Video: React.FC<YouTubeVideo> = ({
  snippet,
  contentDetails,
  statistics,
}) => {
  return (
    <div className="video-card bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <div className="relative">
        <img
          src={snippet?.thumbnails.default?.url}
          alt={snippet?.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {contentDetails?.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
          {snippet?.title}
        </h3>
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {snippet?.channelTitle}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{statistics?.viewCount} views</span>
          <span>•</span>
          <span>{snippet?.publishedAt}</span>
        </div>
        {snippet?.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
            {snippet.description}
          </p>
        )}
      </div>
    </div>
  );
};
