/**
 * Search parameters supported by pixelbay.com
 * @see https://pixabay.com/api/docs/#api_search_images
 */
import {MaxSearchResult} from "../../utils/Constants";

export interface IPixelBaySearchParameter {
  key: string;
  q: string;
  lang?: string;
  id?: string;
  image_type?: 'all' | 'photo' | 'illustration' | 'vector';
  orientation?: 'all' | 'horizontal' | 'vertical';
  category?: string;
  min_width?: number;
  min_height?: number;
  colors?: 'grayscale' | 'transparent' | 'red' | 'orange' | 'yellow' | 'green' | 'turquoise' | 'blue' | 'lilac' | 'pink' | 'white' | 'gray' | 'black' | 'brown';
  editors_choice?: boolean;
  safesearch?: boolean;
  order?: 'popular' | 'latest';
  page?: number;
  per_page?: number;
  callback?: string;
  pretty?: boolean;
}

export const defaultPixelBaySearchParameter: Readonly<Partial<IPixelBaySearchParameter>> = Object.freeze({
  image_type: 'photo',
  per_page: MaxSearchResult,
});