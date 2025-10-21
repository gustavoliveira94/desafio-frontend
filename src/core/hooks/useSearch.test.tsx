import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import { useSearch } from "./useSearch";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

function TestComponent({
  addToHistory,
}: {
  addToHistory: (q: string) => void;
}) {
  const { onSubmit } = useSearch({ addToHistory });

  return (
    <form onSubmit={onSubmit} data-testid="form">
      <input name="search" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
}

describe("useSearch", () => {
  const mockAddToHistory = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls addToHistory and navigate with query", () => {
    const { getByPlaceholderText, getByText } = render(
      <TestComponent addToHistory={mockAddToHistory} />,
    );

    const input = getByPlaceholderText("Search...") as HTMLInputElement;
    const button = getByText("Search");

    fireEvent.change(input, { target: { value: "react" } });
    fireEvent.click(button);

    expect(mockAddToHistory).toHaveBeenCalledWith("react");
    expect(mockNavigate).toHaveBeenCalledWith("/search/react");
  });

  it("does not call addToHistory or navigate when query is empty", () => {
    const { getByText } = render(
      <TestComponent addToHistory={mockAddToHistory} />,
    );

    fireEvent.click(getByText("Search"));

    expect(mockAddToHistory).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
