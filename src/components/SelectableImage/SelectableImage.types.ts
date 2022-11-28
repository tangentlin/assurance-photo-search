import {ImageVO} from "../../models/vos/ImageVO";
import {IStyleable} from "../../models/ui/StyleComponent";

export interface ISelectableImageInput extends IStyleable {
  image: ImageVO;
  selected: boolean;
}

export interface ISelectableImageEvent {
  onChange?: () => void;
}

export type SelectableImageProps = ISelectableImageInput & ISelectableImageEvent;
