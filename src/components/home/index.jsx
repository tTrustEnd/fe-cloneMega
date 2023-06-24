import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import './index.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";
import Baner1 from '../../../src/public/xu-so-banner.png';
import Baner2 from '../../../src/public/flash-banner-1.png';
import Baner3 from '../../../src/public/doremon-banner.png'
import { Input, Select, Space, Tabs } from 'antd';
import FilmsNow from './filmsNow';
import { useLocation } from 'react-router-dom';

const images = [
    {
        original: Baner1,
        description:
            <div className='image-gallery-description'
                style={{ display: 'flex', justifyContent: 'end', width: 1400, background: 'none' }}>
                <div style={{ paddingTop: '100px', marginBottom: 0 }}>
                    <button
                        className='btn btn-warning'>
                        <a className='nav-link' href='/'><h4>Xem chi tiết</h4></a>
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
                        <a className='nav-link' href='/'><h4>Xem chi tiết</h4></a>
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
   

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: <div className='btn' style={{ display: 'flex', justifyItems: 'center' }}>
                <button className='btn btn-warning'> 
                <h4 style={{ margin: '0 auto', textAlign: 'center',opacity:0.9,fontWeight:800 }}>PHIM ĐANG CHIẾU</h4> </button> </div>,
            children: <FilmsNow />,
        },
        {
            key: '2',
            label: <div className='btn'> 
            <button className='btn btn-warning'>
                <h4 style={{ margin: '0 auto', textAlign: 'center',opacity:0.9,fontWeight:800 }}>PHIM SẮP CHIẾU</h4>
                </button> </div>,
            children: <FilmsNow />,
        },
    ];
    return (
        <div className="mega-content">
            <div className='home-baner'>
                <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showBullets={true}
                    showPlayButton={false}
                    autoPlay={true}
                />
            </div>
            <div className='booking-form'>
                <div className='wrapper'>
                    <div className='contents'>
                        <div className='title'>
                            <h3>MUA VÉ ONLINE</h3>
                            <p>
                                <b>(*) </b>
                                Chọn vào xuất chiếu để đặt vé trực tuyến
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Select
                            defaultValue="MEGA CAO THẮNG"
                            style={{ width: 230 }}
                            onChange={handleChange}
                            options={[
                                { value: 'MEGA LÝ CHÍNH THẮNG', label: 'MEGA LÝ CHÍNH THẮNG' },
                                { value: 'MEGA CAO THẮNG', label: 'MEGA CAO THẮNG' },
                            ]}
                        />
                        <Select
                            defaultValue="CHỌN PHIM"
                            style={{ width: 230 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                        <Select
                            defaultValue="CHỌN NGÀY"
                            style={{ width: 230 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </div>

                </div>

            </div>
            <div className='mega-films'>
                <Tabs
                    className='tab' items={items} onChange={onChange} />
            </div >
            <div className='all' style={{ display: 'flex', justifyContent: 'center', padding: '15px 0' }}>
                <a href="/phim"><h2>Xem tất cả</h2></a>
            </div>

            <div className='advertise-wrap'>
                <div className='content'>
                    <a href="/uu-dai/">
                        <img title='Quảng cáo' src="https://cms.megagscinemas.vn//media/76783/banner-advertise-1.png" className="img-responsive" />
                    </a>
                </div>
            </div>
            <div className="big-offer img">
                <a title="ƯU ĐÃI HỌC SINH - SINH VIÊN GIỎI HÈ 2023" className="bg-special" href="/uu-dai/uu-dai-hoc-sinh-sinh-vien-gioi-he-2023/">
                    <img alt="ƯU ĐÃI HỌC SINH - SINH VIÊN GIỎI HÈ 2023"
                        src="https://cms.megagscinemas.vn//media/77066/hè-1920-1080-px-1.png?width=745&amp;height=420"
                        style={{ width: 745, height: 420 }} />
                </a>
            </div>


        </div>

    )
}
export default Home;