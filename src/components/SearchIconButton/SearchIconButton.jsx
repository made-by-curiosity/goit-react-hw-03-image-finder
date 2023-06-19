import React from 'react';
import PropTypes from 'prop-types';
import { SearchBtn } from 'components/SearchIconButton/SearchIconButton.styled';

export const SearchIconButton = ({ children }) => {
  return (
    <SearchBtn type="submit" className="button">
      {children}
    </SearchBtn>
  );
};

SearchIconButton.propTypes = {
  children: PropTypes.node,
};
