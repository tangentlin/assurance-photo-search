import {ImageVO} from "../../models/vos/ImageVO";
import {IStyleable} from "../../models/ui/StyleComponent";

export enum ListMode {
  Grid = 'grid',
  Strip = 'strip',
}

export interface IImageListInput extends IStyleable {
  images: ReadonlyArray<ImageVO>;
  mode: ListMode;
  selected?: ImageVO;
}

export interface IImageListEvent {
  onChange?: (image: ImageVO) => void;
}

export type ImageListProps = IImageListInput & IImageListEvent;
