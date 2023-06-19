import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ bigImgUrl }) => {
  return createPortal(
    <Backdrop class="overlay">
      <ModalWindow class="modal">
        <img src={bigImgUrl} alt="" />
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  bigImgUrl: PropTypes.string.isRequired,
};
