import * as React from "react";
import { FunctionComponent } from "react";
import { EmptyStateProps } from "./EmptyState.types";
import {PureInformation} from "../statesSharedStyle";

export const EmptyState: FunctionComponent<EmptyStateProps> = (props) => {
  return (
    <PureInformation className={props.className}>
      <span>Please enter a search phrase, and hit ENTER to start</span>
    </PureInformation>
  );
};
