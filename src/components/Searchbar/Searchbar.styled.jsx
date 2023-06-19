import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchContainer = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const QueryInput = styled(Field)`
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;

  display: inline-block;

  font: inherit;
  font-size: 20px;

  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 22px;
  height: 22px;
`;
