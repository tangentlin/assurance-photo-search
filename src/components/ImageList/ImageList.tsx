import * as React from "react";
import {FunctionComponent, useMemo} from "react";
import {ImageListProps} from "./ImageList.types";
import styled from "styled-components";
import {ImageVO} from "../../models/vos/ImageVO";
import {SelectableImage} from "../SelectableImage/SelectableImage";
import {Grid} from "./listStyle";

const Item = styled.div`
  aspect-ratio: 1;
`;

export const ImageList: FunctionComponent<ImageListProps> = (props) => {
  const {images, selected, onChange, mode} = props;

  const callBacks = useMemo(() => {
    const callBackMap: Map<ImageVO, () => void> = new Map();
    images.forEach((img) => {
      callBackMap.set(img, () => onChange?.(img));
    });
    return callBackMap;
  }, [images, onChange]);

  return (
    <Grid className={props.className} mode={mode} total={images.length}>
      {
        images.map((img) => <Item key={img.id}>
          <SelectableImage
            image={img}
            selected={img.id === selected?.id}
            onChange={callBacks.get(img)}
          /></Item>)
      }
    </Grid>
  );
};
