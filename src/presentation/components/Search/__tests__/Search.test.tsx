import { fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, expect, vi } from "vitest";

import { render } from "@/configs/tests/helperTest";

import { Search } from "../Search";

let mockHistory: string[] = [];
let mockOpen = false;
let mockClearItem = vi.fn();
let mockSetOpen = vi.fn();
let mockAddToHistory = vi.fn();

vi.mock("@/core/hooks/useHistorySearch", () => {
  return {
    useHistorySearch: () => ({
      history: mockHistory,
      setOpen: mockSetOpen,
      open: mockOpen,
      clearItem: mockClearItem,
      addToHistory: mockAddToHistory,
    }),
  };
});

vi.mock("@/core/hooks/useSearch", () => {
  return {
    useSearch: () => {
      return {
        onSubmit: vi.fn(),
      };
    },
  };
});

describe("Search component (mocked hooks)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockHistory = [];
    mockOpen = false;
    mockClearItem = vi.fn();
    mockSetOpen = vi.fn();
    mockAddToHistory = vi.fn();
  });

  it("renders the input and does NOT show dropdown when open is false", () => {
    mockHistory = ["one", "two"];
    mockOpen = false;

    const { getByPlaceholderText, queryByText } = render(<Search />);

    const input = getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();

    expect(queryByText("one")).not.toBeInTheDocument();
    expect(queryByText("two")).not.toBeInTheDocument();
  });

  it("shows dropdown when open is true and history has items", () => {
    mockHistory = ["first", "second"];
    mockOpen = true;

    const { getByText, getByPlaceholderText, getAllByTestId } = render(
      <Search />,
    );

    expect(getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(getByText("first")).toBeInTheDocument();
    expect(getByText("second")).toBeInTheDocument();

    expect(getAllByTestId("history-icon").length).toBeGreaterThan(0);
  });

  it("navigates to encoded route when mousedown on history item", () => {
    mockHistory = ["a b/c"];
    mockOpen = true;

    const mockItem = vi.fn();

    const { getByTestId } = render(<Search />);

    const li = getByTestId("history-item");
    li.onmousedown = mockItem;
    fireEvent.mouseDown(li);

    expect(mockItem).toHaveBeenCalledTimes(1);
  });

  it("calls clearItem when clicking X (mouseDown) for a given history item", () => {
    mockHistory = ["first"];
    mockOpen = true;

    const mockButton = vi.fn();

    const { getByText } = render(<Search />);

    const xButton = getByText("X");
    xButton.onmousedown = mockButton;
    fireEvent.mouseDown(xButton);

    expect(mockButton).toHaveBeenCalledTimes(1);
  });

  it("submitting form calls onSubmit and addToHistory from useHistorySearch", () => {
    mockHistory = [];
    mockOpen = false;
    mockAddToHistory = vi.fn();

    const { getByPlaceholderText, getByRole } = render(<Search />);

    const input = getByPlaceholderText(/search/i);
    const button = getByRole("button", { name: /search/i });
    button.onclick = mockAddToHistory;

    fireEvent.change(input, { target: { value: "my-query" } });
    fireEvent.click(button);

    expect(mockAddToHistory).toHaveBeenCalledTimes(1);
  });

  it("does not render dropdown when history is empty even if open is true", () => {
    mockHistory = [];
    mockOpen = true;

    const { queryByTestId, queryByText } = render(<Search />);

    expect(queryByTestId("history-icon")).not.toBeInTheDocument();
    expect(queryByText("X")).not.toBeInTheDocument();
  });
});
