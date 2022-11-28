import {ImageVO} from "../../models/vos/ImageVO";
import {IStyleable} from "../../models/ui/StyleComponent";

export interface IGalleryInput extends IStyleable {
  images: ReadonlyArray<ImageVO>;
}

export interface IGalleryEvent {
}

export type GalleryProps = IGalleryInput & IGalleryEvent;
