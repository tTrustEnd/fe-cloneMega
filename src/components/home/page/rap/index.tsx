import { Col, Row, Select, Space } from "antd"
import CurrentPage from "../currentPage"
import './index.scss';
import ImageGallery from 'react-image-gallery';
import Rap11 from '../../../../public/rap11.png'
import Rap12 from '../../../../public/rap12.png'
import Rap13 from '../../../../public/rap13.png'
import Rap21 from '../../../../public/rap21.jpg'
import Rap22 from '../../../../public/rap22.jpg'
import Rap23 from '../../../../public/rap23.jpg'
import Rap24 from '../../../../public/rap24.jpg'
import Rap25 from '../../../../public/rap25.jpg'
import Verap1 from '../../../../public/verap1.png'
import Verap2 from '../../../../public/verap2.png'

import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons';

import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { FaMapLocation, FaMapLocationDot } from "react-icons/fa6";
const Rap = () => {
    const images: any = [
        { original: Rap11, },
        { original: Rap12, },
        { original: Rap13, },
    ];
    const images2: any = [
        { original: Rap21, },
        { original: Rap22, },
        { original: Rap23, },
        { original: Rap24, },
        { original: Rap25, },
    ];
    const [rap1, showRap1] = useState<boolean>(true)
    const [rap2, showRap2] = useState<boolean>(false)
    const onChange = (value: any) => {
        console.log(value)
        if (value == '1') {
            showRap1(true)
            showRap2(false)
        }
        if (value == '2') {
            showRap2(true)
            showRap1(false)
        }
    }
    return (
        <div>
            <CurrentPage
                page={'rap'}
            />
            <Row style={{ display: 'flex' }} gutter={[20, 20]}>

                <Col xxl={4} ></Col>

                <Col xxl={14} style={{ paddingLeft: 50, paddingTop: 40 }}>
                    <div className="title-rap" >
                        <h3 >
                            RẠP & GIÁ VÉ
                        </h3>
                    </div>
                    <div className="select-rap" >
                        <span>Rạp:</span>
                        <span>
                            <Select
                                onChange={onChange}
                                defaultValue="Mega GS Lý Chính Thắng"
                                style={{ width: 350 }}
                                bordered={false}
                                options={[
                                    { value: '1', label: 'Mega GS Lý Chính Thắng' },
                                    { value: '2', label: 'Mega GS Cao Thắng' },
                                ]}
                            />
                        </span>


                    </div>
                    {rap1 &&
                        <div>
                            <Col xxl={18} style={{ display: 'flex', height: 300 }}>
                                <Col xxl={20}>
                                    <ImageGallery
                                        items={images}
                                        showThumbnails={false}
                                        showFullscreenButton={false}
                                        showBullets={true}
                                        showPlayButton={false}
                                        autoPlay={true}
                                        showNavigation={false}
                                    />
                                </Col>
                                <div>

                                </div>
                                <Col style={{ background: '#9e9e9e' }}>
                                    <div style={{ paddingLeft: 35, width: 370 }}>
                                        <div style={{ paddingTop: 10, fontSize: 20, fontWeight: 800 }}>
                                            MEGA GS LÝ CHÍNH THẮNG
                                        </div>
                                        <div style={{ display: 'flex', padding: '5px 0px' }}>
                                            <HomeOutlined style={{ paddingTop: 5 }} /> &nbsp; <span> 212 Lý Chính Thắng, P.9, Q.3, TP.HCM</span>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <PhoneOutlined style={{ paddingTop: 5 }} />   &nbsp; <span> 028 6282 3737</span>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ display: 'flex', paddingBottom: 35 }}>
                                                <MailOutlined style={{ paddingTop: 5 }} /> &nbsp; <span>  cskh@megags.vn
                                                </span>

                                            </div>

                                            <div style={{ display: 'flex', paddingTop: 25 }}>

                                                <span style={{ paddingLeft: 35 }}>
                                                    <a className="nav-link" target="_blank"
                                                        href="https://www.google.com/maps/place/Mega+GS+Cinemas+-+L%C3%BD+
                                                    Ch%C3%ADnh+Th%E1%BA%AFng/@10.780639,106.6802296,17z/data=!3m1!4b1!4m5!3
                                                    m4!1s0x31752f8a1bb2e59f:0x46d2bcd3e7bff8a!8m2!3d10.780639!4d106.6824183
                                                    ?hl=vi-VN&shorturl=1">
                                                        <FontAwesomeIcon className="iconMap" icon={faMapLocation} /></a>
                                                </span>
                                                <b> Bản đồ</b>
                                            </div>

                                        </div>


                                        <div>
                                            <button className="btn btn-warning">Xem lịch chiếu   </button>
                                        </div>



                                    </div>
                                </Col>


                            </Col>
                            <div>
                                <img src={Verap1} alt="" width={1020} />
                            </div>
                        </div>

                    }
                    <div>

                    </div>
                    {rap2 &&
                        <div>
                            <Col xxl={18} style={{ display: 'flex', height: 300 }}>
                                <Col xxl={20}>
                                    <ImageGallery
                                        items={images2}
                                        showThumbnails={false}
                                        showFullscreenButton={false}
                                        showBullets={true}
                                        showPlayButton={false}
                                        autoPlay={true}
                                    />
                                </Col>
                                <div>

                                </div>
                                <Col style={{ background: '#9e9e9e' }}>
                                    <div style={{ width: 350 }}>
                                        <div style={{ paddingLeft: 35, width: 350 }}>
                                            <div style={{ paddingTop: 10, fontSize: 20, fontWeight: 800 }}>
                                                MEGA GS CAO THẮNG                                        </div>
                                            <div style={{ display: 'flex', padding: '5px 0px' }}>
                                                <HomeOutlined style={{ paddingTop: 5 }} /> &nbsp; <span>Lầu 6 - 7, 19 Cao Thắng, Phường 2, Quận 3, TP Hồ Chí Minh</span>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <PhoneOutlined style={{ paddingTop: 5 }} />   &nbsp; <span>(+84.28) 6264.9911 </span>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ display: 'flex', paddingBottom: 35 }}>
                                                    <MailOutlined style={{ paddingTop: 5 }} /> &nbsp; <span>  cskh@megags.vn
                                                    </span>

                                                </div>

                                                <div style={{ display: 'flex', paddingTop: 25 }}>

                                                    <span style={{ paddingLeft: 35 }}>
                                                        <a className="nav-link" target="_blank"
                                                            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x31752f220559d037:0x6d815550960170a1?source=g.page.share">
                                                            <FontAwesomeIcon className="iconMap" icon={faMapLocation} /></a>
                                                    </span>
                                                    <b> Bản đồ</b>
                                                </div>

                                            </div>
                                            <div>
                                                <button className="btn btn-warning">Xem lịch chiếu  </button>
                                            </div>

                                        </div>
                                    </div>
                                </Col>


                            </Col>
                            <div>
                                <img src={Verap2} alt="" width={1000} />
                            </div>
                        </div>
                    }

                </Col>

                <Col xxl={5}></Col>
            </Row>
        </div>
    )
}
export default Rap