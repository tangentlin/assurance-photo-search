import useSWR from "swr";
import {searchPhoto} from "../utils/pixelBayUtil";

export function useImageSearch(phrase: string | undefined) {
  const { data, error } = useSWR(phrase, searchPhoto, {
    refreshInterval: 15 * 60 * 1000 // refresh every 15 minutes
  });

  return {
    searchResult: data,
    isLoading: !error && !data && Boolean(phrase) && phrase?.trim() !== '',
    hasError: Boolean(error),
    error,
  };
}