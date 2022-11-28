import * as React from "react";
import {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";
import { ImageProps } from "./Image.types";
import styled from 'styled-components';
import {css, keyframes} from 'styled-components';
import {Shimmer} from "../Shimmer/Shimmer";

interface IStyleImage {
  visible: boolean;
  contain: boolean;
}

const commonStyle = css`
  width: 100%;
  height: 100%;
`;

const fadeAnimation = keyframes`
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
`

const Container = styled.div`
  ${commonStyle};
  position: relative;
`;

const Img = styled.img<IStyleImage>`
  ${commonStyle};
  position: absolute;
  z-index: 2;
  opacity: ${ prop => (prop.visible) ? 1 : 0 };
  animation: ${fadeAnimation} 0.5s ease-out;
  object-fit: ${ prop => (prop.contain) ? 'contain' : 'cover' };
  image-rendering: crisp-edges;
`;


const ShimmerContainer = styled(Shimmer)`
  position: absolute;
  z-index: 1;
`;

export const Image: FunctionComponent<ImageProps> = (props) => {
  const { imageUrl } = props;
  const [showImage, setShowImage] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setShowImage(!!imageRef.current?.complete);
  }, [imageUrl]);

  const imageOnLoad = useCallback(() => {
    setShowImage(true);
  }, []);

  const imageOnError = useCallback((err: unknown) => {
    setShowImage(true);
  }, []);

  return (
    <Container className={props.className}>
      <Img
        ref={imageRef}
        visible={true}
        src={imageUrl}
        contain={Boolean(props.contain)}
        onLoad={imageOnLoad}
        onError={imageOnError} />
      { (showImage) ? null : <ShimmerContainer /> }
      <span>{showImage}</span>
    </Container>
  );
};
