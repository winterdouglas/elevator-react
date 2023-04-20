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

const Text = styled.span``;

type FloorButtonProps = HTMLAttributes<HTMLButtonElement> & {
  title?: string;
  hideIndicator?: boolean;
};

export const FloorButton = ({
  title,
  hideIndicator,
  ...props
}: FloorButtonProps) => {
  return (
    <Button {...props}>
      <Indicator hidden={hideIndicator} />
      <Text>{title}</Text>
    </Button>
  );
};
