import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            smallImgUrl={images.webformatURL}
            bigImgUrl={images.largeImageURL}
          />
        );
      })}
    </GalleryList>
  );
};
