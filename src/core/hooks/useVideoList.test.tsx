import { describe, it, vi, expect, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import { useVideoList } from "./useVideoList";

const mockListVideos = vi.fn();
vi.mock("../services/videos", () => ({
  listVideos: () => mockListVideos(),
}));

describe("useVideoList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetches videos and updates state", async () => {
    mockListVideos.mockResolvedValue({ items: [{ id: "abc" }] });

    const { result } = renderHook(() => useVideoList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.videos).toEqual({ items: [{ id: "abc" }] });
    expect(result.current.thereAreNoVideos).toBe(false);
  });

  it("handles empty list", async () => {
    mockListVideos.mockResolvedValue({ items: [] });

    const { result } = renderHook(() => useVideoList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.videos).toEqual({ items: [] });
    expect(result.current.thereAreNoVideos).toBe(true);
  });

  it("handles errors gracefully", async () => {
    mockListVideos.mockRejectedValue(new Error("API error"));

    const { result } = renderHook(() => useVideoList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.videos).toEqual({});
    expect(result.current.thereAreNoVideos).toBe(true);
  });
});
