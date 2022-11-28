import * as React from "react";
import { ErrorState } from "./ErrorState";
import { ErrorStateProps } from "./ErrorState.types";
import { Story, Meta } from "@storybook/react";

export default {
  title: "components/states/ErrorState",
  component: ErrorState,
} as Meta;

const Template: Story<ErrorStateProps> = (args) => <ErrorState {...args} />;

export const defaultStory = Template.bind({});
defaultStory.args = {};

