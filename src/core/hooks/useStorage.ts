export const useStorage = () => {
  const getItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || "null");
  };

  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};
