const useLocalStorage = () => {
  const setItem = <T,>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = <T,>(key: string): T | null => {
    const item = localStorage.getItem(key);
    try {
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return null;
    }
  };

  const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
