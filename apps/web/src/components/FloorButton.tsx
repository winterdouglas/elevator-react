import { HTMLAttributes } from "react";
import styled from "styled-components";
import { Indicator } from "./Indicator";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0;
  background-color: transparent;
  color: ${(props) => props.theme.primary};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.2;
  }
`;

type FloorButtonProps = HTMLAttributes<HTMLButtonElement> & {
  title?: string;
  toggled?: boolean;
};

export const FloorButton = ({ title, toggled, ...props }: FloorButtonProps) => {
  return (
    <Button {...props}>
      <Indicator hide={!toggled} />
      {title}
    </Button>
  );
};
