import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import './index.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";
import Baner1 from '../../../public/xu-so-banner.png';
import Baner2 from '../../../public/flash-banner-1.png';
import Baner3 from '../../../public/doremon-banner.png'
const images = [
    {
        original: Baner1,
        description:
            <div className='image-gallery-description'
                style={{ display: 'flex', justifyContent: 'end', width: 1400, background: 'none' }}>
                <div style={{ paddingTop: '100px', marginBottom: 0 }}>
                    <button
                        className='btn btn-warning'>
                        <a className='nav-link' href='/'><h4>Xem thi tiết</h4></a>
                    </button>
                </div>

            </div>

    },
    {
        original: Baner2,
        description:
            <div className='image-gallery-description'
                style={{ display: 'flex', justifyContent: 'end', width: 1400, background: 'none' }}>
                <div style={{ paddingTop: '100px', marginBottom: 0 }}>
                    <button
                        className='btn btn-warning'>
                        <a className='nav-link' href='/'><h4>Xem thi tiết</h4></a>
                    </button>
                </div>

            </div>
    },
    {
        original: Baner3,
        description:
            <div className='image-gallery-description'
                style={{ display: 'flex', justifyContent: 'end', width: 1400, background: 'none' }}>
                <div style={{ paddingTop: '100px', marginBottom: 0 }}>
                    <button
                        className='btn btn-warning'>
                        <a className='nav-link' href='/'><h4>Xem thi tiết</h4></a>
                    </button>
                </div>

            </div>
    },
];
const Home = () => {
    return (
        <div className="mega-content">
            <div className='home-baner'>
                <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showBullets={true}
                />
            </div>

        </div>
    )
}
export default Home;