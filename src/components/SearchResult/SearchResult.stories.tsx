import * as React from "react";
import { SearchResult } from "./SearchResult";
import { SearchResultProps } from "./SearchResult.types";
import { Story, Meta } from "@storybook/react";

export default {
  title: "components/SearchResult",
  component: SearchResult,
} as Meta;

const Template: Story<SearchResultProps> = (args) => <SearchResult {...args} />;

export const defaultStory = Template.bind({});
defaultStory.args = {};

