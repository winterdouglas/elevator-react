import { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { useElevator } from "elevator-core";
import { range } from "utils";
import { Floor } from "./Floor";
import { visuallyHidden } from "../mixins";

const MainContent = styled.main`
  position: relative;

  // This is done to facilitate centering the list
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;

  ${visuallyHidden};
`;

const List = styled.div`
  position: absolute;
  inset: 0;

  width: min(70%, 30rem);
  height: 80vh;
  height: 80dvh;

  // Centers the content
  margin: auto;

  display: grid;
  grid-auto-rows: 1fr;
`;

const Elevator = styled(animated.div)`
  position: absolute;

  // Aligns it at the bottom
  // Its height is dynamically calculated below
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.highlight};
`;

type BuildingProps = {
  floorCount: number;
};

export const Building = ({ floorCount }: BuildingProps) => {
  const floors = range(0, floorCount - 1).reverse();
  const { calls, callUp, callDown, setTarget, currentFloor } = useElevator();
  const itemSizePercent = 100 / (floors.length || 1);

  const [styles, api] = useSpring(() => ({
    height: `${itemSizePercent}%`,
    y: "0%",
  }));

  useEffect(() => {
    api.start({ y: `${-(currentFloor * 100)}%` });
  }, [api, currentFloor]);

  return (
    <MainContent>
      <Title>Elevator</Title>
      <List role="listbox" aria-label="Floors">
        <Elevator role="none" style={styles} />
        {floors.map((floor) => {
          return (
            <Floor
              key={floor}
              floorCount={floorCount}
              floor={floor}
              isElevatorPresent={floor === currentFloor}
              isQueued={calls.some((c) => c.floor === floor && !c.intention)}
              intention={calls.find((c) => c.floor === floor)?.intention}
              onPressUp={() => {
                callUp(floor);
              }}
              onPressDown={() => {
                callDown(floor);
              }}
              onPress={() => {
                setTarget(floor);
              }}
            />
          );
        })}
      </List>
    </MainContent>
  );
};
