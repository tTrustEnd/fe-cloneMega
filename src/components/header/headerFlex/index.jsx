import './index.scss'
import Logo from '../../../../src/public/logopage.png'
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react'
const HeaderFlex = () => {
  window.addEventListener('scroll', function () {
    const stickyHeader = document.getElementById('header-flex');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      stickyHeader.style.top = '0';
    } else {
      stickyHeader.style.top = '-200px';
    }
  });
  function openDiv() {
    setTimeout(()=>{setIsShowMenu(!showMenu)
    },200)
    var openDiv = document.getElementById('openDiv');
    openDiv.classList.toggle('open');
  }
  const [showMenu, setIsShowMenu] = useState(false)
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
          <div style={{ display: 'flex', paddingTop: 15, paddingLeft: 35 }}>
            <div style={{ paddingRight: 25 }}>
              <a href="/register"><div> ĐĂNG KÝ</div> </a>

            </div>
            <div>
              <a href="/login">ĐĂNG NHẬP</a>
            </div>
          </div>
          <div style={{ paddingLeft: 50, paddingTop: 10 }}>
            <button className='btn btn-warning'>MUA VÉ NHANH</button>

          </div>
          
            <div >
              <div className='open-Div' id="openDiv" style={{ display: 'flex', justifyContent: 'center', paddingTop: 25, background: '#313132' }}>
                { showMenu &&<div  className='open-Div' id="openDiv" >
                  <a href="/gioi-thieu"><ul>GIỚI THIỆU</ul></a>
                  <a href="/su-kien"><ul>SỰ KIỆN</ul></a>
                  <a href="/dich-vu"><ul>DỊCH VỤ</ul></a>
                  <a href="/tuyen-dung"><ul>TUYỂN DỤNG</ul></a>
                  <a href="/faqs"><ul>FAQS</ul></a>
                  <a href="/lien-he"><ul>LIÊN HỆ</ul></a>
                  <a href="/megaPlus"> <ul>MEGA+</ul></a>
                </div>}
              </div>

            </div>

          
        </div>
        <div onClick={() => {openDiv()}} style={{ display: 'flex', paddingTop: 25, paddingLeft: 55 }}>
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