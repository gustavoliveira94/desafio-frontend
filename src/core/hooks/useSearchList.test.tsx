import { describe, it, vi, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";

import { useSearchList } from "./useSearchList";

const mockSearchVideos = vi.fn();
vi.mock("../services/videos", () => ({
  searchVideos: (query: string) => mockSearchVideos(query),
}));

const mockUseParams = vi.fn();
vi.mock("react-router-dom", () => ({
  useParams: () => mockUseParams(),
}));

describe("useSearchList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetches videos and updates state", async () => {
    mockUseParams.mockReturnValue({ query: "test" });
    mockSearchVideos.mockResolvedValue({ items: [{ id: 1 }] });

    const { result } = renderHook(() => useSearchList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.videos).toEqual({ items: [{ id: 1 }] });
    expect(result.current.thereAreNoVideos).toBe(false);
  });

  it("handles empty result", async () => {
    mockUseParams.mockReturnValue({ query: "empty" });
    mockSearchVideos.mockResolvedValue({ items: [] });

    const { result } = renderHook(() => useSearchList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.videos).toEqual({ items: [] });
    expect(result.current.thereAreNoVideos).toBe(true);
  });

  it("does nothing if no query", () => {
    mockUseParams.mockReturnValue({ query: undefined });

    const { result } = renderHook(() => useSearchList());

    expect(result.current.videos).toEqual({});
    expect(result.current.loading).toBe(true);
    expect(result.current.thereAreNoVideos).toBe(false);
    expect(mockSearchVideos).not.toHaveBeenCalled();
  });
});
