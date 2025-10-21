import { formatDateIntl } from "@/core/utils/formatDate";
import { formatViews } from "@/core/utils/formatViews";
import React from "react";

interface VideoProps {
  thumbnailUrl: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  description: string;
  duration?: string;
  viewCount?: string;
  type?: "featured" | "search";
}

export const Video: React.FC<VideoProps> = ({
  thumbnailUrl,
  title,
  channelTitle,
  publishedAt,
  description,
  duration,
  viewCount,
  type = "featured",
}) => {
  return (
    <div
      data-testid="video"
      className={`${type === "search" ? "flex flex-col sm:flex-row" : ""} bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-full`}
    >
      <div
        className={`relative ${type === "search" ? "w-full md:w-[250px] sm:min-w-[250px]" : "w-full"}`}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {duration ? (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
          {title}
        </h3>
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {channelTitle}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {viewCount ? (
            <>
              <span>{formatViews(viewCount)} views</span>
              <span>•</span>
            </>
          ) : null}
          <span>{formatDateIntl(publishedAt)}</span>
        </div>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
