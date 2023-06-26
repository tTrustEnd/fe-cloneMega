
import { Col, Row } from "antd"
import CurrentPage from "../currentPage"
import './index.scss'
import { CaretRightOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import { useState, type CSSProperties } from 'react';
// import Mau from '../../../../public/'
const LienHe = () => {
    return (
        <div>
            <CurrentPage
                page={'lien-he'}
            />

            <Row gutter={[20, 20]}>

                <Col xxl={4} >
                </Col>
                <Col className="left-link" xxl={5} style={{ paddingTop: 30 }}>
                    <div style={{ background: 'rgba(0,0,0,.3)', width: 300, height: 400 }}>
                        <a href="/gioi-thieu"><b >GIỚI THIỆU</b><br /></a>
                        <a href="/faqs"><b>FAQS</b><br /></a>
                        <a  href="/tuyen-dung"><b>TUYỂN DỤNG</b><br /></a>
                        <a className="active" href="/lien-he"> <b>LIÊN HỆ</b><br /></a>
                        <a href=""><b>ĐIỀU KHOẢN CHUNG</b><br /></a>
                        <a href=""><b>CHÍNH SÁCH THANH TOÁN VÉ TRỰC TUYẾN</b><br /></a>
                        <a href="/megaPlus"><b>MEGA+</b><br /></a>
                    </div>


                </Col>
                <Col xxl={11} style={{ paddingTop: 30 }}>

                    <div className="title-rap" >
                        <h2 style={{ paddingTop: 5, color: 'white' }}> LIÊN HỆ</h2>
                    </div>
                    <div style={{display:'flex',background:'yellow'}}>
                    <Col xxl={9} style={{paddingTop:100}}>
                        <img  src="/src/public/logo-lh.png" alt="" />
                    </Col>
                    <Col xxl={15} style={{paddingTop:50}}>
                    <div>
                   <h5> Mega GS Entertainment - Communication Group</h5> Mega GS Entertainment - Communication Group <br />
                    212 Lý Chính Thắng, Phường 9, Quận 3, TP.HCM. <br />
                    (+84.28) 6282.4545 <br />
                    8:30 – 18:00 (Thứ 2 đến thứ 6) <br /><br />
                    <h5> Mega GS Cinemas</h5><br />
                    213 Lý Tự Trọng, Phường Bến Thành, Quận 1, TPHCM <br />
                    Website: <a href="https://www.megagscinemas.vn/"> www.megagscinemas.vn</a><br />
                    Fanpage: <a href="https://www.facebook.com/megagscinemas.vn">https://www.facebook.com/megagscinemas.vn</a>    

                    </div>
                    </Col>
                    
                    </div>
                
                </Col>
                <Col xxl={4}>
                </Col>
            </Row>
        </div>
    )
}
export default LienHe;