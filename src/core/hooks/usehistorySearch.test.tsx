import { render, fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, vi, expect } from "vitest";

import { useHistorySearch } from "./useHistorySearch";

let initialStorage: Record<string, string> = {};
let mockSetItem = vi.fn();

vi.mock("./useStorage", () => {
  return {
    useStorage: () => ({
      getItem: (key: string) => {
        const raw = initialStorage[key];
        try {
          return raw ? JSON.parse(raw) : [];
        } catch {
          return [];
        }
      },
      setItem: (key: string, value: string) => {
        initialStorage[key] = value;
        mockSetItem(key, value);
      },
    }),
  };
});

function TestComponent() {
  const { history, addToHistory, clearItem, open, setOpen } =
    useHistorySearch();

  return (
    <div>
      <div data-testid="open">{String(open)}</div>
      <ul data-testid="list">
        {history.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <button onClick={() => addToHistory("new-item")}>add-new</button>
      <button onClick={() => addToHistory("exists")}>add-exists</button>
      <button onClick={() => clearItem("exists")}>clear-exists</button>
      <button onClick={() => setOpen(true)}>open</button>
      <button onClick={() => setOpen(false)}>close</button>
    </div>
  );
}

describe("useHistorySearch", () => {
  beforeEach(() => {
    initialStorage = {};
    mockSetItem = vi.fn();
    vi.clearAllMocks();
  });

  it("initializes with items from storage", () => {
    initialStorage["history"] = JSON.stringify(["one", "two"]);

    const { getByText } = render(<TestComponent />);

    expect(getByText("one")).toBeInTheDocument();
    expect(getByText("two")).toBeInTheDocument();
  });

  it("adds new items to history and updates storage", () => {
    initialStorage["history"] = JSON.stringify(["exists"]);

    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText("add-new"));

    expect(getByText("new-item")).toBeInTheDocument();
    const stored = JSON.parse(initialStorage["history"]);
    expect(stored).toContain("new-item");
    expect(mockSetItem).toHaveBeenCalled();
  });

  it("does not add duplicates", () => {
    initialStorage["history"] = JSON.stringify(["exists"]);

    const { getByText, getAllByText } = render(<TestComponent />);

    mockSetItem.mockClear();
    fireEvent.click(getByText("add-exists"));

    expect(getAllByText("exists").length).toBe(1);
    expect(mockSetItem).not.toHaveBeenCalled();
  });

  it("removes item and updates storage", () => {
    initialStorage["history"] = JSON.stringify(["exists", "remove-me"]);

    const { getByText, queryByText } = render(<TestComponent />);

    expect(getByText("exists")).toBeInTheDocument();

    fireEvent.click(getByText("clear-exists"));

    expect(queryByText("exists")).not.toBeInTheDocument();
    expect(mockSetItem).toHaveBeenCalled();
    const lastCall = mockSetItem.mock.calls.at(-1);
    const updated = JSON.parse(lastCall?.[1] || "[]");
    expect(updated).not.toContain("exists");
  });

  it("toggles open state", () => {
    const { getByText, getByTestId } = render(<TestComponent />);

    expect(getByTestId("open").textContent).toBe("false");

    fireEvent.click(getByText("open"));
    expect(getByTestId("open").textContent).toBe("true");

    fireEvent.click(getByText("close"));
    expect(getByTestId("open").textContent).toBe("false");
  });
});
