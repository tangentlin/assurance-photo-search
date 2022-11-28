import * as React from "react";
import { SearchResult } from "./SearchResult";
import { SearchResultProps } from "./SearchResult.types";
import { Story, Meta } from "@storybook/react";
import {SearchResultVO} from "../../models/vos/SearchResultVO";
import {generateMockImageList} from "../../utils/testData/imageTestDataGenerator";
import styled from "styled-components";

export default {
  title: "components/SearchResult",
  component: SearchResult,
} as Meta;

const StyledSearchResult = styled(SearchResult)`
  width: 100%;
  height: calc(100vh - 2rem);
`;

const Template: Story<SearchResultProps> = (args) => <StyledSearchResult {...args} />;

const searchResult = new SearchResultVO({
  total: 500,
  images: generateMockImageList(30),
});

const zeroResult = new SearchResultVO({
  total: 0,
  images: [],
});

export const normal = Template.bind({});
normal.args = {
  data: searchResult,
};

export const zeroState = Template.bind({});
zeroState.args = {
  data: zeroResult,
};

export const loadingState = Template.bind({});
loadingState.args = {
  isLoading: true,
};

export const errorState = Template.bind({});
errorState.args = {
  hasError: true,
};

export const initialState = Template.bind({});
initialState.args = {
};