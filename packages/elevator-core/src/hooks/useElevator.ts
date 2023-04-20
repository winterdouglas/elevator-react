import { useState } from "react";
import { removeBy, sortBy } from "utils";
import { useElevatorLoop } from "./useElevatorLoop";

export type Intention = "Up" | "Down";

export type ElevatorCall = {
  floor: number;
  intention?: Intention;
};

type ElevatorPosition = {
  floor: number;
  direction?: "Up" | "Down";
};

export const useElevator = (stepDelayMs = 1000) => {
  const [calls, setCalls] = useState<ElevatorCall[]>([]);
  const [currentPosition, setCurrentPosition] = useState<ElevatorPosition>({
    floor: 0,
    direction: undefined,
  });

  const isFloorCalled = (floor: number) =>
    calls.some((x) => x.floor === floor) || floor === currentPosition.floor;

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

  const getNext = (
    calls: ElevatorCall[],
    position: ElevatorPosition
  ): (ElevatorCall & { isReversing?: boolean }) | undefined => {
    const { floor: currentFloor, direction: currentDirection } = position;

    if (!currentDirection) {
      return calls[0];
    }

    const upperFloors = sortBy(
      calls.filter((c) => c.floor > currentFloor),
      "floor",
      "ascending"
    );
    const lowerFloors = sortBy(
      calls.filter((c) => c.floor < currentFloor),
      "floor",
      "descending"
    );

    if (currentDirection === "Up") {
      const nextUp = upperFloors.concat(lowerFloors)[0];
      if (!nextUp) return;

      return {
        ...nextUp,
        isReversing:
          upperFloors.filter((x) => !x.intention || x.intention === "Down")
            .length === 1,
      };
    }

    const nextDown = lowerFloors.concat(upperFloors)[0];
    if (!nextDown) return;

    return {
      ...nextDown,
      isReversing:
        lowerFloors.filter((x) => !x.intention || x.intention === "Up")
          .length === 1,
    };
  };

  const process = () => {
    if (calls.length) {
      const nextCall = getNext(calls, currentPosition);

      if (nextCall === undefined) {
        return;
      }

      const target: ElevatorPosition =
        nextCall.floor > currentPosition.floor
          ? { direction: "Up", floor: currentPosition.floor + 1 }
          : { direction: "Down", floor: currentPosition.floor - 1 };

      setCurrentPosition(target);

      if (
        nextCall.floor === target.floor &&
        (!nextCall.intention ||
          nextCall.intention === target.direction ||
          nextCall.isReversing)
      ) {
        setCalls((prev) => removeBy(prev, "floor", nextCall.floor));
        return;
      }
    }
  };

  useElevatorLoop(calls.length, process, stepDelayMs);

  return {
    calls,
    currentFloor: currentPosition.floor,
    callUp,
    callDown,
    setTarget,
  };
};
