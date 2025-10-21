import { render } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";

import { VideosList } from "../VideosList";

let mockHook: ReturnType<typeof vi.fn>;

beforeEach(() => {
  mockHook = vi.fn(() => ({
    videos: [],
    loading: false,
    thereAreNoVideos: false,
  }));
});

describe("VideosList component", () => {
  it("renders loading state when loading is true", () => {
    mockHook.mockReturnValue({
      videos: [],
      loading: true,
      thereAreNoVideos: false,
    });

    const { getByText } = render(
      <VideosList render={() => <div>Render</div>} customHook={mockHook} />,
    );
    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders 'No videos found.' when thereAreNoVideos is true", () => {
    mockHook.mockReturnValue({
      videos: [],
      loading: false,
      thereAreNoVideos: true,
    });

    const { getByText } = render(
      <VideosList render={() => <div>Render</div>} customHook={mockHook} />,
    );
    expect(getByText(/no videos found/i)).toBeInTheDocument();
  });

  it("renders the content using render() when not loading and videos exist", () => {
    const mockVideos = [{ id: 1, title: "Video 1" }];
    mockHook.mockReturnValue({
      videos: mockVideos,
      loading: false,
      thereAreNoVideos: false,
    });

    const mockRender = vi.fn((videos) => (
      <div>Videos count: {videos.length}</div>
    ));

    const { getByText } = render(
      <VideosList render={mockRender} customHook={mockHook} />,
    );

    expect(mockRender).toHaveBeenCalledWith(mockVideos);
    expect(getByText(/videos count: 1/i)).toBeInTheDocument();
  });
});
