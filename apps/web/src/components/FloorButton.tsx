import styled from "styled-components";
import { Dot } from "../assets/icons/Dot";
import { HTMLAttributes } from "react";

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

const Text = styled.span``;

type FloorButtonProps = HTMLAttributes<HTMLButtonElement> & {
  title?: string;
};

export const FloorButton = ({ title, ...props }: FloorButtonProps) => {
  return (
    <Button {...props}>
      <Dot />
      <Text>{title}</Text>
    </Button>
  );
};
