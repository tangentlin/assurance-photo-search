import * as React from "react";
import {FunctionComponent} from "react";
import {LoadingStateProps} from "./LoadingState.types";
import {Grid} from "../../ImageList/listStyle";
import {ListMode} from "../../ImageList/ImageList.types";
import {Shimmer} from "../../Shimmer/Shimmer";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  aspect-ratio: 1;
`;

export const LoadingState: FunctionComponent<LoadingStateProps> = (props) => {
  const visuals = [];
  for (let i = 0; i < props.total; i++) {
    visuals.push(<Item key={i.toString()}><Shimmer /></Item>);
  }
  return (
    <Container className={props.className}>
      <Grid total={props.total} mode={ListMode.Grid}>
        {visuals}
      </Grid>
    </Container>
  );
};
