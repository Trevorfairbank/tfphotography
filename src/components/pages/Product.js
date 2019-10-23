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
      caption: "Isolated Virgil James Leather Milk"
    },
    {
      src: "https://live.staticflickr.com/65535/48906761338_28d2c44235_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906761338_28d2c44235.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Isolated Pruna by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907292161_2e569c85e6_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907292161_2e569c85e6.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 312,
      caption: "Isolated Naturale by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48906761968_74fcc545b7_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906761968_74fcc545b7.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 313,
      caption: "Isolated Naturale by Virgil James"
    },
     {
      src: "https://live.staticflickr.com/65535/48907291861_f9b3055d1c_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907291861_f9b3055d1c.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Isolated Tidepools by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907291266_ae5cb5dba3_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907291266_ae5cb5dba3.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "End table for Mid-Century Modern"
    },
    {
      src: "https://live.staticflickr.com/65535/48906761678_e51e667d7b_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906761678_e51e667d7b.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Pruna Swift by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907494097_325701dfce_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907494097_325701dfce.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Coffee Table for Mid-Century Modern"
    },
    {
      src: "https://live.staticflickr.com/65535/48906762313_492bec1fc1_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906762313_492bec1fc1.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 400,
      caption: "Reykjavik Crossbody by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48906762603_25ae8b2cf3_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906762603_25ae8b2cf3.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 400,
      caption: "Buenos Aires Crossbody by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907495537_5af59643b9_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907495537_5af59643b9.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 400,
      caption: "Santa Fe Crossbody by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907493477_053b12a54f_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907493477_053b12a54f.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Isolated Crystal for The Rock Collection"
    },
    {
      src: "https://live.staticflickr.com/65535/48906760813_f63247446c_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906760813_f63247446c.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Liveli Sleep Peacefulli capsules"
    },
    {
      src: "https://live.staticflickr.com/65535/48907291571_36e6502fdb_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907291571_36e6502fdb.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "Reykjavik Clutch by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48907290971_e73a2d1501_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907290971_e73a2d1501.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Restore Dayli by Liveli"
    },
    {
      src: "https://live.staticflickr.com/65535/48906764233_fccfd4cbfe_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906764233_fccfd4cbfe.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Vegas Nero by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48906783743_0ac1d576da_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906783743_0ac1d576da.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Pillars by Virgil James"
    },
    {
      src: "https://live.staticflickr.com/65535/48906762113_1a044d2aa7_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906762113_1a044d2aa7.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Virgil James - Women"
    },
    {
      src: "https://live.staticflickr.com/65535/48907293161_3f21470077_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907293161_3f21470077.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 400,
      caption: "Nero Script by Virgil James"
    }
  ]
};

export default Product;

