import { useEffect } from "react";
import { useInterval } from "./useInterval";

export const useElevatorLoop = (
  calls: number,
  callback: () => void,
  stepDelayMs = 1000
) => {
  const { startInterval, cancelInterval, isRunning } = useInterval(
    callback,
    stepDelayMs
  );

  useEffect(() => {
    if (calls > 0) {
      if (isRunning) return;
      startInterval();
    } else {
      cancelInterval();
    }
  }, [calls, cancelInterval, isRunning, startInterval]);
};
