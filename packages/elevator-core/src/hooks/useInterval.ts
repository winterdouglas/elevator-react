import { useEffect, useRef } from "react";

interface Interval {
  cancelInterval: () => void;
  startInterval: () => void;
  isRunning: boolean;
}

export const useInterval = (callback: () => void, delay?: number): Interval => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const savedCallbackRef = useRef<() => void>(() => {});
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const isRunningRef = useRef(false);

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  const startInterval = () => {
    cancelInterval();

    if (delay === undefined) throw new Error("Please set the delay first.");

    intervalIdRef.current = setInterval(
      () => savedCallbackRef.current(),
      delay
    );
    isRunningRef.current = true;
  };

  const cancelInterval = () => {
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    isRunningRef.current = false;
  };

  useEffect(() => {
    return cancelInterval;
  }, []);

  return { startInterval, cancelInterval, isRunning: isRunningRef.current };
};
