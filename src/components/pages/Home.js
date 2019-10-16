import PropTypes from 'prop-types';
import React from 'react';
import Gallery from '../../Gallery.js';


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };
    }

    render () {
        return (
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "0px solid #ddd",
                    overflow: "auto",
                    padding: "20px"}}>
                <Gallery
            images={this.state.images}
            enableImageSelection={false}/>
                </div>
        );
    }
}

Home.propTypes = {
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

Home.defaultProps = {
    images: [
        {
            src: "https://live.staticflickr.com/65535/48905979066_d8c1f73c30_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48905979066_f7fe89d7ab_z.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "A Young Male Lion at Madikwe Camp In South Africa."
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
            src: "https://live.staticflickr.com/65535/48906751053_e5ee157d77_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906751053_e5ee157d77.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 500,
            caption: "Esteban"
        },
        {
            src: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa_b.jpg",
            thumbnail: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Lightning over Lake Tahoe"
        },
        {
            src: "https://live.staticflickr.com/65535/48906188602_2864a6ee49_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906188602_2864a6ee49_b.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Sylvester the Cheetah"
        },
        {
            src: "https://live.staticflickr.com/65535/48907528807_4b0dba2463_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907528807_4b0dba2463.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Andean Bear"
        },
        {
          src: "https://live.staticflickr.com/65535/48905979066_d8c1f73c30_k.jpg",
          thumbnail: "https://live.staticflickr.com/65535/48905979066_f7fe89d7ab_z.jpg",
          thumbnailWidth: 500,
          thumbnailHeight: 333,
          caption: "A Young Male Lion at Madikwe Camp In South Africa."
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
          src: "https://live.staticflickr.com/65535/48906751053_e5ee157d77_b.jpg",
          thumbnail: "https://live.staticflickr.com/65535/48906751053_e5ee157d77.jpg",
          thumbnailWidth: 400,
          thumbnailHeight: 500,
          caption: "Esteban"
      },
      {
          src: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa_b.jpg",
          thumbnail: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa.jpg",
          thumbnailWidth: 500,
          thumbnailHeight: 333,
          caption: "Lightning over Lake Tahoe"
      },
      {
          src: "https://live.staticflickr.com/65535/48906188602_2864a6ee49_b.jpg",
          thumbnail: "https://live.staticflickr.com/65535/48906188602_2864a6ee49_b.jpg",
          thumbnailWidth: 500,
          thumbnailHeight: 333,
          caption: "Sylvester the Cheetah"
      },
      {
          src: "https://live.staticflickr.com/65535/48907528807_4b0dba2463_b.jpg",
          thumbnail: "https://live.staticflickr.com/65535/48907528807_4b0dba2463.jpg",
          thumbnailWidth: 500,
          thumbnailHeight: 333,
          caption: "Andean Bear"
      },
      {
        src: "https://live.staticflickr.com/65535/48905979066_d8c1f73c30_k.jpg",
        thumbnail: "https://live.staticflickr.com/65535/48905979066_f7fe89d7ab_z.jpg",
        thumbnailWidth: 500,
        thumbnailHeight: 333,
        caption: "A Young Male Lion at Madikwe Camp In South Africa."
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
        src: "https://live.staticflickr.com/65535/48906751053_e5ee157d77_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/48906751053_e5ee157d77.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 500,
        caption: "Esteban"
    },
    {
        src: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa_b.jpg",
        thumbnail: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa.jpg",
        thumbnailWidth: 500,
        thumbnailHeight: 333,
        caption: "Lightning over Lake Tahoe"
    },
    {
        src: "https://live.staticflickr.com/65535/48906188602_2864a6ee49_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/48906188602_2864a6ee49_b.jpg",
        thumbnailWidth: 500,
        thumbnailHeight: 333,
        caption: "Sylvester the Cheetah"
    },
    {
        src: "https://live.staticflickr.com/65535/48907528807_4b0dba2463_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/48907528807_4b0dba2463.jpg",
        thumbnailWidth: 500,
        thumbnailHeight: 333,
        caption: "Andean Bear"
    }
    ]
};

export default Home;
