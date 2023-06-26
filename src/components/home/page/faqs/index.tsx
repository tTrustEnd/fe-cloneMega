
import { Col, Row } from "antd"
import CurrentPage from "../currentPage"
import './index.scss'
import { CaretRightOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import { useState, type CSSProperties } from 'react';

const Faqs = () => {
    const { token } = theme.useToken();
    const [red, setRed] = useState(false)
    const [red2, setRed2] = useState(false)
    const [red3, setRed3] = useState(false)
    const [red4, setRed4] = useState(false)
    const [red5, setRed5] = useState(false)
    const [red6, setRed6] = useState(false)
    const [red7, setRed7] = useState(false)
    const [red8, setRed8] = useState(false)
    const [red9, setRed9] = useState(false)


    const setColor = () => {
        setRed(!red)
    }
    const setColor2 = () => {
        setRed2(!red2)
    }
    const setColor3 = () => {
        setRed3(!red3)
    }
    const setColor4 = () => {
        setRed4(!red4)
    }
    const setColor5= () => {
        setRed5(!red5)
    }
    const setColor6 = () => {
        setRed6(!red6)
    }
    const setColor7 = () => {
        setRed7(!red7)
    }
    const setColor8 = () => {
        setRed8(!red8)
    }
    const setColor9 = () => {
        setRed9(!red9)
    }
    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
        {
            key: '1',
            label: <div className={red?"clickable red":"clickable"} onClick={() => setColor()}> Phim 2D là gì </div>,
            children: <p>Phim 2D sử dụng các thiết bị tương tự như phim 3D Digital chỉ khác là không có hiệu ứng 3D.
                Đồng thời, bạn sẽ vẫn được tận hưởng những hình ảnh sống động và âm thanh tuyệt vời mà không cần dùng kính.<br></br><br />

                Điều này có nghĩa là bạn sẽ được thưởng thức hiệu ứng hình ảnh sáng hơn, sắc nét hơn của công nghệ 3D với âm thanh digital sống động.</p>,
            style: panelStyle,
        },
        {
            key: '2',
            label: <div  className={red2?"clickable red":"clickable"} onClick={() => setColor2()}> Phim 3D là gì </div>,
            children: <p>3D là chữ viết tắt của 3 Dimension,
                tiếng Việt có nghĩa là 3 chiều: Các phim ảnh thông thường hoặ
                c những hình ảnh trên Tivi, máy tính là những phim hoặc những hình ảnh 2 c
                hiều vì màn ảnh chỉ có 2 chiều là chiều rộng và chiều đứng (không có chiều sâu).<br /><br />

                Không gian ta đang sống là không gian 3 chiều. Loại phim 3D là loại phim dùng kỹ thuật hiện đại làm cho người xem cảm nhận được chiều sâu không gian của nhân vật, của phong cảnh thật như không gian ta đang sống, khán giả cảm thấy như đang sống thực trong phim. </p>,
            style: panelStyle,
        },
        {
            key: '3',
            label: <div  className={red3?"clickable red":"clickable"} onClick={() => setColor3()}> Suất chiếu Sneak shows là gì? </div>,
            children: <p>Sneak Shows là các suất chiếu đặc biệt, phim sẽ được chiếu sớm hơn ngày khởi chiếu. Rạp Mega GS sẽ áp dụng giá vé riêng cho các suất chiếu Sneak shows.</p>,
            style: panelStyle,
        },
        {
            key: '4',
            label: <div  className={red4?"clickable red":"clickable"} onClick={() => setColor4()}>Có thể mua vé bằng cách nào? </div>,
            children: <p>
                Có thể đặt vé online trên website bằng cách chọn xuất chiếu và tiến hành các bước chọn ghế và thanh toán như hiển thị trên website.<br /><br />
                Hoặc đến mua trực tiếp tại Rạp Mega GS Cinemas - 19 Cao Thắng P.2 Q.3 TP.HCM<br />
                <b>Lưu ý: </b>
                <ul><li>Khách hàng phải Đăng ký làm Thành Viên của Mega GS Cinemas thì mới có thể tiến hành các bước mua vé trực tuyến.</li></ul>
                <ul><li>Các loại thẻ thanh toán nội địa hay quốc tê quý khách sử dụng phải được đăng ký Internet Banking.</li></ul>
                <ul><li>Thẻ thanh toán quốc tế (Visa, Master) phải được phát hành tại Việt Nam.</li></ul>
            </p>,
            style: panelStyle,
        },
        {
            key: '5',
            label: <div  className={red5?"clickable red":"clickable"} onClick={() => setColor5()}>Rạp có ưu đãi giá vé cho trẻ em/người cao tuổi không?</div>,
            children: <p>
                Mega GS áp dụng giá vé ưu đãi dành cho trẻ em/người cao tuổi trong cả tuần. Chi tiết xin xem bảng giá vé hoặc liên hệ quầy vé.<br/><br/>
                Bên cạnh đó, trẻ em dưới 1 mét khi đến xem phim tại Mega GS sẽ được miễn phí vé hoàn toàn. Bé sẽ ngồi chung ghế với bố<br/>
                mẹ khi xem phim.<br/><br/>
                <b>Lưu ý: </b>
                <ul><li>Vé trẻ em: áp dụng cho trẻ em cao dưới 1.3 mét.</li></ul>
                <ul><li>Vé người cao tuổi: áp dụng…. CMND khi mua vé. Mỗi CMND chỉ áp dụng cho 1 vé / người sử dụng.</li></ul>
            </p>,
            style: panelStyle,
        },
        {
            key: '6',
            label: <div  className={red6?"clickable red":"clickable"} onClick={() => setColor6()}> Rạp có ưu đãi giá vé gì cho học sinh/sinh viên?</div>,
            children: <p>
                Đối tượng là học sinh/sinh viên sẽ được hưởng giá vé ưu đãi trong cả tuần, đồng giá với trẻ em/người cao tuổi. Chi tiết xin<br/>
                xem bảng giá vé hoặc liên hệ quầy vé.<br/><br/>
                <b>Lưu ý: </b>
                <ul><li>HS-SV vui lòng có mặt trực tiếp tại quầy vé với thẻ HS-SV còn hạn sử dụng để hưởng các quyền lợi của mình.</li></ul>
                <ul><li>Mỗi thẻ HS-SV chỉ áp dụng cho 1 vé / HS-SV sử dụng.</li></ul>
            </p>,
            style: panelStyle,
        },
        {
            key: '7',
            label: <div  className={red7?"clickable red":"clickable"} onClick={() => setColor7()}> Thức ăn bên ngoài có được mang vào rạp hay không?</div>,
            children: <p>
                Để đảm bảo vệ sinh và an toàn thực phẩm, chỉ thức ăn và đồ uống được mua tại Mega GS mới được đem vào rạp chiếu phim.<br/><br/>
                Ngoài ra, bạn cũng không được hút thuốc, dùng kẹo cao su, không quay phim, chụp hình, không nghe hoặc gọi điện thoại,<br/>
                không nói chuyện và làm ồn trong rạp chiếu phim.<br/><br/>
                Tất cả những qui định trên để đảm bảo các bạn có thể thưởng thức phim một cách trọn vẹn và tuyệt vời nhất.
            </p>,
            style: panelStyle,
        },
        {
            key: '8',
            label: <div  className={red8?"clickable red":"clickable"} onClick={() => setColor8()}>Có phải gửi balo/ túi xách/ vật dụng cồng kềnh trước khi vào rạp hay không?</div>,
            children: <p> 
                Đối với các loại balo/túi xách lớn/ vật dụng cồng kềnh thì nhân viên sẽ yêu cầu bạn phải gửi tại quầy chăm sóc khách hàng.<br/>
                Gửi balo/túi xách/vật dụng cồng kềnh là để khi xảy ra sự cố, việc thoát hiểm cho khách sẽ diễn ra dễ dàng và an toàn hơn.<br/><br/>
                Đối với các loại balo/túi xách nhỏ thì nhân viên sẽ không yêu cầu phải gửi.
            </p>,
            style: panelStyle,
        },
        {
            key: '9',
            label: <div  className={red9?"clickable red":"clickable"} onClick={() => setColor9()}> Đang update......... </div>,
            children: <p>
                {`:))))))))))))`}
            </p>,
           
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
                page={'faqs'}
            />

            <Row gutter={[20, 20]}>

                <Col xxl={4} >
                </Col>
                <Col className="left-link" xxl={5} style={{ paddingTop: 30 }}>
                    <div style={{ background: 'rgba(0,0,0,.3)', width: 300, height: 400 }}>
                        <a href="/gioi-thieu"><b >GIỚI THIỆU</b><br /></a>
                        <a className="active" href="/faqs"><b>FAQS</b><br /></a>
                        <a href="/tuyen-dung"><b>TUYỂN DỤNG</b><br /></a>
                        <a href="/lien-he"> <b>LIÊN HỆ</b><br /></a>
                        <a href=""><b>ĐIỀU KHOẢN CHUNG</b><br /></a>
                        <a href=""><b>CHÍNH SÁCH THANH TOÁN VÉ TRỰC TUYẾN</b><br /></a>
                        <a href="/megaPlus"><b>MEGA+</b><br /></a>
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

                </Col>
                <Col xxl={4}>
                </Col>
            </Row>
        </div>
    )
}
export default Faqs;