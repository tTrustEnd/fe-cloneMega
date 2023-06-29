import { Col, Row } from 'antd';
import './index.scss'
const Footer = () => {
    return (
        <Col className='footer'>
          <div className='mega-footer'>
            <div className='star-left'>
                <img src="https://www.megagscinemas.vn/images/home/footer-star.png" alt="" />
            </div>
            <div className='star'>
                <img src="https://www.megagscinemas.vn/images/home/f-star.png" alt="" />
            </div>
            <div className='footer-content '>
                <div className='footer-left'>
                    <div className='footer-link-1 '>
                        <ul className=''>
                            <span>LỊCH CHIẾU</span>
                            <span>PHIM </span>
                            <span>RẠP & GIÁ VÉ</span>
                            <span>ƯU ĐÃI</span>
                        </ul>
                    </div>
                    <ul className=''>
                        <b>GIỚI THIỆU</b>
                        <b>SỰ KIỆN </b>
                        <b>DỊCH VỤ</b>
                        <b>TUYỂN DỤNG</b>
                        <b>ĐIỀU KHOẢN CHUNG</b>
                        <b>LIÊN HỆ</b>
                        <b>MEGA+</b>

                    </ul>
                    <ul style={{ fontSize: 11, color: 'white', fontWeight: 200, paddingTop: 10 }} >
                        CÔNG TY TNHH MEGA GS CINEMAS
                        Địa chỉ: 213 Lý Tự Trọng, Phường Bến Thành, Quận 1, TP.HCM / Email:CSKH@megags.vn
                        <br />
                        Số ĐKKD: 0312667335 - Ngày cấp: 20/07/2017 (Đăng ký thay đổi lần 12) <br /> Nơi cấp: Sở kế hoạch và đầu tư thành phố Hồ Chí Minh

                        Copyright ©2018 Mega GS Cinemas. All rights reserved.
                    </ul>
                </div>
                <div style={{paddingLeft:100}}>
                    <div > <span>TỔNG ĐÀI HỖ TRỢ</span></div>
                    <div style={{display:'flex'}}>
                    <div >
                        <div>
                            <h4 style={{ float: 'right', color: 'yellow' }}>Rạp Cao Thắng</h4>
                        </div>
                        <div>
                            <h5  style={{ float: 'right', color: 'yellow' }}>
                                028 6264 9911

                            </h5>

                        </div>

                    </div>
            <div>
               <img src="https://www.megagscinemas.vn/Images/home/footer-phone.png" alt="" />
            </div>
                    <div >
                        <div>
                            <h4 style={{  color: 'yellow' }}>Rạp Lý Chính Thắng</h4>
                        </div>
                        <div>
                            <h5  style={{color: 'yellow' }}>
                            028 6282 3737

                            </h5>

                        </div>

                    </div>
                    </div>
                  


                </div>
            </div>
        </div>
        </Col>
    )
}
export default Footer;