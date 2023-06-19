import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { PhotoApp } from './App.styled';
import { Button } from 'components/Button/Button';
import { GalleryList } from 'components/ImageGallery/ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = { images: [], loading: false };

  onSearch = values => {
    console.log(values);
  };

  handleLoadMore = () => {
    this.setState({ loading: true });
  };

  render() {
    const { images, loading } = this.state;

    return (
      <PhotoApp>
        <Searchbar onSubmit={this.onSearch} />
        <GalleryList images={images} />
        {images.length && !loading && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
        {loading && <Loader />}
      </PhotoApp>
    );
  }
}
