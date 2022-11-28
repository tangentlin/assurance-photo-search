import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {useImageSearch} from "./hooks/useImageSearch";
import {SearchResult} from "./components/SearchResult/SearchResult";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const Input = styled(SearchBar)`
  flex-grow: 0;
  flex-shrink: 0;
`

const Result = styled(SearchResult)`
  flex-grow: 1;
  flex-shrink: 1;
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
