import * as React from "react";
import {FunctionComponent, SyntheticEvent, useCallback} from "react";
import { SelectableImageProps } from "./SelectableImage.types";
import styled, {} from "styled-components";
import {Image} from "../Image/Image";
import {PrimaryColor} from "../../styles/Colors";


interface ISelectable {
  selected: boolean;
}

const Container = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const SelectableThumbnail = styled(Image)<ISelectable>`
  box-sizing: border-box;
  border: ${ props => props.selected ? `3px solid ${PrimaryColor.light}` : `0 none` }; 
`;

export const SelectableImage: FunctionComponent<SelectableImageProps> = (props) => {
  const { onChange } =  props;

  const containerOnClick = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    onChange?.();
  }, [onChange])

  return (
    <Container className={props.className} href={'#nolink'} onClick={containerOnClick}>
      <SelectableThumbnail selected={props.selected} imageUrl={props.image.thumbnailUrl} />
    </Container>
  );
};
