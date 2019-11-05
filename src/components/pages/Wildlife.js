import PropTypes from 'prop-types';
import React from 'react';
import Gallery from '../../Gallery.js';
import {Jumbotron, Container} from 'reactstrap';


class Wildlife extends React.Component {
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
          <h1 className="text-center">WILDLIFE</h1>
          <p className="text-center">Focus on their eyes</p>
        </Container>
      </Jumbotron>
        <Gallery
          images={this.state.images}
          enableImageSelection={false} />
      </div>
    );
  }
}

Wildlife.propTypes = {
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

Wildlife.defaultProps = {
  images: [
    {
      src: "https://live.staticflickr.com/65535/48905979066_d8c1f73c30_k.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48905979066_f7fe89d7ab_z.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "A Young Male Lion at Madikwe Camp In South Africa."
    },
    {
      src: "https://live.staticflickr.com/65535/48906193467_d66e0c6a6d_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906193467_d66e0c6a6d.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Southern yellow-billed Hornbill"
    },
    {
      src: "https://live.staticflickr.com/65535/48906188602_2864a6ee49_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906188602_2864a6ee49_b.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Sylvester the Cheetah"
    },
    {
      src: "https://live.staticflickr.com/65535/48907367201_ee6751e428_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907367201_ee6751e428.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      caption: "Howler Monkey"
    },
    {
      src: "https://live.staticflickr.com/65535/48907528807_4b0dba2463_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907528807_4b0dba2463.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Andean Bear"
    },
    {
      src: "https://live.staticflickr.com/65535/48905459148_001061d6b4_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48905459148_001061d6b4.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Elephants charging"
    },
    {
      src: "https://live.staticflickr.com/65535/48907551902_08927121f4_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907551902_08927121f4.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Territorial Male Leopard"
    },
    {
      src: "https://live.staticflickr.com/65535/48907300051_484c27f888_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907300051_484c27f888.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Cheetah Pride"
    },
    {
      src: "https://live.staticflickr.com/65535/48907298836_033458591b_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48907298836_033458591b.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Meerkat Profile"
    },
    {
      src: "https://live.staticflickr.com/65535/48906818268_f53ab9231b_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906818268_f53ab9231b.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Young Gharial"
    },
    {
      src: "https://live.staticflickr.com/65535/48906823668_68132b074f_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906823668_68132b074f.jpg",
      thumbnailWidth: 333,
      thumbnailHeight: 500,
      caption: "Meerkat Lovin'"
    },
    {
      src: "https://live.staticflickr.com/65535/48905460003_c3f162c11b_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48905460003_c3f162c11b.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Red eyed bulbul"
    },
    {
      src: "https://live.staticflickr.com/65535/48906185117_76d553db1e_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906185117_76d553db1e.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Hawaiian Gecko"
    },
    {
      src: "https://live.staticflickr.com/65535/48905985581_308b9cb918_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48905985581_308b9cb918.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Elephant Bull and son at Chobe River"
    },
    {
      src: "https://live.staticflickr.com/65535/48905989696_4e7ca6abfb_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48905989696_4e7ca6abfb.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Hyena grooming cub"
    },
    {
      src: "https://live.staticflickr.com/65535/48905470633_793b0440c8_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48905470633_793b0440c8.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Waterbuck"
    },
    {
      src: "https://live.staticflickr.com/65535/48906193007_440381c9af_b.jpg",
      thumbnail: "https://live.staticflickr.com/65535/48906193007_440381c9af.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 333,
      caption: "Lilac Breasted Roller"
    }
  ]
};

export default Wildlife;
