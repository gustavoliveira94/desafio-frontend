import type { YouTubeThumbnails } from "./videoList";

export interface YouTubeSearchId {
  kind: string;
  videoId?: string;
  channelId?: string;
  playlistId?: string;
}

export interface YouTubeSearchSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime?: string;
}

export interface YouTubeSearchResult {
  kind: "youtube#searchResult";
  etag: string;
  id: YouTubeSearchId;
  snippet: YouTubeSearchSnippet;
}

export interface YouTubeSearchPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YouTubeSearchListResponse {
  kind: "youtube#searchListResponse";
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: YouTubeSearchPageInfo;
  items: YouTubeSearchResult[];
}
