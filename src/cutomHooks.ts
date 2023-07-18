import { useState, useCallback } from "react";

export function useCounter() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("John");

  const setCountIncriment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const setFullName = useCallback((last: string) => {
    setName(name + " " + last);
  }, []);
  return {
    count,
    setCountIncriment,
    setFullName,
    name
  };
}
