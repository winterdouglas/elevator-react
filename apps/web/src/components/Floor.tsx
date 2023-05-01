import { HTMLAttributes } from "react";
import styled from "styled-components";
import { FloorButton } from "./FloorButton";
import { Indicator } from "./Indicator";

const FloorCell = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;

  &::after {
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
  color: ${(props) => props.theme.text};
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

  ${FloorCell}[aria-selected="true"] > &:hover {
    background-color: transparent;
    cursor: default;
  }
`;

type FloorProps = HTMLAttributes<HTMLElement> & {
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
  ...props
}: FloorProps) => {
  return (
    <FloorCell
      role="listitem"
      aria-label={`Floor ${floor}`}
      aria-selected={isElevatorPresent}
      {...props}>
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
