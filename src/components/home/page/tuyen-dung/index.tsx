
import { Col, Row } from "antd"
import CurrentPage from "../currentPage"
import './index.scss'
import { CaretRightOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import { useState, type CSSProperties } from 'react';
import { NavLink } from "react-router-dom";
// import Mau from '../../../../public/'
const TuyenDung = () => {
    const { token } = theme.useToken();
    const [red, setRed] = useState(false)
    const [red2, setRed2] = useState(false)

    const setColor = () => {
        setRed(!red)
    }
    const setColor2 = () => {
        setRed2(!red2)
    }

    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
        {
            key: '1',
            label: <div className={red ? "clickable red" : "clickable"} onClick={() => setColor()}> PART-TIME JOB </div>,
            children: <p>
                <b>Nơi làm việc</b>:  Mega GS Cao Thắng<br />
                <b>Yêu cầu</b><br /><br />
                <ul><li>Tính tình trung thực, vui vẻ và luôn giữ bình tĩnh.</li></ul>
                <ul><li>Thích làm việc với khách hàng, thích làm việc trong ngành dịch vụ.</li></ul>
                <ul><li>Sẵn sàng làm việc vào thứ 7, chủ nhật và ngày lễ.</li></ul>
                Bạn nào có hứng thú với công việc này thì hãy điền thông tin vào mẫu tuyển dụng và nộp tại quầy thông tin lầu 7 rạp Mega <br />
                GS - 19 Cao Thắng Q3 nhé :D <br />
                Link mẫu tuyển dụng: <NavLink to="/src/public/megags-formtuyendungparttime-đã-chuyển-đổi.docx" download>Tải</NavLink><br /> <br />
                Nộp kèm: <br />
                <ul><li>Sơ yếu lý lịch.</li></ul>
                <ul><li>CMND</li></ul>
                <ul><li>Hộ Khẩu</li></ul>
            </p>,
            style: panelStyle,
        },
        {
            key: '2',
            label: <div className={red2 ? "clickable red" : "clickable"} onClick={() => setColor2()}> GIÁM SÁT SẢNH </div>,
            children: <p>
                Mô tả công việc: <br />
                <ul><li>Phối hợp và hỗ trợ Ban quản lý rạp trong việc giám sát hoạt động thường ngày của rạp chiếu phim.</li></ul>
                <ul><li> Quản lý, đào tạo đội ngũ nhân viên để đảm bảo tiêu chuẩn dịch vụ.</li></ul>
                <ul><li>Kiểm tra, xử lý các công việc liên quan đến cấp xuất hàng, đảm bảo đúng tiêu chuẩn chất lượng của công ty.</li></ul>
                <ul><li>Hỗ trợ xử lý yêu cầu của khách hàng</li></ul>
                <ul><li>Báo cáo công việc liên quan theo hướng dẫn của rạp.</li></ul>
                Quyền lợi được hưởng: <br />
                <ul><li> Thưởng tháng lương thứ 13</li></ul>
                <ul><li>Các quyền lợi theo đúng luật Lao động</li></ul>
                <ul><li>Vé xem phim hàng tháng</li></ul>
                Yêu cầu: <br />
                <ul><li>Từ 24 đến 28 tuổi</li></ul>
                <ul><li>Có bằng từ Cao Đẳng trở lên của các ngành về du lịch hoặc khách sạn</li></ul>
                <ul><li>Có thể giao tiếp tốt bằng tiếng Anh</li></ul>
                <ul><li>Có thể sử dụng các phần mềm văn phòng như Word/Excel/Power Point</li></ul>
                <ul><li>Có khả năng làm theo ca và những ngày Lễ, Tết</li></ul>
                <ul><li>Có kiến thức chăm sóc khách hàng </li></ul>
                Nơi làm việc: Tầng 6 - 7, số 19 Cao Thắng, Phường 2, Quận 3
            </p>,
            style: panelStyle,
        },

    ];
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    return (
        <div>
            <CurrentPage
                page={'tuyen-dung'}
            />

            <Row gutter={[20, 20]}>

                <Col xxl={4} >
                </Col>
                <Col className="left-link" xxl={5} style={{ paddingTop: 30 }}>
                    <div style={{ background: 'rgba(0,0,0,.3)', width: 300, height: 400 }}>
                        <NavLink to="/gioi-thieu"><b >GIỚI THIỆU</b><br /></NavLink>
                        <NavLink to="/faqs"><b>FAQS</b><br /></NavLink>
                        <NavLink className="active" to="/tuyen-dung"><b>TUYỂN DỤNG</b><br /></NavLink>
                        <NavLink to="/lien-he"> <b>LIÊN HỆ</b><br /></NavLink>
                        <a href=""><b>ĐIỀU KHOẢN CHUNG</b><br /></a>
                        <a href=""><b>CHÍNH SÁCH THANH TOÁN VÉ TRỰC TUYẾN</b><br /></a>
                        <NavLink to="/megaPlus"><b>MEGA+</b><br /></NavLink>
                    </div>


                </Col>
                <Col xxl={11} style={{ paddingTop: 30 }}>

                    <div className="title-rap" >
                        <h2 style={{ paddingTop: 5, color: 'white' }}> FAQS</h2>
                    </div>
                    <div>
                        <Collapse
                            bordered={false}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            style={{ background: token.colorBgContainer }}
                            items={getItems(panelStyle)}
                        />
                    </div>
                    <div style={{paddingLeft:150}}>
                    <div style={{textAlign:'center', background:'yellow',borderRadius:'50%',   width:500}}>
                    <div style={{paddingTop:25}}>
                       <h2> BỘ PHẬN TUYỂN DỤNG</h2> 
                    </div><br />
                    <div>
                        CÔNG TY TNHH MEGA GS CINEMAS
                    </div>
                    <div>
                       <b>Phòng Nhân sự</b> 
                    </div>
                    <div>
                       <b>Lầu 9, 212 Lý Chính Thắng, Phường 9, Quận 3,<br />TP.HCM.</b> 
                    </div>
                    <div>
                        8:30 – 18:00 (Thứ 2 đến thứ 6)
                    </div>
                    <div style={{paddingBottom:25}}>
                        Email:HR@megags.vn
                    </div>
                    </div>
                    </div>
                 
                   
                </Col>
                <Col xxl={4}>
                </Col>
            </Row>
        </div>
    )
}
export default TuyenDung;