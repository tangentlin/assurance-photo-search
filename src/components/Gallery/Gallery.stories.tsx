import * as React from "react";
import { Gallery } from "./Gallery";
import { GalleryProps } from "./Gallery.types";
import { Story, Meta } from "@storybook/react";
import {generateMockImageList} from "../../utils/testData/imageTestDataGenerator";
import styled from "styled-components";

export default {
  title: "components/Gallery",
  component: Gallery,
} as Meta;

const StyledGallery = styled(Gallery)`
  width: 100%;
  height: calc(100vh - 2rem);
`;

const images30 = generateMockImageList(30);

const Template: Story<GalleryProps> = (args) => <StyledGallery {...args} />;

export const defaultStory = Template.bind({});
defaultStory.args = {
  images: images30,
};

