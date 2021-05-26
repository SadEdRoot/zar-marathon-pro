import {useEffect, useState} from "react";

const useDebounce = (value: string, delay: number) => {
  const [debuuncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(handler)
    }
  }, [value]);

  return debuuncedValue
}

export default useDebounce;
