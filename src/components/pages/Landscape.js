import PropTypes from 'prop-types';
import React from 'react';
import Gallery from '../../Gallery.js';
import {Jumbotron, Container} from 'reactstrap';


class Landscape extends React.Component {
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
        <Jumbotron className="transparent" fluid>
          <Container fluid>
            <h1 className="text-center">LANDSCAPE</h1>
            <p className="text-center">Scenic views around the world</p>
          </Container>
        </Jumbotron>
        <Gallery
          images={this.state.images}
          enableImageSelection={false} />
      </div>
    );
  }
}

Landscape.propTypes = {
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

Landscape.defaultProps = {
  images: [
    {
      src: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa_b.jpg",
      thumbnail: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Lightning over Lake Tahoe"
    },
    {
      src: "https://live.staticflickr.com/8883/29348288470_f1ee826166_b.jpg",
      thumbnail: "https://live.staticflickr.com/8883/29348288470_f1ee826166_n.jpg",
      thumbnailWidth: 333,
      thumbnailHeight: 500,
      caption: "Eiffel Tower at Night"
    },
    {
      src: "https://live.staticflickr.com/8167/29557621391_42eff11261_h.jpg",
      thumbnail: "https://live.staticflickr.com/8167/29557621391_b3b210cf0c.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Big Island of Hawaii"
    },
    {
      src: "https://live.staticflickr.com/8290/29348148790_b617bfe3dd_b.jpg",
      thumbnail: "https://live.staticflickr.com/8290/29348148790_b617bfe3dd.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Lake Tahoe"
    },
    {
      src: "https://live.staticflickr.com/65535/48907588922_91aa8f9a31_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907588922_91aa8f9a31.jpg",
      thumbnailWidth: 334,
      thumbnailHeight: 500,
      caption: "Sequoia and Kings Canyon National Parks"
    },
    {
      src: "https://live.staticflickr.com/65535/48906850513_a6e6cc7e3f_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906850513_a6e6cc7e3f.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "A traveler Looking out at Peggy's Cove Lighthouse"
    },
    {
      src: "https://live.staticflickr.com/65535/48907504272_9d030e7ab0_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907504272_9d030e7ab0.jpg",
      thumbnailWidth: 333,
      thumbnailHeight: 500,
      caption: "Lisbon, Portugal"
    },
    {
      src: "https://live.staticflickr.com/65535/48906772633_a9e5017a8a_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906772633_a9e5017a8a.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Vintage Club Reflections"
    },
    {
      src: "https://live.staticflickr.com/65535/48907589422_5973455036_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907589422_5973455036.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Kings Canyon National Park"
    },
    {
      src: "https://live.staticflickr.com/65535/48907304886_d5cff4452a_h.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907304886_d5cff4452a_h.jpg",
      thumbnailWidth: 800,
      thumbnailHeight: 286,
      caption: "Marataba Panorama"
    },
    {
      src: "https://live.staticflickr.com/65535/48907378146_9c92c1482b_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907378146_9c92c1482b.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Garrapata State Park"
    },
    {
      src: "https://live.staticflickr.com/65535/48949310533_0cbe4ef9e5_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949310533_0cbe4ef9e5.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Sea Ranch, California"
    },
    {
      src: "https://live.staticflickr.com/65535/48907582467_16022c3a33_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907582467_16022c3a33.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Bird Rock, San Diego Sunset"
    },
    {
      src: "https://live.staticflickr.com/65535/48949859471_577caffd4a_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48949859471_577caffd4a.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Sausalito, California"
    }
  ]
};

export default Landscape;
