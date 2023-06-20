import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { PhotoApp } from './App.styled';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { getPhotos } from '../../getPhotos';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: '',
    page: 1,
    activePhotoIndex: 0,
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      const response = await getPhotos(searchQuery, page);

      this.setState({ images: response.data.hits, loading: false });
    }

    if (prevState.page !== page && page !== 1) {
      const response = await getPhotos(searchQuery, page);

      this.setState(({ images }) => {
        return {
          images: [...images, ...response.data.hits],
          loading: false,
        };
      });
    }
  }

  onSearch = ({ searchQuery }) => {
    this.setState({ searchQuery, page: 1, loading: true });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { loading: true, page: prevState.page + 1 };
    });
  };

  setActivePhoto = index => {
    this.setState({ activePhotoIndex: index });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, loading, activePhotoIndex } = this.state;

    return (
      <PhotoApp>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery
          images={images}
          setActivePhoto={this.setActivePhoto}
          toggleModal={this.toggleModal}
        />
        {images.length > 0 && !loading && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
        {loading && <Loader />}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={images[activePhotoIndex].largeImageURL}
              alt={images[activePhotoIndex].tags}
            />
          </Modal>
        )}
      </PhotoApp>
    );
  }
}
