import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {useImageSearch} from "./hooks/useImageSearch";
import {SearchResult} from "./components/SearchResult/SearchResult";
import {Grey} from "./styles/Colors";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow: hidden;
`;

const Input = styled(SearchBar)`
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0.5rem;
  background-color: ${Grey['300']};
`

const Result = styled(SearchResult)`
  flex-grow: 1;
  flex-shrink: 1;
  max-height: calc(100vh - 3.5rem);
`


function App() {
  const [searchPhrase, setSearchPhrase] = useState<string | undefined>();
  const { searchResult, isLoading, hasError } = useImageSearch(searchPhrase);

  const inputOnSubmit = useCallback(setSearchPhrase, [setSearchPhrase])

  return (
    <Container>
      <Input onSubmit={inputOnSubmit} />
      <Result
        hasError={hasError}
        isLoading={isLoading}
        data={searchResult} />
    </Container>
  );
}

export default App;
