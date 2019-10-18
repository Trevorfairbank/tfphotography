import PropTypes from 'prop-types';
import React from 'react';
import Gallery from '../../Gallery.js';


class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images
    };
  }

  render() {
    return (
      <div style={{
        display: "block",
        minHeight: "1px",
        width: "100%",
        border: "0px solid #ddd",
        overflow: "auto",
        padding: "20px"
      }}>
        <Gallery
          images={this.state.images}
          enableImageSelection={false} />
      </div>
    );
  }
}

Product.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      isSelected: PropTypes.bool
    })
  ).isRequired
};

Product.defaultProps = {
  images: [
    {
      src: "https://live.staticflickr.com/65535/48907496567_24a962751c_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907496567_24a962751c.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Virgil James Leather Milk"
    },
    {
      src: "https://live.staticflickr.com/65535/48906760813_f63247446c_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906760813_f63247446c.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Liveli Sleep Peacefulli capsules"

    },
    {
      src: "https://live.staticflickr.com/65535/48906762113_1a044d2aa7_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906762113_1a044d2aa7.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Virgil James - Women"
    },
    {
      src: "https://live.staticflickr.com/65535/48906764233_fccfd4cbfe_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906764233_fccfd4cbfe.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Vegas Nero by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48906761678_e51e667d7b_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906761678_e51e667d7b.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Pruna Swift by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48906783743_0ac1d576da_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906783743_0ac1d576da.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Pillars by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907290971_e73a2d1501_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907290971_e73a2d1501.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Restore Dayli by Liveli"
    },
    {
      src: "https://live.staticflickr.com/65535/48907291266_ae5cb5dba3_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907291266_ae5cb5dba3.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "End table for Mid-Century Modern"
    },
    {
      src: "https://live.staticflickr.com/65535/48907484827_d1eacd5961_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907291571_36e6502fdb.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "Reykjavik Clutch by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907494097_325701dfce_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907494097_325701dfce.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Coffee Table for Mid-Century Modern"
    },
    {
      src: "https://live.staticflickr.com/65535/48907293161_3f21470077_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907293161_3f21470077.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 400,
      caption: "Nero Script by Virgil James"
    },

    {
      src: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa_b.jpg",
      thumbnail: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Lightning over Lake Tahoe"
    },
    {
      src: "https://live.staticflickr.com/65535/48907293466_91bb2dd937_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907293466_91bb2dd937.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Black Widow by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907551902_08927121f4_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907551902_08927121f4.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Territorial Male Leopard"
    }
  ]
};

export default Product;

