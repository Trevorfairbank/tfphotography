import PropTypes from 'prop-types';
import React from 'react';
import Gallery from '../../Gallery.js';
import {Jumbotron, Container} from 'reactstrap';


class Food extends React.Component {
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
          <h1 className="text-center">FOOD</h1>
          <p className="text-center">Juicier the Better</p>
        </Container>
      </Jumbotron>
                <Gallery
                    images={this.state.images}
                    enableImageSelection={false} />
            </div>
        );
    }
}

Food.propTypes = {
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

Food.defaultProps = {
    images: [
        {
            src: "https://live.staticflickr.com/65535/48906744873_a6603bb723_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906744873_a6603bb723.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Nigiri Sushi being served at Hidden Fish"
        },
        {
          src: "https://live.staticflickr.com/65535/48906745323_fef9103c98_b.jpg",
          thumbnail: "https://live.staticflickr.com/65535/48906745323_fef9103c98.jpg",
          thumbnailWidth: 500,
          thumbnailHeight: 333,
          caption: "Grilled Salmon Salad at Fish Shop PB"
      },
        {
            src: "https://live.staticflickr.com/65535/48906744998_6fafd02b0d_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906744998_6fafd02b0d.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Cutting Tuna - Hidden Fish"
        },
        {
            src: "https://live.staticflickr.com/65535/48907478647_f414a55ef3_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907478647_f414a55ef3.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Grilled Salmon Salad at Fish Shop PB"
        },
        {
          src: "https://live.staticflickr.com/65535/48907478277_8cb7d86e05_b.jpg",
          thumbnail: "https://live.staticflickr.com/65535/48907478277_8cb7d86e05.jpg",
          thumbnailWidth: 500,
          thumbnailHeight: 333,
          caption: "Hamachi Nigiri - Hidden Fish"
      },
        {
            src: "https://live.staticflickr.com/65535/48907275916_e36b09a911_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907275916_e36b09a911.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Poké"
        }
    ]
};

export default Food;

