import * as React from "react";
import { ZeroState } from "./ZeroState";
import { ZeroStateProps } from "./ZeroState.types";
import { Story, Meta } from "@storybook/react";

export default {
  title: "components/states/ZeroState",
  component: ZeroState,
} as Meta;

const Template: Story<ZeroStateProps> = (args) => <ZeroState {...args} />;

export const defaultStory = Template.bind({});
defaultStory.args = {};

