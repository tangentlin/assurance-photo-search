import * as React from "react";
import { Gallery } from "./Gallery";
import { GalleryProps } from "./Gallery.types";
import { Story, Meta } from "@storybook/react";
import {generateMockImageList} from "../../utils/testData/imageTestDataGenerator";

export default {
  title: "components/Gallery",
  component: Gallery,
} as Meta;

const images30 = generateMockImageList(30);

const Template: Story<GalleryProps> = (args) => <Gallery {...args} />;

export const defaultStory = Template.bind({});
defaultStory.args = {
  images: images30,
};

