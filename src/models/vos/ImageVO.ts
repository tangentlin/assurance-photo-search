import {hydrate} from "../../utils/voUtils";

export interface IImage {
  id: string;
  url: string;
  thumbnailUrl: string;
}

export class ImageVO implements IImage {
  id: string = '';
  thumbnailUrl: string = '';
  url: string = '';

  constructor(src?: Partial<ImageVO>) {
    hydrate(this, src);
  }

}