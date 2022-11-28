import * as React from "react";
import { FunctionComponent } from "react";
import { ErrorStateProps } from "./ErrorState.types";
import {PureInformation} from "../statesSharedStyle";

export const ErrorState: FunctionComponent<ErrorStateProps> = (props) => {
  return (
    <PureInformation className={props.className}>
      <span>Sorry, an error has occurred during search, please try again later.</span>
    </PureInformation>
  );
};
