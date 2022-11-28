import {IStyleable} from "../../models/ui/StyleComponent";

export interface ISearchBarInput extends IStyleable {
  /**
   * Number of milliseconds delayed from the last keystroke before submit is fired
   * @default 1500
   */
  autoSubmitDelay?: number;

  /**
   * Placeholder text of search input
   * @default Search
   */
  placeholder?: string;
}

export interface ISearchBarEvent {
  onSubmit?: ( value: string ) => void;
}

export type SearchBarProps = ISearchBarInput & ISearchBarEvent;
