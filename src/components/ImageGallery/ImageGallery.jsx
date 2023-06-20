import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, setActivePhoto, toggleModal }) => {
  return (
    <GalleryList>
      {images.map((image, index) => {
        return (
          <ImageGalleryItem
            key={image.id}
            smallImgUrl={image.webformatURL}
            tags={image.tags}
            onClick={() => {
              setActivePhoto(index);
              toggleModal();
            }}
          />
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  setActivePhoto: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
