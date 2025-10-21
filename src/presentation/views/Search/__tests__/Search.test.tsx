/* eslint-disable @typescript-eslint/no-explicit-any */

import { describe, it, beforeEach, vi, expect } from "vitest";

import { SearchPage } from "../Search";
import { render } from "@/configs/tests/helperTest";

let mockReturn: {
  videos: any;
  loading: boolean;
  thereAreNoVideos: boolean;
};

vi.mock("@/core/hooks", () => {
  return {
    useSearchList: () => mockReturn,
  };
});

describe("SearchPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockReturn = {
      videos: { items: [] },
      loading: false,
      thereAreNoVideos: true,
    };
  });

  it("renders heading containing the query param from the route", () => {
    const { getByRole } = render(<SearchPage />, {
      pathname: "/search/:query",
      route: "/search/my-term",
    });

    expect(
      getByRole("heading", { name: /Results to my-term:/i }),
    ).toBeInTheDocument();
  });

  it("shows 'No videos found.' when thereAreNoVideos is true", () => {
    mockReturn = {
      videos: { items: [] },
      loading: false,
      thereAreNoVideos: true,
    };

    const { getByText } = render(<SearchPage />, {
      pathname: "/search/:query",
      route: "/search/my-term",
    });

    expect(getByText(/no videos found/i)).toBeInTheDocument();
  });

  it("shows loading state when loading is true", () => {
    mockReturn = {
      videos: { items: [] },
      loading: true,
      thereAreNoVideos: false,
    };

    const { getByText } = render(<SearchPage />, {
      pathname: "/search/:query",
      route: "/search/my-term",
    });

    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders Video elements for each item when videos are returned", () => {
    mockReturn = {
      videos: {
        items: [
          {
            id: { videoId: "a1" },
            snippet: {
              title: "First",
              channelTitle: "C1",
              publishedAt: "2025-10-20T12:00:00Z",
              description: "desc",
              thumbnails: { high: { url: "https://example/1.jpg" } },
            },
          },
          {
            id: { videoId: "b2" },
            snippet: {
              title: "Second",
              channelTitle: "C2",
              publishedAt: "2025-10-19T12:00:00Z",
              description: "desc2",
              thumbnails: { high: { url: "https://example/2.jpg" } },
            },
          },
        ],
      },
      loading: false,
      thereAreNoVideos: false,
    };

    const { getAllByTestId, getByText } = render(<SearchPage />, {
      pathname: "/search/:query",
      route: "/search/my-term",
    });

    const rendered = getAllByTestId("video");
    expect(rendered.length).toBe(2);
    expect(getByText("First")).toBeInTheDocument();
    expect(getByText("Second")).toBeInTheDocument();
  });
});
