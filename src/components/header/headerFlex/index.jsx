import './index.scss'
import Logo from '../../../../src/public/logopage.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const HeaderFlex = () => {


  const user = useSelector((state) => state.user.account.user)
  window.addEventListener('scroll', function () {
    const stickyHeader = document.getElementById('header-flex');
    var openDiv = document.getElementById('openDiv');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      stickyHeader.style.top = '0';
      openDiv.classList.remove('show');
    } else {
      stickyHeader.style.top = '-200px';
      openDiv.classList.add('show');
    }
  });

  const openDiv = () => {
    const openDiv = document.getElementById('openDiv');
    openDiv.classList.toggle('open');
  }

  return (
    <div className="header-flex" id="header-flex">
      <div className='header'>
        <div className="logo-header">
          <a href="/"><img alt="example" src={Logo} /></a>
        </div>
        <div className='mega-day'>
          <span>   MEGA DAY - THỨ 4 HÀNG TUẦN </span>

        </div>
        <div>
          {user && user.name &&
            <div style={{ display: 'block',paddingTop:3,paddingLeft:15 }}>

              <span className='hello' ><Link to="/phim">Chào bạn : {user.name} !</Link>
              </span>
              <br /><i style={{color:"white"}}>  Điểm thưởng 0 {`>>`}</i> &nbsp;
              <span
                onClick={() => {
                  localStorage.removeItem("access_token"),
                    localStorage.removeItem("persist:root"),
                    location.reload()
                }} 
                style={{ color: 'yellow', fontSize: 14, textAlign: 'center', height: 19, }}>Đăng xuất</span>
            </div>}
          {!user &&
            <div style={{ display: 'flex', paddingTop: 15, paddingLeft: 35 }}>
              <div style={{ paddingRight: 25 }}>
                <a href="/register"><div> ĐĂNG KÝ</div> </a>

              </div>
              <div>
                <a href="/login">ĐĂNG NHẬP</a>
              </div>
            </div>
          }

          <div style={{ paddingLeft: 50, paddingTop: 10 }}>
            <button className='btn btn-warning'><span className='muave' id='muavenhanh' style={{ fontWeight: 600 }}>MUA VÉ NHANH</span></button>

          </div>



          <div className='open-Div' id="openDiv" style={{ justifyContent: 'center', paddingTop: 25, background: '#313132' }}>

            <div className='content'>
              <a href="/gioi-thieu"><ul>GIỚI THIỆU</ul></a>
              <a href="/su-kien"><ul>SỰ KIỆN</ul></a>
              <a href="/dich-vu"><ul>DỊCH VỤ</ul></a>
              <a href="/tuyen-dung"><ul>TUYỂN DỤNG</ul></a>
              <a href="/faqs"><ul>FAQS</ul></a>
              <a href="/lien-he"><ul>LIÊN HỆ</ul></a>
              <a href="/megaPlus"> <ul>MEGA+</ul></a>
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