import React from 'react';
import PropTypes from 'prop-types';
import ReactRenderer from 'utilities/react-renderer';
import ImageGallery from 'react-image-gallery';
import PhotoResolver from 'components/PhotoResolver';
import _ from 'lodash';

class Gallery extends React.PureComponent {
  _photos() {
    const photos = _.values(
      _.pick(
        PhotoResolver.resolve(this.props.directory),
        ...this.props.images
      )
    );
    console.log("Photos", photos);
    return photos.map(p => ({ original: p }));
  }

  render() {
    return (
      <ImageGallery
        items={this._photos()}
        showNav={false}
        showPlayButton={false}
        autoPlay={true}
        showFullscreenButton={false}
        showBullets={true}
        showThumbnails={false}
        slideInterval={7000}
      />
    );
  }
}

ReactRenderer.establishClassMapping(Gallery, 'image-gallery')

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  directory: PropTypes.string.isRequired
};

export default Gallery;
