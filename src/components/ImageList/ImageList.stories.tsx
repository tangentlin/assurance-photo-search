import * as React from "react";
import {ImageList} from "./ImageList";
import {ImageListProps, ListMode} from "./ImageList.types";
import {Meta, Story} from "@storybook/react";
import {generateMockImageList} from "../../utils/testData/imageTestDataGenerator";

export default {
  title: "components/ImageList",
  component: ImageList,
} as Meta;

const images30 = generateMockImageList(30);

const Template: Story<ImageListProps> = (args) => <ImageList {...args} />;

export const grid = Template.bind({});
grid.args = {
  images: images30,
  mode: ListMode.Grid,
};

export const strip = Template.bind({});
strip.args = {
  images: images30,
  mode: ListMode.Strip,
};

