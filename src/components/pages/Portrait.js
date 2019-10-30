import PropTypes from 'prop-types';
import React from 'react';
import Gallery from '../../Gallery.js';


class Portrait extends React.Component {
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

Portrait.propTypes = {
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

Portrait.defaultProps = {
  images: [
    {
      src: "https://live.staticflickr.com/65535/48906755768_a70de8839b_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906755768_a70de8839b.jpg",
      thumbnailWidth: 386,
      thumbnailHeight: 500,
      caption: "Makaela in Blue"
    },
    {
      src: "https://live.staticflickr.com/65535/48907281196_945cc49e50_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907281196_945cc49e50.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Marcelo Mancini"
    },
    {
      src: "https://live.staticflickr.com/65535/48906751053_e5ee157d77_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906751053_e5ee157d77.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Esteban"
    },
    {
      src: "https://live.staticflickr.com/65535/48907281751_c201d7fd19_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907281751_c201d7fd19.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Sarah"
    },
     {
      src: "https://live.staticflickr.com/65535/48907281596_44e570aff6_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907281596_44e570aff6.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Kendal"
    },
    {
      src: "https://live.staticflickr.com/65535/48907484697_0ce8d2e7eb_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907484697_0ce8d2e7eb.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Luz"
    },
    {
      src: "https://live.staticflickr.com/65535/48907484922_5672dc5bf8_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907484922_5672dc5bf8.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Valorie"
    },
    {
      src: "https://live.staticflickr.com/65535/48907484827_d1eacd5961_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907484827_d1eacd5961.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Jess"
    },
    {
      src: "https://live.staticflickr.com/65535/48907285946_b25bbf3244_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907285946_b25bbf3244.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Makaela"
    },
    {
      src: "https://live.staticflickr.com/65535/48907282721_1b77c2d7f3_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907282721_1b77c2d7f3.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Brendan"
    },
    {
      src: "https://live.staticflickr.com/65535/48907486652_e2f1353929_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907486652_e2f1353929.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Bushman in Botswana"
    },
    {
      src: "https://live.staticflickr.com/65535/48906753818_3697c22d3c_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906753818_3697c22d3c.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Bushman in Botswana"
    },
    {
      src: "https://live.staticflickr.com/65535/48907485782_7f13071cb8_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907485782_7f13071cb8.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Meerkat tracker"
    },
    {
      src: "https://live.staticflickr.com/65535/48907368146_8e298dc6ff_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907368146_8e298dc6ff.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Croc vs. Jason"
    },
    {
      src: "https://live.staticflickr.com/65535/48907308296_35c308024d_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907308296_35c308024d.jpg",
      thumbnailWidth: 333,
      thumbnailHeight: 500,
      caption: "Bodie"
    },
    {
      src: "https://live.staticflickr.com/65535/48907512697_4d69671325_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907512697_4d69671325.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Lauren"
    },
    {
      src: "https://live.staticflickr.com/65535/48949644161_7dd8816bcb_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949644161_7dd8816bcb.jpg",
      thumbnailWidth: 386,
      thumbnailHeight: 500,
      caption: "Jeremy"
    },
    {
      src: "https://live.staticflickr.com/65535/48907573137_0d248c2830_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907573137_0d248c2830.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Christian"
    },
    {
      src: "https://live.staticflickr.com/65535/48907487367_d077ff36ca_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907487367_d077ff36ca.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Ben"
    },
    {
      src: "https://live.staticflickr.com/65535/48949787877_cb309f9f76_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949787877_cb309f9f76.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Jess"
    },
    {
      src: "https://live.staticflickr.com/65535/48949590731_3af3fcfcc8_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949590731_3af3fcfcc8.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Megan"
    },
    {
      src: "https://live.staticflickr.com/65535/48949592696_f7cc5f0177_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949592696_f7cc5f0177.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Ana"
    },
    {
      src: "https://live.staticflickr.com/65535/48949811872_a61ba19105_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949811872_a61ba19105.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Luz"
    },
    {
      src: "https://live.staticflickr.com/65535/48949828467_345831b42f_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949828467_345831b42f.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Makaela"
    },
    {
      src: "https://live.staticflickr.com/65535/48949835787_738b7bfef0_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949835787_738b7bfef0.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Jordan"
    }
  ]
};

export default Portrait;

