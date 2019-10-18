import PropTypes from 'prop-types';
import React from 'react';
import Gallery from '../../Gallery.js';


class Home extends React.Component {
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
            src: "https://live.staticflickr.com/65535/48906850513_a6e6cc7e3f_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906850513_a6e6cc7e3f.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "A traveler Looking out at Peggy's Cove Lighthouse"
        },
        {
            src: "https://live.staticflickr.com/65535/48907528807_4b0dba2463_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907528807_4b0dba2463.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Andean Bear"
        },
        {
            src: "https://live.staticflickr.com/65535/48906755768_a70de8839b_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906755768_a70de8839b.jpg",
            thumbnailWidth: 386,
            thumbnailHeight: 500,
            caption: "Makaela in Blue"
        },
        {
            src: "https://live.staticflickr.com/65535/48907496567_24a962751c_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907496567_24a962751c.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 500,
            caption: "Virgil James Leather Milk"
        },
        {
            src: "https://live.staticflickr.com/65535/48906744873_a6603bb723_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906744873_a6603bb723.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Nigiri Sushi being served at Hidden Fish"
        },
        {
            src: "https://live.staticflickr.com/65535/48907378146_9c92c1482b_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907378146_9c92c1482b.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Garrapata State Park"
        },
        {
            src: "https://live.staticflickr.com/65535/48907579492_1b724d8d42_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907579492_1b724d8d42.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 500,
            caption: "Virgil James - Men"
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
            src: "https://live.staticflickr.com/65535/48907281196_945cc49e50_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907281196_945cc49e50.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 500,
            caption: "Marcelo Mancini Portrait"
        },
        {
            src: "https://live.staticflickr.com/65535/48906745323_fef9103c98_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906745323_fef9103c98.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Grilled Salmon Salad at Fish Shop PB"
        },
        {
            src: "https://live.staticflickr.com/65535/48907484827_d1eacd5961_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48907484827_d1eacd5961.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 500,
            caption: "Jess Portrait"
        },
        {
            src: "https://live.staticflickr.com/65535/48906193467_d66e0c6a6d_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906193467_d66e0c6a6d.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Southern yellow-billed Hornbill"
        },
        {
            src: "https://live.staticflickr.com/65535/48906764233_fccfd4cbfe_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906764233_fccfd4cbfe.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 500,
            caption: "Vegas Nero by Virgil James"
        },
        {
            src: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa_b.jpg",
            thumbnail: "https://live.staticflickr.com/8255/29348149460_94ec18a5fa.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 333,
            caption: "Lightning over Lake Tahoe"
        },
        {
            src: "https://live.staticflickr.com/65535/48906761678_e51e667d7b_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/48906761678_e51e667d7b.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 500,
            caption: "Pruna Swift by Virgil James"
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

export default Home;
