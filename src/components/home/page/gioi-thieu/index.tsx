import { Col, Row, message } from "antd"
import CurrentPage from "../currentPage"
import './index.scss'
import Gioithieu from '../../../../public/gioithieu.jpg'
import Gioithieu2 from '../../../../public/gioithieu2.jpg'

const GioiThieu = () => {
    return (
        <div>
            <CurrentPage
                page={'gioi-thieu'}
            />

            <Row gutter={[20, 20]}>

                <Col xxl={4} style={{ border: '1px solid red' }}>
                </Col>
                <Col className="left-link" xxl={5} style={{ border: '1px solid yellow', paddingTop: 30 }}>
                    <div style={{ background: 'rgba(0,0,0,.3)', width: 300, height: 400 }}>
                        <a className="active" href="/gioi-thieu"><b >GIỚI THIỆU</b><br /></a>
                        <a   href="/faqs"><b>FAQS</b><br /></a>
                        <a   href="/tuyen-dung"><b>TUYỂN DỤNG</b><br /></a>
                        <a  href="/lien-he"> <b>LIÊN HỆ</b><br /></a>
                        <a  href=""><b>ĐIỀU KHOẢN CHUNGC</b><br /></a>
                        <a  href=""><b>CHÍNH SÁCH THANH TOÁN VÉ TRỰC TUYẾN</b><br /></a>
                        <a href="/megaPlus"><b>MEGA+</b><br /></a>
                    </div>

                </Col>
                <Col xxl={11} style={{ border: '1px solid blue', paddingTop: 30 }}>

                    <div className="title-rap" >
                        <h2 style={{ paddingTop: 5, color: 'white' }}> GIỚI THIỆU</h2>
                    </div>
                    <div style={{ paddingTop: 25 }}>
                        <img width={'100%'} src={Gioithieu} alt="" />
                    </div>
                    <div>
                        <img width={'100%'} src={Gioithieu2} alt="" />
                    </div>

                    <div style={{ background: '#a9a4a4', paddingTop: 10 }}>
                        Mega GS Cinemas là chuỗi cụm rạp chiếu phim đẳng cấp, chính thức ra mắt lần đầu tiên tại TP.HCM vào tháng 8/2015 tại số 19 Cao Thắng Q.3.<br />
                        <br />
                        Với 6 phòng chiếu hiện đại, tổng số ghế gần 1.000, gồm 2 phòng chiếu 3D và 4 phòng chiếu 2D, Mega GS Cao Thắng chú<br />
                        trọng đầu tư vào thiết kế thân thiện và công nghệ tiên tiến. Chất lượng âm thanh, hình ảnh cao cấp với âm thanh vòm<br />
                        Dolby 7.1 và công nghệ trình chiếu 3D mới nhất, đặc biệt dãy ghế VIP với khả năng cảm ứng âm thanh chắc chắn sẽ mang<br />
                        lại những ấn tượng độc đáo mà bạn chưa từng trải nghiệm qua. Ngoài ra, đội ngũ nhân viên thân thiện & mến khách của<br />
                        Mega GS cũng sẽ mang đến sự hài lòng, thoải mái dành cho khán giả.<br />
                        <br />
                        Một điều đáng chú ý là so với chất lượng mà Mega GS đem lại thì giá cả phù hợp là điểm cạnh tranh rất rõ ràng để Mega GS<br />
                        là một sự lựa chọn lý tưởng dành cho những tín đồ yêu điện ảnh.<br /><br />
                        Trong tương lai, Mega GS sẽ phát triển thêm nhiều cụm rạp tại TP.HCM và trên khắp cả nước. Với phương châm mang lại<br />
                        cho khách hàng những trải nghiệm điện ảnh khác biệt và chất lượng dịch vụ tốt nhất, Mega GS hứa hẹn sẽ trở thành một<br />
                        điểm vui chơi giải trí đáng ghé thăm dành cho tất cả mọi người.<br />
                    </div>
                </Col>
                <Col xxl={4} style={{ border: '1px solid green' }}>
                </Col>
            </Row>
        </div>
    )
}
export default GioiThieu