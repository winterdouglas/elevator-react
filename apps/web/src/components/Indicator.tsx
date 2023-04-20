import styled from "styled-components";
import { Dot } from "../assets/icons/Dot";

const StyledDot = styled(Dot)`
  fill: ${(props) => props.theme.tertiary};
  stroke-width: 0;
`;

type IndicatorProps = {
  hidden?: boolean;
};

export const Indicator = ({ hidden }: IndicatorProps) => {
  return <StyledDot style={{ opacity: hidden ? 0 : 1 }} />;
};
