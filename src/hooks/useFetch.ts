import {useCallback, useEffect, useRef, useState} from 'react';

export type FetchState<T> = {
  isLoading: boolean;
  isRefreshing: boolean;
  data: T | null;
  error: string | null;
  lastUpdated: number;
};

const useFetch = <T, A extends any[]>(fetch: (...args: A) => Promise<T>) => {
  const isMounted = useRef(false);
  const memoizedFetch = useCallback(fetch, [fetch]);
  const page = useRef(0);

  const [state, setState] = useState<FetchState<T>>({
    isLoading: false,
    isRefreshing: false,
    data: null,
    error: null,
    lastUpdated: 0,
  });

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const doFetch = useCallback(
    async (...args: A) => {
      try {
        setState(prevState => ({...prevState, error: '', isLoading: true}));
        const payload = await memoizedFetch(...args);
        if (isMounted.current) {
          setState(prevState => {
            return {
              ...prevState,
              error: null,
              isLoading: false,
              data: payload,
              lastUpdated: Date.now(),
            };
          });
          page.current = page.current + 1;
        }
        return payload;
      } catch (e) {
        if (isMounted.current) {
          setState(prevState => ({
            ...prevState,
            isLoading: false,
            error: (e as Error)?.message || (e as Error)?.toString(),
            lastUpdated: prevState.lastUpdated,
          }));
        }
      }
    },
    [memoizedFetch],
  );

  return [state, doFetch, page.current, page] as const;
};

export default useFetch;
