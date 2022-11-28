import * as React from "react";
import {FunctionComponent, useCallback, useEffect, useState} from "react";
import {GalleryProps} from "./Gallery.types";
import styled from 'styled-components';
import {ImageVO} from "../../models/vos/ImageVO";
import {Image} from "../Image/Image";
import {Grey} from "../../styles/Colors";
import {ListMode} from "../ImageList/ImageList.types";
import {ImageList} from "../ImageList/ImageList";
import closeIcon from '../../images/close.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const Selected = styled.div`
  flex-grow: 1;
  border-bottom: ${Grey["300"]} solid 1px;
  margin-bottom: 5px;
`;

const ControlArea = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 0.5rem;
  text-align: right;
`;

const IconButton = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  
  span, label {
    position: absolute;
    z-index: 1;
    /* put label of icon button off the screen so user cannot see it, but screen reader can still pickup */
    left: -20000px;
  }
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Gallery: FunctionComponent<GalleryProps> = (props) => {
  const { images } = props;

  const [selected, setSelected] = useState<ImageVO | undefined>();
  useEffect(() => {
    setSelected(undefined);
  }, [images]);

  const imageListOnChange = useCallback(( image: ImageVO ) => {
    setSelected(image);
  }, []);

  const closeOnClick = useCallback(() => {
    setSelected(undefined);
  }, [])

  const listMode = (selected) ? ListMode.Strip : ListMode.Grid;

  return (
    <Container className={props.className}>
      {
        (selected == null) ? null : <ControlArea>
          <IconButton onClick={closeOnClick}>
            <Icon src={closeIcon} />
            <label>Close</label>
          </IconButton>
        </ControlArea>
      }
      {
        (selected == null) ? null : <Selected>
          <Image imageUrl={selected.url} contain={true} />
        </Selected>
      }
      <ImageList
        images={images}
        mode={listMode}
        selected={selected}
        onChange={imageListOnChange} />
    </Container>
  );
};
