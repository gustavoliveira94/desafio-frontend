import type { YouTubeVideo } from "@/core/interfaces/video";

// Mock YouTube Video Data
export const mockYouTubeVideos: YouTubeVideo[] = [
  {
    kind: "youtube#video",
    etag: "FJfVjKxe9SW9BvyXRlvFSRLqFZU",
    id: "dQw4w9WgXcQ",
    snippet: {
      publishedAt: "2023-10-15T14:30:00Z",
      channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
      title: "Learn React Hooks in 30 Minutes - Complete Guide 2024",
      description:
        "Master React Hooks with this comprehensive tutorial. We'll cover useState, useEffect, useContext, and custom hooks with practical examples and real-world applications.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "React Mastery",
      tags: ["react", "hooks", "javascript", "tutorial", "frontend"],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title: "Learn React Hooks in 30 Minutes - Complete Guide 2024",
        description: "Master React Hooks with this comprehensive tutorial...",
      },
    },
    contentDetails: {
      duration: "PT30M15S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
    },
    statistics: {
      viewCount: "1250000",
      likeCount: "89000",
      dislikeCount: "2100",
      favoriteCount: "0",
      commentCount: "15600",
    },
    status: {
      uploadStatus: "processed",
      privacyStatus: "public",
      license: "youtube",
      embeddable: true,
      publicStatsViewable: true,
      madeForKids: false,
    },
  },
  {
    kind: "youtube#video",
    etag: "ABC123DEF456GHI789JKL012",
    id: "abc123def456",
    snippet: {
      publishedAt: "2023-10-12T09:45:00Z",
      channelId: "UC123456789abcdef",
      title: "TypeScript Advanced Patterns - Pro Tips for Developers",
      description:
        "Dive deep into advanced TypeScript patterns including utility types, conditional types, template literal types, and more. Perfect for experienced developers.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/abc123def456/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/abc123def456/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/abc123def456/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "TypeScript Academy",
      tags: ["typescript", "programming", "javascript", "advanced", "patterns"],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title: "TypeScript Advanced Patterns - Pro Tips for Developers",
        description: "Dive deep into advanced TypeScript patterns...",
      },
    },
    contentDetails: {
      duration: "PT45M22S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
    },
    statistics: {
      viewCount: "756000",
      likeCount: "42000",
      dislikeCount: "890",
      favoriteCount: "0",
      commentCount: "8200",
    },
    status: {
      uploadStatus: "processed",
      privacyStatus: "public",
      license: "youtube",
      embeddable: true,
      publicStatsViewable: true,
      madeForKids: false,
    },
  },
  {
    kind: "youtube#video",
    etag: "XYZ789ABC123DEF456GHI",
    id: "xyz789abc123",
    snippet: {
      publishedAt: "2023-10-10T16:20:00Z",
      channelId: "UCxyz789abc123def",
      title: "Building Modern Web Apps with Next.js 14 - Full Course",
      description:
        "Complete Next.js 14 course covering App Router, Server Components, streaming, and performance optimization. Build 3 real projects from scratch.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/xyz789abc123/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/xyz789abc123/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/xyz789abc123/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/xyz789abc123/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Next.js Pro",
      tags: ["nextjs", "react", "fullstack", "web development", "tutorial"],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title: "Building Modern Web Apps with Next.js 14 - Full Course",
        description: "Complete Next.js 14 course covering App Router...",
      },
    },
    contentDetails: {
      duration: "PT2H15M30S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
    },
    statistics: {
      viewCount: "2100000",
      likeCount: "156000",
      dislikeCount: "3200",
      favoriteCount: "0",
      commentCount: "28700",
    },
    status: {
      uploadStatus: "processed",
      privacyStatus: "public",
      license: "youtube",
      embeddable: true,
      publicStatsViewable: true,
      madeForKids: false,
    },
  },
  {
    kind: "youtube#video",
    etag: "DEF456GHI789JKL012MNO",
    id: "def456ghi789",
    snippet: {
      publishedAt: "2023-10-08T11:15:00Z",
      channelId: "UCdef456ghi789jkl",
      title: "CSS Grid & Flexbox Mastery - Layout Like a Pro",
      description:
        "Master CSS Grid and Flexbox with practical examples and real-world layouts. Learn when to use each and create responsive designs effortlessly.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/def456ghi789/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/def456ghi789/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/def456ghi789/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "CSS Mastery Hub",
      tags: ["css", "grid", "flexbox", "responsive design", "web design"],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title: "CSS Grid & Flexbox Mastery - Layout Like a Pro",
        description: "Master CSS Grid and Flexbox with practical examples...",
      },
    },
    contentDetails: {
      duration: "PT1H8M45S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
    },
    statistics: {
      viewCount: "890000",
      likeCount: "67000",
      dislikeCount: "1500",
      favoriteCount: "0",
      commentCount: "12400",
    },
    status: {
      uploadStatus: "processed",
      privacyStatus: "public",
      license: "youtube",
      embeddable: true,
      publicStatsViewable: true,
      madeForKids: false,
    },
  },
  {
    kind: "youtube#video",
    etag: "GHI789JKL012MNO345PQR",
    id: "ghi789jkl012",
    snippet: {
      publishedAt: "2023-10-05T13:00:00Z",
      channelId: "UCghi789jkl012mno",
      title: "Node.js Performance Optimization - Scale Your Apps",
      description:
        "Learn how to optimize Node.js applications for performance and scale. Covers clustering, caching, database optimization, and monitoring techniques.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ghi789jkl012/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ghi789jkl012/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ghi789jkl012/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/ghi789jkl012/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Backend Masters",
      tags: ["nodejs", "performance", "backend", "optimization", "scalability"],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title: "Node.js Performance Optimization - Scale Your Apps",
        description: "Learn how to optimize Node.js applications...",
      },
    },
    contentDetails: {
      duration: "PT52M18S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
    },
    statistics: {
      viewCount: "634000",
      likeCount: "38000",
      dislikeCount: "890",
      favoriteCount: "0",
      commentCount: "9200",
    },
    status: {
      uploadStatus: "processed",
      privacyStatus: "public",
      license: "youtube",
      embeddable: true,
      publicStatsViewable: true,
      madeForKids: false,
    },
  },
  {
    kind: "youtube#video",
    etag: "JKL012MNO345PQR678STU",
    id: "jkl012mno345",
    snippet: {
      publishedAt: "2023-10-03T08:30:00Z",
      channelId: "UCjkl012mno345pqr",
      title: "Docker & Kubernetes for Developers - Complete DevOps Guide",
      description:
        "Master containerization with Docker and orchestration with Kubernetes. Learn deployment strategies, monitoring, and best practices for production.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/jkl012mno345/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/jkl012mno345/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/jkl012mno345/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "DevOps Academy",
      tags: ["docker", "kubernetes", "devops", "containers", "deployment"],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title: "Docker & Kubernetes for Developers - Complete DevOps Guide",
        description: "Master containerization with Docker and orchestration...",
      },
    },
    contentDetails: {
      duration: "PT1H35M42S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
    },
    statistics: {
      viewCount: "1100000",
      likeCount: "78000",
      dislikeCount: "2300",
      favoriteCount: "0",
      commentCount: "18500",
    },
    status: {
      uploadStatus: "processed",
      privacyStatus: "public",
      license: "youtube",
      embeddable: true,
      publicStatsViewable: true,
      madeForKids: false,
    },
  },
];
