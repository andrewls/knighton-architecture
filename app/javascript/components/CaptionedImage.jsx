import React from 'react';
import PropTypes from 'prop-types';
import ReactRenderer from '../utilities/react-renderer';
import PhotoResolver from 'components/PhotoResolver';

class CaptionedImage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this._hoverIn = this._toggleHover.bind(this, true);
    this._hoverOut = this._toggleHover.bind(this, false);
  }

  _toggleHover(active) {
    this.setState({ active })
  }

  render() {
    return (
      <div className='captioned-image-wrapper' onMouseEnter={this._hoverIn} onMouseLeave={this._hoverOut}>
        <img src={PhotoResolver.resolve(this.props.image)} />
        <div className={this.state.active ? 'caption' : 'caption collapsed'}>
          <span>{this.props.left}</span>
          <span>{this.props.right}</span>
        </div>
      </div>
    );
  }
}

ReactRenderer.establishClassMapping(CaptionedImage, 'captioned-image');

CaptionedImage.propTypes = {
  image: PropTypes.string.isRequired,
  left: PropTypes.string,
  right: PropTypes.string
}

export default CaptionedImage;
