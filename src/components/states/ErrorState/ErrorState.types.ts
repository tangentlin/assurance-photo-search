import {IStyleable} from "../../../models/ui/StyleComponent";

export interface IErrorStateInput extends IStyleable {
}

export interface IErrorStateEvent {
}

export type ErrorStateProps = IErrorStateInput & IErrorStateEvent;
