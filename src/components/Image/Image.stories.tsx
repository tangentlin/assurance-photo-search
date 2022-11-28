import * as React from "react";
import { Image } from "./Image";
import { Meta } from "@storybook/react";
import styled from 'styled-components';
import {mockImages} from "../../utils/testData/imageTestDataGenerator";

export default {
  title: "components/Image",
  component: Image,
} as Meta;

const Square = styled.div`
  width: 200px;
  height: 200px;
`;

export const defaultStory = () => (<Square>
  <Image imageUrl={mockImages[0].highRes} />
</Square>);

