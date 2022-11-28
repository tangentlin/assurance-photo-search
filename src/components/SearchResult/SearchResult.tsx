import * as React from "react";
import {FunctionComponent} from "react";
import {SearchResultProps} from "./SearchResult.types";
import {guessSearchPhase} from "../../utils/searchPhaseUtil";
import {SearchPhase} from "../../models/SearchPhase";
import {LoadingState} from "../states/LoadingState/LoadingState";
import {ZeroState} from "../states/ZeroState/ZeroState";
import {ErrorState} from "../states/ErrorState/ErrorState";
import {Gallery} from "../Gallery/Gallery";
import {EmptyState} from "../states/EmptyState/EmptyState";

export const SearchResult: FunctionComponent<SearchResultProps> = (props) => {
  const phase = guessSearchPhase(props.data, Boolean(props.isLoading), Boolean(props.hasError));

  if (phase === SearchPhase.Loading) {
    return <LoadingState className={props.className} />
  }

  if (phase === SearchPhase.Error) {
    return <ErrorState className={props.className} />
  }

  if (phase === SearchPhase.ZeroResult) {
    return <ZeroState className={props.className} />
  }

  if (phase === SearchPhase.Result && props.data) {
    return <Gallery className={props.className} images={props.data.images} />
  }

  return <EmptyState className={props.className} />
};
