import {defaultPixelBaySearchParameter, IPixelBaySearchParameter} from "../models/pixelBay/pixelBaySearchParameter";
import {PixelBayApiKey} from "./Constants";
import {ImageVO} from "../models/vos/ImageVO";
import {IPixelBaySearchHitItem, IPixelBaySearchResultDto} from "../models/pixelBay/IPixelBaySearchResultDto";
import axios from "axios";
import {SearchResultVO} from "../models/vos/SearchResultVO";

export function buildSearchParameter(searchPhrase: string): IPixelBaySearchParameter {
  return Object.assign(
    {},
    defaultPixelBaySearchParameter,
    {
      key: PixelBayApiKey,
      q: searchPhrase,
    }
  );
}

export function parseHit(src: IPixelBaySearchHitItem): ImageVO {
  return new ImageVO({
    id: src.id.toString(),
    thumbnailUrl: src.previewURL,
    url: src.webformatURL,
  });
}

export async function searchPhoto(searchPhrase: string | undefined): Promise<SearchResultVO | undefined> {
  if (searchPhrase == null || searchPhrase.trim() === '') {
    return;
  }

  const response = await axios.get<IPixelBaySearchResultDto>(`https://pixabay.com/api/`, {
    params: buildSearchParameter(searchPhrase)
  });
  const images = (response.data.hits ?? []).map(parseHit);
  return new SearchResultVO({
    total: response.data.total,
    images,
  });
}