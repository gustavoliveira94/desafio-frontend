import { render } from "@testing-library/react";
import { describe, it, vi, beforeEach, expect } from "vitest";

import { Video } from "../Video";

describe("Video component", () => {
  const commonProps = {
    thumbnailUrl: "https://example.com/thumb.jpg",
    title: "My Video Title",
    channelTitle: "Channel Name",
    publishedAt: "2025-10-20T12:00:00Z",
    description: "This is a description",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders thumbnail with correct src and alt", () => {
    const { getByAltText } = render(<Video {...commonProps} />);
    const img = getByAltText(commonProps.title) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(commonProps.thumbnailUrl);
  });

  it("renders title and channel title", () => {
    const { getByText } = render(<Video {...commonProps} />);

    expect(getByText(commonProps.title)).toBeInTheDocument();
    expect(getByText(commonProps.channelTitle)).toBeInTheDocument();
  });

  it("renders formatted date using formatDateIntl", () => {
    const { getByText } = render(<Video {...commonProps} />);

    expect(getByText("10/20/2025, 12:00")).toBeInTheDocument();
  });

  it("renders viewCount when provided using formatViews and shows 'views' text", () => {
    const { getByText } = render(
      <Video {...commonProps} viewCount={"912639"} />,
    );

    expect(getByText(/913k views/i)).toBeInTheDocument();
  });

  it("does not render views segment when viewCount is not provided", () => {
    const { queryByText } = render(<Video {...commonProps} />);

    expect(queryByText(/views$/i)).not.toBeInTheDocument();
  });

  it("renders duration badge when duration prop is provided", () => {
    const { getByText } = render(<Video {...commonProps} duration={"12:34"} />);

    expect(getByText("12:34")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    const { getByText } = render(
      <Video {...commonProps} description={"Desc text"} />,
    );

    expect(getByText("Desc text")).toBeInTheDocument();
  });

  it("applies search layout classes when type is 'search'", () => {
    const { container } = render(<Video {...commonProps} type="search" />);
    const root = container.firstChild as HTMLElement;

    expect(root.className).toContain("flex");
    expect(root.className).toContain("flex-col");

    expect(container.innerHTML).toContain("md:w-[250px]");
  });

  it("defaults to featured layout when type is omitted", () => {
    const { container } = render(<Video {...commonProps} />);
    const root = container.firstChild as HTMLElement;

    expect(root.className).not.toContain("flex-col sm:flex-row");
  });
});
