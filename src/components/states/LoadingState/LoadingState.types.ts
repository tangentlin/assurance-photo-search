import {IStyleable} from "../../../models/ui/StyleComponent";

export interface ILoadingStateInput extends IStyleable {
}

export interface ILoadingStateEvent {
}

export type LoadingStateProps = ILoadingStateInput & ILoadingStateEvent;
