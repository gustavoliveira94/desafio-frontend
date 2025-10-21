/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from "@testing-library/react";
import { describe, it, beforeEach, vi, expect } from "vitest";

import { HomePage } from "../Home";

let mockReturn: {
  videos: any;
  loading: boolean;
  thereAreNoVideos: boolean;
};

vi.mock("@/core/hooks", () => {
  return {
    useVideoList: () => mockReturn,
  };
});

describe("HomePage", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockReturn = {
      videos: { items: [] },
      loading: false,
      thereAreNoVideos: true,
    };
  });

  it("renders heading and description", () => {
    const { getByRole, getByText } = render(<HomePage />);

    expect(
      getByRole("heading", { name: /Featured Videos/i }),
    ).toBeInTheDocument();
    expect(
      getByText(/Discover the latest and most popular videos/i),
    ).toBeInTheDocument();
  });

  it("renders Video components for each video item when videos are available", () => {
    mockReturn = {
      videos: {
        items: [
          {
            id: "v1",
            snippet: {
              title: "Video One",
              channelTitle: "Channel A",
              publishedAt: "2025-10-20T12:00:00Z",
              description: "Desc 1",
              thumbnails: { high: { url: "https://example.com/1.jpg" } },
            },
            contentDetails: { duration: "PT1M23S" },
            statistics: { viewCount: "1234" },
          },
          {
            id: "v2",
            snippet: {
              title: "Video Two",
              channelTitle: "Channel B",
              publishedAt: "2025-10-19T12:00:00Z",
              description: "Desc 2",
              thumbnails: { high: { url: "https://example.com/2.jpg" } },
            },
            contentDetails: { duration: "PT2M10S" },
            statistics: { viewCount: "5678" },
          },
        ],
      },
      loading: false,
      thereAreNoVideos: false,
    };

    const { getAllByTestId, getByText } = render(<HomePage />);

    const renderedVideos = getAllByTestId("video");

    expect(renderedVideos.length).toBe(2);

    expect(getByText("Video One")).toBeInTheDocument();
    expect(getByText("Video Two")).toBeInTheDocument();
  });

  it("renders 'No videos found.' when thereAreNoVideos is true", () => {
    mockReturn = {
      videos: { items: [] },
      loading: false,
      thereAreNoVideos: true,
    };

    const { getByText } = render(<HomePage />);

    expect(getByText(/no videos found/i)).toBeInTheDocument();
  });

  it("renders loading state when loading is true", () => {
    mockReturn = {
      videos: { items: [] },
      loading: true,
      thereAreNoVideos: false,
    };

    const { getByText } = render(<HomePage />);

    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
