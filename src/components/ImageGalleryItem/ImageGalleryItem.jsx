import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { GalleryItem, GalleryPhoto } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImgUrl, bigImgUrl }) => {
  return (
    <GalleryItem>
      <GalleryPhoto src={smallImgUrl} alt="" />
      <Modal bigImgUrl={bigImgUrl} />
    </GalleryItem>
  );
};
