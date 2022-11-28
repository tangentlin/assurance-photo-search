import {IStyleable} from "../../models/ui/StyleComponent";

export interface IShimmerInput extends IStyleable {
}

export interface IShimmerEvent {
}

export type ShimmerProps = IShimmerInput & IShimmerEvent;
