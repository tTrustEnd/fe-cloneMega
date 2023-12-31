import './index.scss'
import Logo from '../../../../src/public/logopage.png'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
const HeaderFlex = () => {


  const user = useSelector((state:any) => state.user.account.user)
  window.addEventListener('scroll', function () {
    const stickyHeader:any = document.getElementById('header-flex');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      stickyHeader.style.top = '0';
    } else {
      stickyHeader.style.top = '-200px';
    }
  });

  const openDiv = () => {
    const openDiv:any = document.getElementById('openDiv');
    openDiv.classList.toggle('open');
  }

  return (
    <div className="header-flex" id="header-flex">
      <div className='header'>
        <div className="logo-header">
          <NavLink to="/"><img alt="example" src={Logo} /></NavLink>
        </div>
        <div className='mega-day'>
          <span>   MEGA DAY - THỨ 4 HÀNG TUẦN </span>

        </div>
        <div>
          {user && user.name &&
            <div style={{ display: 'block', paddingTop: 3, paddingLeft: 15 }}>

              <span className='hello' ><Link to="#">Chào bạn : {user.name} !</Link>
              </span>
              <br /><i style={{ color: "white" }}>  Điểm thưởng 0 {`>>`}</i> &nbsp;
              <span className='dangxuatflex'
                onClick={() => {
                  localStorage.removeItem("access_token"),
                    localStorage.removeItem("persist:root"),
                    location.reload()
                }}
                style={{ color: 'yellow', fontSize: 14, textAlign: 'center', height: 19, }}><b>Đăng xuất </b> </span>
            </div>}
          {!user &&
            <div style={{ display: 'flex', paddingTop: 15, paddingLeft: 35 }}>
              <div style={{ paddingRight: 25 }}>
                <NavLink to="/register"><div> ĐĂNG KÝ</div> </NavLink>

              </div>
              <div>
                <NavLink to="/login">ĐĂNG NHẬP</NavLink>
              </div>
            </div>
          }

          <div style={{ paddingLeft: 50, paddingTop: 10 }}>
            <button className='btn btn-warning'><span className='muave' id='muavenhanh' style={{ fontWeight: 600 }}>MUA VÉ NHANH</span></button>

          </div>



          <div className='open-Div' id="openDiv" style={{ justifyContent: 'center', paddingTop: 25, background: '#313132' }}>
          <div className='content'>
              <NavLink onClick={()=>openDiv()} to="/gioi-thieu"><ul>GIỚI THIỆU</ul></NavLink>
              <NavLink onClick={()=>openDiv()} to="/su-kien"><ul>SỰ KIỆN</ul></NavLink>
              <NavLink onClick={()=>openDiv()} to="/dich-vu"><ul>DỊCH VỤ</ul></NavLink>
              <NavLink onClick={()=>openDiv()} to="/tuyen-dung"><ul>TUYỂN DỤNG</ul></NavLink>
              <NavLink onClick={()=>openDiv()} to="/faqs"><ul>FAQS</ul></NavLink>
              <NavLink onClick={()=>openDiv()} to="/lien-he"><ul>LIÊN HỆ</ul></NavLink>
              <NavLink onClick={()=>openDiv()} to="/megaPlus"> <ul>MEGA+</ul></NavLink>
            </div>
          </div>

        </div>
        <div onClick={() => { openDiv() }} style={{ display: 'flex', paddingTop: 25, paddingLeft: 55 }}>
          <div className='btn-menu' style={{ paddingTop: 13, paddingLeft: 12 }} >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>


      </div>

    </div>
  )
}
export default HeaderFlex;