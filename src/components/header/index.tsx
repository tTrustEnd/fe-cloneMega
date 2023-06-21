import { Avatar, Card } from "antd";
import Logo from '../../../public/logopage.png'
import './index.scss'
const Header = () => {
    return (
        <div className="header">
            <div className="logo-header">
                <img alt="example" src={Logo} />
            </div>
            <div className="content-header">
                <div className="content-top">
                    <a href="/gioi-thieu"><ul>GIỚI THIỆU</ul></a>
                    <a href="/su-kien"><ul>SỰ KIỆN</ul></a>
                    <a href="/dich-vu"><ul>DỊCH VỤ</ul></a>
                    <a href="/tuyen-dung"><ul>TUYỂN DỤNG</ul></a>
                    <a href="/faqs"><ul>FAQS</ul></a>
                    <a href="/lien-he"><ul>LIÊN HỆ</ul></a>
                    <a href="/megaPlus"> <ul>MEGA+</ul></a>
                    <a href="/login"><div> ĐĂNG KÝ</div> </a>
                    <a href="/login"> <button className="btn btn-warning">ĐĂNG NHẬP</button></a>
                </div>
                <div className="content-bot">
                    <a href="/lich-chieu"><span>LỊCH CHIẾU</span></a>
                    <a href="/phim"><span>PHIM</span></a>
                    <a href="rap"><span>RẠP & GIÁ VÉ</span></a>
                    <a href="uu-dai"><span>ƯU ĐÃI</span></a>
                </div>

            </div>
        </div>
    )
}
export default Header;