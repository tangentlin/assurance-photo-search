import * as React from "react";
import {FunctionComponent, useCallback, useEffect, useState} from "react";
import {GalleryProps} from "./Gallery.types";
import styled from 'styled-components';
import {ImageVO} from "../../models/vos/ImageVO";
import {Image} from "../Image/Image";
import {Grey} from "../../styles/Colors";
import {ListMode} from "../ImageList/ImageList.types";
import {ImageList} from "../ImageList/ImageList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const Selected = styled.div`
  flex-grow: 1;
  border-bottom: ${Grey["600"]} solid 1px;
  margin-bottom: 5px;
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

  const listMode = (selected) ? ListMode.Strip : ListMode.Grid;

  return (
    <Container className={props.className}>
      {
        (selected == null) ? null : <Selected><Image imageUrl={selected.url} contain={true} /></Selected>
      }
      <ImageList
        images={images}
        mode={listMode}
        selected={selected}
        onChange={imageListOnChange} />
    </Container>
  );
};
