import * as React from "react";
import { SelectableImage } from "./SelectableImage";
import { SelectableImageProps } from "./SelectableImage.types";
import { Story, Meta } from "@storybook/react";
import styled from 'styled-components';
import {generateMockImage} from "../../utils/testData/imageTestDataGenerator";

export default {
  title: "components/SelectableImage",
  component: SelectableImage,
} as Meta;

const Square = styled.div`
  width: 200px;
  height: 200px;
`;

const imageData = generateMockImage();
const Template: Story<SelectableImageProps> = (args) => <Square><SelectableImage {...args} /></Square>;

export const normal = Template.bind({});
normal.args = {
  image: imageData,
  selected: false,
}

export const selected = Template.bind({});
selected.args = {
  image: imageData,
  selected: true,
}