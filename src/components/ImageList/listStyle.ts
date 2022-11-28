import {ListMode} from "./ImageList.types";
import styled from "styled-components";
import {ResponseSizes} from "../../styles/Responsive";

interface IGridLayout {
  mode: ListMode;
  total: number;
}

function getGridColumnTemplate(mode: ListMode, itemPerRow: number, total: number): string {
  const perRow = (mode === ListMode.Grid) ? itemPerRow : total;
  return `repeat(${perRow}, 1fr)`;
}

export const Grid = styled.div<IGridLayout>`
  display: grid;
  grid-gap: 5px;
  transition: all ease-in-out 0.5s;
  grid-template-columns: ${props => getGridColumnTemplate(props.mode, 5, props.total)};
  
  @media only screen and ${ResponseSizes.phone} {
    grid-template-columns: ${props => getGridColumnTemplate(props.mode, 5, props.total)};
  }

  @media only screen and ${ResponseSizes.tablet} {
    grid-template-columns: ${props => getGridColumnTemplate(props.mode, 9, props.total)};
  }

  @media only screen and ${ResponseSizes.laptop} {
    grid-template-columns: ${props => getGridColumnTemplate(props.mode, 12, props.total)};
  }

  @media only screen and ${ResponseSizes.large} {
    grid-template-columns: ${props => getGridColumnTemplate(props.mode, 15, props.total)};
  }

  @media only screen and ${ResponseSizes.super} {
    grid-template-columns: ${props => getGridColumnTemplate(props.mode, 20, props.total)};
  }
`