import styled from "styled-components";
import { Dot } from "../assets/icons/Dot";
import { SVGProps } from "react";

const StyledDot = styled(Dot)`
  fill: ${(props) => props.theme.tertiary};
  stroke-width: 0;
`;

type IndicatorProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  hide?: boolean;
};

export const Indicator = ({ hide, ...props }: IndicatorProps) => {
  return (
    <StyledDot
      {...props}
      aria-label="Indicator"
      aria-hidden={true}
      style={{ opacity: hide ? 0 : 1 }}
    />
  );
};
