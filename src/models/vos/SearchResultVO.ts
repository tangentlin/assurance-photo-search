import {ImageVO} from "./ImageVO";
import {hydrate} from "../../utils/voUtils";

export class SearchResultVO {
  total: number = 0;
  images: ImageVO[] = [];
  constructor(src?: Partial<SearchResultVO>) {
    hydrate(this, src);
  }
}