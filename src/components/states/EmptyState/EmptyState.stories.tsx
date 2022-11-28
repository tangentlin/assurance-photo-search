import * as React from "react";
import { EmptyState } from "./EmptyState";
import { EmptyStateProps } from "./EmptyState.types";
import { Story, Meta } from "@storybook/react";

export default {
  title: "components/states/EmptyState",
  component: EmptyState,
} as Meta;

const Template: Story<EmptyStateProps> = (args) => <EmptyState {...args} />;

export const defaultStory = Template.bind({});
defaultStory.args = {};

