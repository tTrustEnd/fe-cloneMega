import Logo from '../../../src/public/logopage.png'
import YTB from '../../../src/public/img-youtube.png'
import FB from '../../../src/public/img-face.png'
import './index.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Header = () => {
    const user = useSelector((state: any) => state.user.account.user)
    return (
        <div className="header">
            <div className="logo-header">
                <a href="/"><img alt="example" src={Logo} /></a>
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
                    {!user && <a href="/register"><div> ĐĂNG KÝ</div> </a>}

                    {!user && <a href="/login"> <button style={{ fontWeight: 600,height:50 }} className="btn btn-warning">ĐĂNG NHẬP</button></a>}
                    {user && user.name &&
                        <div style={{ display: 'block' }}>

                            <div className='hello'><Link to="/phim">Chào bạn : {user.name} !</Link>
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
                        <a href="/lich-chieu"><b>LỊCH CHIẾU</b></a>
                        <a href="/phim"><b>PHIM</b></a>
                        <a href="/rap"><b>RẠP & GIÁ VÉ</b></a>
                        <a href="/uu-dai"><b>ƯU ĐÃI</b></a>
                    </div>
                    <div style={{ paddingLeft: 50 }}>
                        <a style={{ paddingRight: 25 }} href="https://www.facebook.com/nguyenquang.truong.9237" target="_blank" title="Facebook"><img src={FB} /></a>
                        <a href="https://www.youtube.com/channel/UCYAIiDVBbuO6V4BBERWe-LQ" target="_blank" title="Youtube"><img src={YTB} /></a>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Header;