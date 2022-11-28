import {IStyleable} from "../../models/ui/StyleComponent";

export interface IImageInput extends IStyleable {
  imageUrl: string;

  /**
   * Whether the image should be rendered to be contained in the container
   * or the image should cover the container
   *
   * @default false
   */
  contain?: boolean;
}

export interface IImageEvent {
}

export type ImageProps = IImageInput & IImageEvent;
