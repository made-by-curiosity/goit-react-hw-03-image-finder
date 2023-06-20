import React from 'react';
import PropTypes from 'prop-types';

import { GalleryItem, GalleryPhoto } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImgUrl, tags, onClick }) => {
  return (
    <GalleryItem onClick={onClick}>
      <GalleryPhoto src={smallImgUrl} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImgUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
