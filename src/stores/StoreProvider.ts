import React, { useContext, useRef } from "react";
import {
  StateCreator,
  StoreApi,
  createStore,
  useStore as useExternalStore,
} from "zustand";

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;

export const createContext = <T>(store: StateCreator<T, [], []>) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const Context = React.createContext<StoreApi<T>>({} as StoreApi<T>);

  const Provider = ({ children }: any) => {
    const storeRef = useRef<StoreApi<T> | undefined>();
    if (!storeRef.current) {
      storeRef.current = createStore<T>(store);
    }
    return React.createElement(
      Context.Provider,
      { value: storeRef.current },
      children,
    );
  };

  function useStore(): T;
  function useStore<U>(selector: (state: ExtractState<StoreApi<T>>) => U): U;
  function useStore<U>(selector?: (state: ExtractState<StoreApi<T>>) => U): U {
    const store1 = useContext(Context);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return useExternalStore(store1, selector);
  }

  return { Provider, Context, useStore };
};
