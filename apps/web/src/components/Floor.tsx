import styled from "styled-components";
import { FloorButton } from "./FloorButton";
import { Indicator } from "./Indicator";

const FloorCell = styled.section`
  position: relative;
  isolation: isolate;
  min-height: 10rem;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    border-bottom: 2px solid ${(props) => props.theme.separator};
  }
`;

const FloorTitle = styled.h2`
  font-size: 3rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PressableFloor = styled.button`
  position: absolute;
  inset: 0;
  z-index: -1;
  border-width: 0;
  background: transparent;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }

  [aria-selected="true"] > &:hover {
    background-color: transparent;
    cursor: default;
  }
`;

type FloorProps = {
  floorCount: number;
  floor: number;
  isElevatorPresent?: boolean;
  isQueued?: boolean;
  intention?: "Up" | "Down";
  onPress?: () => void;
  onPressUp?: () => void;
  onPressDown?: () => void;
};

export const Floor = ({
  floorCount,
  floor,
  isElevatorPresent,
  isQueued,
  intention,
  onPress,
  onPressUp,
  onPressDown,
}: FloorProps) => {
  return (
    <FloorCell
      role="option"
      aria-label={`Floor ${floor}`}
      aria-selected={isElevatorPresent}>
      <PressableFloor
        aria-label={`Call floor ${floor}`}
        aria-disabled={isElevatorPresent}
        onClick={onPress}>
        <Indicator hide={!isQueued} />
        <FloorTitle>{floor}</FloorTitle>
      </PressableFloor>
      <ButtonsContainer>
        {floor < floorCount - 1 && (
          <FloorButton
            title="Up"
            toggled={intention === "Up"}
            aria-label={`Call floor ${floor} Up`}
            aria-pressed={intention === "Up"}
            aria-disabled={isElevatorPresent}
            onClick={onPressUp}
          />
        )}
        {floor > 0 && (
          <FloorButton
            title="Down"
            toggled={intention === "Down"}
            aria-label={`Call floor ${floor} Down`}
            aria-pressed={intention === "Down"}
            aria-disabled={isElevatorPresent}
            onClick={onPressDown}
          />
        )}
      </ButtonsContainer>
    </FloorCell>
  );
};
