import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  QueryInput,
  SearchContainer,
  SearchHeader,
  SearchIcon,
} from './Searchbar.styled';
import { SearchIconButton } from 'components/SearchIconButton/SearchIconButton';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchHeader className="searchbar">
      <Formik
        initialValues={{ searchQuery: '' }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        <SearchContainer>
          <SearchIconButton>
            <SearchIcon />
          </SearchIconButton>

          <QueryInput
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchContainer>
      </Formik>
    </SearchHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
