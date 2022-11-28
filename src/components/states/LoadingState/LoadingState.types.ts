import {IStyleable} from "../../../models/ui/StyleComponent";

export interface ILoadingStateInput extends IStyleable {
  total: number;
}

export interface ILoadingStateEvent {
}

export type LoadingStateProps = ILoadingStateInput & ILoadingStateEvent;
