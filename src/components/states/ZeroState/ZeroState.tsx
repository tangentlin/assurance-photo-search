import * as React from "react";
import { FunctionComponent } from "react";
import { ZeroStateProps } from "./ZeroState.types";
import {PureInformation} from "../statesSharedStyle";

export const ZeroState: FunctionComponent<ZeroStateProps> = (props) => {
  return (
    <PureInformation className={props.className}>
      <span>Sorry, no results matched the search criteria.  Please try a different search phrase.</span>
    </PureInformation>
  );
};
