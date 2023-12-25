import { useState } from "react";

type UseArrayState<T> = [
  T[],
  {
    add: (newValue: T) => void;
    remove: (index: number) => void;
  }
];

const useArrayState = <T>(initialState: T[] = []): UseArrayState<T> => {
  const [state, setState] = useState<T[]>(initialState);

  const add = (newValue: T) => {
    setState((currentState) => [...currentState, newValue]);
  };

  const remove = (index: number) => {
    setState((currentState) => {
      const newState = [...currentState];
      newState.splice(index, 1);
      return newState;
    });
  };

  return [state, { add, remove }];
};

export default useArrayState;
