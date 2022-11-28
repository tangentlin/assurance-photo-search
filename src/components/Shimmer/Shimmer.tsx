import * as React from "react";
import { FunctionComponent } from "react";
import { ShimmerProps } from "./Shimmer.types";
import styled from 'styled-components';
import {keyframes} from 'styled-components';
import {Grey} from "../../styles/Colors";

const baseColor = Grey['400'];
const glossColor = Grey['300'];

const colorAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
`

const AnimatedColor = styled.div`
  width: 100%;
  height: 100%;
  
  background-color: ${baseColor};
  background-image: linear-gradient(to right, ${baseColor} 0%, ${glossColor} 20%, ${baseColor} 40%, ${baseColor} 100%);
  background-repeat: repeat-y;
  background-size: 1200px 360px;
  display: block;
  position: relative;
  
  /* 3.5s derives from average respiratory rate which 12 to 16 breathes per minute  */
  animation-duration: 3.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${colorAnimation};
  animation-timing-function: linear;
`;

export const Shimmer: FunctionComponent<ShimmerProps> = (props) => {
  return (
    <AnimatedColor className={props.className} />
  );
};
