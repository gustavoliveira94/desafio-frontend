import { useState } from "react";
import { useStorage } from "./useStorage";

export const useHistorySearch = () => {
  const { getItem, setItem } = useStorage();

  const [items, setItems] = useState<string[]>(getItem("history"));

  const [open, setOpen] = useState(false);

  const addToHistory = (query: string) => {
    const history = getItem("history");

    if (history.includes(query)) return;

    history.push(query);

    setItem("history", JSON.stringify(history));
    setItems(history);
  };

  const clearItem = (item: string) => {
    const history = getItem("history");
    const newHistory = history.filter((i: string) => i !== item);

    setItem("history", JSON.stringify(newHistory));
    setItems(newHistory);
  };

  return {
    history: items,
    addToHistory,
    clearItem,
    open,
    setOpen,
  };
};
