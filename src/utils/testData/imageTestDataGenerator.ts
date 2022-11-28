import {ImageVO} from "../../models/vos/ImageVO";

interface IMockImage {
  lowRes?: string;
  highRes: string;
}

export const mockImages: IMockImage[] = [
  {
    lowRes: 'http://wagamatic.com/assets/images/icon-product.png',
    highRes: 'http://wagamatic.com/assets/images/icon-product@3x.png',
  },
  {
    lowRes: 'http://wagamatic.com/assets/images/icon-media-kit.png',
    highRes: 'http://wagamatic.com/assets/images/icon-media-kit@3x.png',
  },
  {
    lowRes: 'http://wagamatic.com/assets/images/icon-contact.png',
    highRes: 'http://wagamatic.com/assets/images/icon-contact@3x.png',
  }
];

let idSeed = 0;
let imageIndex = 0;
export function generateMockImage(): ImageVO {
  const mockImage = mockImages[imageIndex];
  idSeed++;
  imageIndex++;
  if (imageIndex >= mockImages.length) {
    imageIndex = 0;
  }

  return new ImageVO({
    id: idSeed.toString(),
    url: mockImage.highRes,
    thumbnailUrl: mockImage.lowRes ?? mockImage.highRes,
  });
}

export function generateMockImageList(count: number): ImageVO[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateMockImage());
  }
  return result;
}