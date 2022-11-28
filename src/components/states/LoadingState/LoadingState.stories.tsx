import * as React from "react";
import { LoadingState } from "./LoadingState";
import { LoadingStateProps } from "./LoadingState.types";
import { Story, Meta } from "@storybook/react";

export default {
  title: "components/states/LoadingState",
  component: LoadingState,
} as Meta;

const Template: Story<LoadingStateProps> = (args) => <LoadingState {...args} />;

export const defaultStory = Template.bind({});
defaultStory.args = {};

