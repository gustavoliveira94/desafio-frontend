export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
  standard: YouTubeThumbnail;
  maxres: YouTubeThumbnail;
  [key: string]: YouTubeThumbnail | undefined;
}

export interface YouTubeLocalization {
  title: string;
  description: string;
}

export interface YouTubeVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: YouTubeLocalization;
  defaultAudioLanguage: string;
}

export interface YouTubeRegionRestriction {
  allowed: string[];
  blocked: string[];
}

export interface YouTubeContentRating {
  acbRating: string;
  agcomRating: string;
  anatelRating: string;
  bbfcRating: string;
  bfvcRating: string;
  bmukkRating: string;
  catvRating: string;
  catvfrRating: string;
  cbfcRating: string;
  cccRating: string;
  cceRating: string;
  chfilmRating: string;
  chvrsRating: string;
  cicfRating: string;
  cnaRating: string;
  cncRating: string;
  csaRating: string;
  cscfRating: string;
  czfilmRating: string;
  djctqRating: string;
  djctqRatingReasons: string[];
  ecbmctRating: string;
  eefilmRating: string;
  egfilmRating: string;
  eirinRating: string;
  fcbmRating: string;
  fcoRating: string;
  fmocRating: string;
  fpbRating: string;
  fpbRatingReasons: string[];
  fskRating: string;
  grfilmRating: string;
  icaaRating: string;
  ifcoRating: string;
  ilfilmRating: string;
  incaaRating: string;
  kfcbRating: string;
  kijkwijzerRating: string;
  kmrbRating: string;
  lsfRating: string;
  mccaaRating: string;
  mccypRating: string;
  mcstRating: string;
  mdaRating: string;
  medietilsynetRating: string;
  mekuRating: string;
  mibacRating: string;
  mocRating: string;
  moctwRating: string;
  mpaaRating: string;
  mpaatRating: string;
  mtrcbRating: string;
  nbcRating: string;
  nbcplRating: string;
  nfrcRating: string;
  nfvcbRating: string;
  nkclvRating: string;
  oflcRating: string;
  pefilmRating: string;
  rcnofRating: string;
  resorteviolenciaRating: string;
  rtcRating: string;
  rteRating: string;
  russiaRating: string;
  skfilmRating: string;
  smaisRating: string;
  smsaRating: string;
  tvpgRating: string;
  ytRating: string;
}

export interface YouTubeContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction: YouTubeRegionRestriction;
  contentRating: YouTubeContentRating;
  projection: string;
  hasCustomThumbnail: boolean;
}

export interface YouTubeVideoStatus {
  uploadStatus: string;
  failureReason: string;
  rejectionReason: string;
  privacyStatus: string;
  publishAt: string;
  license: string;
  embeddable: boolean;
  publicStatsViewable: boolean;
  madeForKids: boolean;
  selfDeclaredMadeForKids: boolean;
  containsSyntheticMedia: boolean;
}

export interface YouTubeVideoStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface YouTubePaidProductPlacementDetails {
  hasPaidProductPlacement: boolean;
}

export interface YouTubeVideoPlayer {
  embedHtml: string;
  embedHeight: number;
  embedWidth: number;
}

export interface YouTubeTopicDetails {
  topicIds: string[];
  relevantTopicIds: string[];
  topicCategories: string[];
}

export interface YouTubeRecordingDetails {
  recordingDate: string;
}

export interface YouTubeVideoStream {
  widthPixels: number;
  heightPixels: number;
  frameRateFps: number;
  aspectRatio: number;
  codec: string;
  bitrateBps: number;
  rotation: string;
  vendor: string;
}

export interface YouTubeAudioStream {
  channelCount: number;
  codec: string;
  bitrateBps: number;
  vendor: string;
}

export interface YouTubeFileDetails {
  fileName: string;
  fileSize: number;
  fileType: string;
  container: string;
  videoStreams: YouTubeVideoStream[];
  audioStreams: YouTubeAudioStream[];
  durationMs: number;
  bitrateBps: number;
  creationTime: string;
}

export interface YouTubeProcessingProgress {
  partsTotal: number;
  partsProcessed: number;
  timeLeftMs: number;
}

export interface YouTubeProcessingDetails {
  processingStatus: string;
  processingProgress: YouTubeProcessingProgress;
  processingFailureReason: string;
  fileDetailsAvailability: string;
  processingIssuesAvailability: string;
  tagSuggestionsAvailability: string;
  editorSuggestionsAvailability: string;
  thumbnailsAvailability: string;
}

export interface YouTubeTagSuggestion {
  tag: string;
  categoryRestricts: string[];
}

export interface YouTubeSuggestions {
  processingErrors: string[];
  processingWarnings: string[];
  processingHints: string[];
  tagSuggestions: YouTubeTagSuggestion[];
  editorSuggestions: string[];
}

export interface YouTubeLiveStreamingDetails {
  actualStartTime: string;
  actualEndTime: string;
  scheduledStartTime: string;
  scheduledEndTime: string;
  concurrentViewers: number;
  activeLiveChatId: string;
}

export interface YouTubeLocalizations {
  [languageCode: string]: YouTubeLocalization;
}

export interface YouTubeVideo {
  kind: "youtube#video";
  etag: string;
  id: string;
  snippet: YouTubeVideoSnippet;
  contentDetails: YouTubeContentDetails;
  status: YouTubeVideoStatus;
  statistics: YouTubeVideoStatistics;
  paidProductPlacementDetails: YouTubePaidProductPlacementDetails;
  player: YouTubeVideoPlayer;
  topicDetails: YouTubeTopicDetails;
  recordingDetails: YouTubeRecordingDetails;
  fileDetails: YouTubeFileDetails;
  processingDetails: YouTubeProcessingDetails;
  suggestions: YouTubeSuggestions;
  liveStreamingDetails: YouTubeLiveStreamingDetails;
  localizations: YouTubeLocalizations;
}

export interface YouTubeVideoListResponse {
  kind: "youtube#videoListResponse";
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeVideo[];
}

export type YouTubeVideoPart =
  | "contentDetails"
  | "fileDetails"
  | "id"
  | "liveStreamingDetails"
  | "localizations"
  | "paidProductPlacementDetails"
  | "player"
  | "processingDetails"
  | "recordingDetails"
  | "snippet"
  | "statistics"
  | "status"
  | "suggestions"
  | "topicDetails";
