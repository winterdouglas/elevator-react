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

  &:active {
    background-color: ${(props) => props.theme.highlight};
  }
`;

type FloorProps = {
  floorCount: number;
  floor: number;
  isQueued?: boolean;
  intention?: "Up" | "Down";
  onPress?: () => void;
  onPressUp?: () => void;
  onPressDown?: () => void;
};

export const Floor = ({
  floorCount,
  floor,
  isQueued,
  intention,
  onPress,
  onPressUp,
  onPressDown,
}: // ...props
FloorProps) => {
  return (
    <FloorCell>
      <PressableFloor onClick={onPress}>
        <Indicator hidden={!isQueued} />
        <FloorTitle>{floor}</FloorTitle>
      </PressableFloor>
      <ButtonsContainer>
        {floor < floorCount - 1 && (
          <FloorButton
            title="Up"
            hideIndicator={intention !== "Up"}
            onClick={onPressUp}
          />
        )}
        {floor > 0 && (
          <FloorButton
            title="Down"
            hideIndicator={intention !== "Down"}
            onClick={onPressDown}
          />
        )}
      </ButtonsContainer>
    </FloorCell>
  );
};
