import { useEffect, useLayoutEffect, useState } from "react";
import { ElevatorCall, ElevatorConfig } from "../lib/elevator";
import { range } from "../lib/utils";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useElevator = (config?: ElevatorConfig) => {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [calls, setCalls] = useState<ElevatorCall[]>([]);

  const isFloorCalled = (floor: number) =>
    calls.some((x) => x.floor === floor) || floor === currentFloor;

  const callUp = (floor: number) => {
    if (!isFloorCalled(floor))
      setCalls((prev) => [...prev, { floor, intention: "Up" }]);
  };

  const callDown = (floor: number) => {
    if (!isFloorCalled(floor))
      setCalls((prev) => [...prev, { floor, intention: "Down" }]);
  };

  const setTarget = (floor: number) => {
    if (!isFloorCalled(floor)) setCalls((prev) => [...prev, { floor }]);
  };

  useEffect(() => {
    const process = async () => {
      if (calls.length) {
        const call = calls[0];
        const steps =
          call.floor > currentFloor
            ? range(currentFloor + 1, call.floor)
            : range(currentFloor - 1, call.floor);

        for (let step of steps) {
          await sleep(config?.stepDelayMs ?? 1000);
          console.log(calls);
          setCurrentFloor(step);
        }

        setCalls((prev) => prev.slice(1));
      }
    };

    process();
  }, [calls]);

  return {
    currentFloor,
    callUp,
    callDown,
    setTarget,
  };
};
