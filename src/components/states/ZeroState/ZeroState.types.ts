import {IStyleable} from "../../../models/ui/StyleComponent";

export interface IZeroStateInput extends IStyleable {
}

export interface IZeroStateEvent {
}

export type ZeroStateProps = IZeroStateInput & IZeroStateEvent;
