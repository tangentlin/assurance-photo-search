import {IStyleable} from "../../models/ui/StyleComponent";
import {SearchResultVO} from "../../models/vos/SearchResultVO";

export interface ISearchResultInput extends IStyleable {
  data?: SearchResultVO;
  isLoading?: boolean;
  hasError?: boolean;
}

export interface ISearchResultEvent {
}

export type SearchResultProps = ISearchResultInput & ISearchResultEvent;
