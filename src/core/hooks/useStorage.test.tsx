import { describe, it, expect, vi, beforeEach } from "vitest";
import { useStorage } from "./useStorage";

describe("useStorage hook", () => {
  let storage: ReturnType<typeof useStorage>;

  beforeEach(() => {
    const store: Record<string, string> = {};
    vi.stubGlobal("localStorage", {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        for (const key in store) delete store[key];
      }),
    });

    storage = useStorage();
  });

  it("should set and get items correctly", () => {
    storage.setItem("key1", JSON.stringify({ a: 1 }));
    const value = storage.getItem("key1");

    expect(value).toEqual({ a: 1 });
    expect(localStorage.setItem).toHaveBeenCalledWith("key1", '{"a":1}');
    expect(localStorage.getItem).toHaveBeenCalledWith("key1");
  });

  it("should return null if key does not exist", () => {
    const value = storage.getItem("nonexistent");
    expect(value).toBeNull();
  });

  it("should remove items correctly", () => {
    storage.setItem("key2", JSON.stringify("test"));
    storage.removeItem("key2");
    const value = storage.getItem("key2");
    expect(value).toBeNull();
    expect(localStorage.removeItem).toHaveBeenCalledWith("key2");
  });
});
