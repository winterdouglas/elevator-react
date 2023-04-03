import {
  BehaviorSubject,
  Subject,
  bufferTime,
  bufferWhen,
  combineLatest,
  concatMap,
  concatWith,
  debounce,
  debounceTime,
  delay,
  distinct,
  distinctUntilChanged,
  interval,
  map,
  mergeAll,
  mergeMap,
  mergeWith,
  of,
  range as rangeRx,
  switchMap,
  take,
  tap,
  toArray,
} from "rxjs";
import { range } from "./utils";

export type ElevatorConfig = {
  stepDelayMs?: number;
  floorCount?: number;
};

export type Intention = "Up" | "Down";

export type ElevatorCall = {
  floor: number;
  intention?: Intention;
};

export const elevator = ({ stepDelayMs = 1000 }: ElevatorConfig) => {
  const elevatorCall$ = new Subject<ElevatorCall>();
  const position$ = new BehaviorSubject(0);
  const stop$ = new Subject<number>();

  const callUp = (floor: number) => {
    elevatorCall$.next({ floor, intention: "Up" });
  };

  const callDown = (floor: number) => {
    elevatorCall$.next({ floor, intention: "Down" });
  };

  const setTarget = (floor: number) => {
    elevatorCall$.next({ floor });
  };

  elevatorCall$
    .pipe(
      mergeMap((call) =>
        position$.pipe(
          take(1), // we're only interested on the initial position for each elevator call
          map((pos) =>
            call.floor > pos
              ? range(pos + 1, call.floor)
              : range(pos - 1, call.floor)
          ),
          mergeAll(),
          concatMap((pos) =>
            of(pos).pipe(
              delay(stepDelayMs),
              map((position) => ({
                position,
                call,
              }))
            )
          )
        )
      )
    )
    .subscribe(({ call, position }) => {
      position$.next(position);
      if (position === call.floor) stop$.next(position);
    });

  return {
    positions: position$.asObservable(),
    stops: stop$.asObservable(),
    callUp,
    callDown,
    setTarget,
  };
};
