import { SVGProps } from "react";
import styled from "styled-components";

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
      stroke="black"
    />
  </svg>
);

export const Dot = styled(Svg)`
  width: 1.5rem;
  height: 1.5rem;
`;
