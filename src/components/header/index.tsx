import Logo from '../../../src/public/logopage.png'
import YTB from '../../../src/public/img-youtube.png'
import FB from '../../../src/public/img-face.png'
import './index.scss'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    const user = useSelector((state: any) => state.user.account.user)
    return (
        <div className="header">
            <div className="logo-header">
                <NavLink to="/"><img alt="example" src={Logo} /></NavLink>
            </div>
            <div className="content-header">
                <div className="content-top">
                    <NavLink to="/gioi-thieu"><ul>GIỚI THIỆU</ul></NavLink>
                    <NavLink to="/su-kien"><ul>SỰ KIỆN</ul></NavLink>
                    <NavLink to="/dich-vu"><ul>DỊCH VỤ</ul></NavLink>
                    <NavLink to="/tuyen-dung"><ul>TUYỂN DỤNG</ul></NavLink>
                    <NavLink to="/faqs"><ul>FAQS</ul></NavLink>
                    <NavLink to="/lien-he"><ul>LIÊN HỆ</ul></NavLink>
                    <NavLink to="/megaPlus"> <ul>MEGA+</ul></NavLink>
                    {!user && <NavLink to="/register"><div> ĐĂNG KÝ</div> </NavLink>}

                    {!user && <NavLink to="/login"> <button style={{ fontWeight: 600, height: 40 }} className="btn btn-warning">ĐĂNG NHẬP</button></NavLink>}
                    {user && user.name &&
                        <div style={{ display: 'flex' }}>

                            <div className='hello'><NavLink to="/"><b>Chào bạn : {user.name} ! </b></NavLink>
                            </div>

                            <div
                                onClick={() => {
                                    localStorage.removeItem("access_token"),
                                        localStorage.removeItem("persist:root"),
                                        location.reload()
                                }} className='dangxuat'
                                style={{ color: 'yellow', fontSize: 14, textAlign: 'center', margin: '0' }}>
                                <i style={{ color: "white" }}>  Điểm thưởng 0 {`>>`}</i> Đăng xuất</div>
                        </div>
                    }

                </div>
                <div className="content-bot">
                    <div>
                        <NavLink to="/lich-chieu"><b>LỊCH CHIẾU</b></NavLink>
                        <NavLink to="/phim"><b>PHIM</b></NavLink>
                        <NavLink to="/rap"><b>RẠP & GIÁ VÉ</b></NavLink>
                        <NavLink to="/uu-dai"><b>ƯU ĐÃI</b></NavLink>
                    </div>
                    <div style={{ paddingLeft: 50 }}>
                        <NavLink style={{ paddingRight: 25 }} to="https://www.facebook.com/nguyenquang.truong.9237" target="_blank" title="Facebook"><img src={FB} /></NavLink>
                        <NavLink to="https://www.youtube.com/channel/UCYAIiDVBbuO6V4BBERWe-LQ" target="_blank" title="Youtube"><img src={YTB} /></NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;