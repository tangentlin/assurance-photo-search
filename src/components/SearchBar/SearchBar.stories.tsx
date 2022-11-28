import * as React from "react";
import { SearchBar } from "./SearchBar";
import { SearchBarProps } from "./SearchBar.types";
import { Story, Meta } from "@storybook/react";

export default {
  title: "components/SearchBar",
  component: SearchBar,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const defaultStory = Template.bind({});
defaultStory.args = {};

