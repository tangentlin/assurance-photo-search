import * as React from "react";
import { Shimmer } from "./Shimmer";
import { ShimmerProps } from "./Shimmer.types";
import { Story, Meta } from "@storybook/react";
import styled from 'styled-components';

export default {
  title: "components/Shimmer",
  component: Shimmer,
} as Meta;

const Square = styled.div`
  width: 120px;
  height: 120px;
`;


const Template: Story<ShimmerProps> = (args) => <Shimmer {...args} />;

export const square = () => <Square><Shimmer /></Square>;

