import {SearchPhase} from "../models/SearchPhase";
import {SearchResultVO} from "../models/vos/SearchResultVO";

export function guessSearchPhase(
  result: SearchResultVO | undefined,
  loading: boolean,
  error: boolean,
): SearchPhase {
  if (result) {
    return (result.images.length > 0) ? SearchPhase.Result : SearchPhase.ZeroResult;
  }

  if (loading) {
    return SearchPhase.Loading;
  }

  if (error) {
    return SearchPhase.Error;
  }

  return SearchPhase.Initial;
}