import React, { useState, useEffect } from 'react';

type ReturnType<T> = [
    Array<T>,
    React.Dispatch<React.SetStateAction<Array<T>>>
]

const useLocalStorage = <T, >(key: string, initialaValue: Array<object>) : ReturnType<T> => {
  const value = localStorage.getItem(key);
  const [state, setState] = useState<Array<T>>(
    () => {
      if (!initialaValue) return;
      try {
        return value ? JSON.parse(value) : initialaValue
      } catch (error){ console.error(error);}
    },
  );

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error(error);
      };
    }
  }, [state, key]);
  return [state, setState];
};

export default useLocalStorage;
