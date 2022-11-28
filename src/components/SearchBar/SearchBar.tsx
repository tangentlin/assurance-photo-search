import * as React from "react";
import {FunctionComponent, SyntheticEvent, useCallback} from "react";
import { SearchBarProps } from "./SearchBar.types";
import styled from "styled-components";
import searchIcon from '../../images/search.svg';
import {Grey, PrimaryColor} from "../../styles/Colors";
import {useDebouncedCallback} from "use-debounce";

const SearchInput = styled.input`
  width: 100%;
  height: 2.5rem;
  
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position-x: 0.5rem;
  background-position-y: center;
  background-size: 1.5rem;
  background-color: ${Grey['100']};

  box-sizing: border-box;
  padding-left: 2.5rem;
  
  border: 2px transparent solid;
  
  &:focus {
    border: 2px solid ${PrimaryColor.light};
  }
`;

const DEFAULT_AUTO_SUBMIT_DELAY = 1500;
const DEFAULT_PLACEHOLDER = 'Search';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
 */
const ENTER_KEY = 'Enter';


export const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
  const { autoSubmitDelay, onSubmit, placeholder } = props;

  const inputOnChange = useDebouncedCallback((value: string) => {
    onSubmit?.(value);
  }, autoSubmitDelay ?? DEFAULT_AUTO_SUBMIT_DELAY);

  const inputOnKeyUp = useCallback((e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    if (e.nativeEvent.key === ENTER_KEY) {
      inputOnChange.flush();
    }
  }, [inputOnChange]);

  return (
    <div className={props.className}>
      <SearchInput
        placeholder={placeholder ?? DEFAULT_PLACEHOLDER}
        onKeyUp={inputOnKeyUp}
        onChange={(e) => inputOnChange(e.target.value)} />
    </div>
  );
};
