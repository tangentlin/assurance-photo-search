import {IStyleable} from "../../../models/ui/StyleComponent";

export interface IEmptyStateInput extends IStyleable {
}

export interface IEmptyStateEvent {
}

export type EmptyStateProps = IEmptyStateInput & IEmptyStateEvent;
