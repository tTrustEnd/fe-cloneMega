import { useLocation, useNavigate } from "react-router-dom";
import { getChairs, getFilmsByFieldSV, updateChair } from "../../../../../service/api";
import { useEffect, useState } from "react";
import './index.scss'
import { IFilm } from "..";
import { CalendarOutlined, FieldTimeOutlined, MinusCircleOutlined, PlusCircleOutlined, TagOutlined } from "@ant-design/icons";
import { Col, Modal, Row, message } from "antd";
import FilmsNow from "../../../filmsNow";
import { doBuyFilm } from "../../../../../redux/buy/buySlice";
import { useDispatch } from "react-redux";
import { IChair } from "../../..";
import { useSelector } from "react-redux";

const DetailFilm = () => {
    const user = useSelector((state:any) => state.user.account.user)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const [chair, setChair] = useState<any>()
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [totalMonney1, setTotalMonney1] = useState(0)
    const [quantity1, setQuantity1] = useState(0)
    const [quantity2, setQuantity2] = useState(0)
    const [quantity3, setQuantity3] = useState(0)
    const [film, setFilm] = useState([])
    const location: any = useLocation()
    const path = location.pathname;
    const Remove = '/phim/'
    const charRv2 = '/'
    const removeCharacter = (str: string, char: string) => {
        const result = str.replace(new RegExp(char, 'g'), '');

        return result;
    }
    const navigate = useNavigate()
    const [showVideo, setShowVideo] = useState(false);
    const [srcTrailer, setSrcTrailer] = useState('');
    const outputString = removeCharacter(path, Remove);
    const name = removeCharacter(outputString, charRv2)
    const [filmSelected, setFilmSelected] = useState()
    const replaceAllCharacters = (str2: any, oldChar2: any, newChar2: any) => {
        // Sử dụng phương thức replace() kết hợp với biểu thức chính quy để thay thế tất cả các ký tự giống nhau
        const result = str2.replace(new RegExp(oldChar2, 'g'), newChar2);

        return result;
    }
    const nameFilm = replaceAllCharacters(name, '-', ' ')
    const getFilm = async () => {
        const query = `name=/${nameFilm}/i`
        const res = await getFilmsByFieldSV(query)
        setFilm(res.data)
        setFilmSelected(res.data[0])
    }
    const showTrailer = (item: IFilm) => {
        setShowVideo(true)
        setSrcTrailer(item.trailer)
    }
    const handleCancel = async () => {
        await setSrcTrailer('')
        await setShowVideo(false);
    };
    const handleBuy = async (item) => {
        await updateChair(0)
        setIsModalOpen(true)
        dispatch(doBuyFilm(item))
    }
    const getChair = async () => {
        const res = await getChairs();
        setChair(res.data)
    }
    const handleChair = (filmSelected) => {
        if (quantity1 > 0 || quantity2 > 0 || quantity3 > 0) {
            navigate(`/booking/${filmSelected.name}`)
        }
        else {
            message.error('Bạn cần chọn ít nhất 1 vé để mua')
        }
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleMinus1 = async () => {
        if (value1 > 0) {
            const data = { id: chair[0]._id, quantity: quantity1 - 1 }
            setValue1(value1 - 1), setQuantity1(quantity1 - 1)
            await updateChair(data)
        }
    }
    const handleMinus2 = async () => {
        if (value2 > 0) {
            const data = { id: chair[1]._id, quantity: quantity2 - 1 }
            setValue2(value2 - 1), setQuantity2(quantity2 - 1)
            await updateChair(data)
        }
    }
    const handleMinus3 = async () => {
        if (value3 > 0) {
            const data = { id: chair[2]._id, quantity: quantity3 - 1 }
            setValue3(value3 - 1), setQuantity3(quantity3 - 1)
            await updateChair(data)
        }
    }
    const handlePlus1 = async () => {
        if (quantity1 + quantity2 + quantity3 < 10) {
            setQuantity1(quantity1 + 1)
            setValue1(value1 + 1)
            const data = { id: chair[0]._id, quantity: quantity1 + 1 }
            await updateChair(data)
        }
        else { message.error('Bạn có thể đặt tối đa 10 vé') }
    }
    const handlePlus2 = async () => {
        if (quantity1 + quantity2 + quantity3 < 10) {
            setQuantity2(quantity2 + 1)
            setValue2(value2 + 1)
            const data = { id: chair[1]._id, quantity: quantity2 + 1 }
            await updateChair(data)
        }
        else { message.error('Bạn có thể đặt tối đa 10 vé') }
    }
    const handlePlus3 = async () => {
        if (quantity1 + quantity2 + quantity3 < 10) {
            setQuantity3(quantity3 + 1)
            setValue3(value3 + 1)
            const data = { id: chair[2]._id, quantity: quantity3 + 1 }
            await updateChair(data)
        }
        else { message.error('Bạn có thể đặt tối đa 10 vé') }
    }
    const handleCancel2 = async () => {
        setValue1(0)
        setValue2(0)
        setValue3(0)
        setQuantity1(0)
        setQuantity2(0)
        setQuantity3(0)
        setIsModalOpen(false);
        await updateChair()
    };
    useEffect(() => {
        getFilm()
        getChair()
    }, [])
    return (
        <div>
            <Modal
                width={'100%'} footer={false} title="s" open={showVideo} onCancel={handleCancel}>
                {showVideo &&
                    <iframe className="fullscreen-iframe" width="100% "
                        src={srcTrailer}
                        title="THE FLASH | OFFICIAL TRAILER 2 | DỰ KIẾN KHỞI CHIẾU 16.06.2023"
                    >
                    </iframe>}
            </Modal>
            <Modal className='modal-buy'
                width='800px' footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel2}>
                <Row gutter={[20, 20]}>
                    <Col xxl={7} >
                        <div style={{ background: '#ffca2c' }}><h6><b>LOẠI VÉ</b></h6></div>
                        {chair && chair.length &&
                            chair.map((item: IChair, index) => {
                                return (
                                    <div style={{ padding: '15px 0' }} key={`${index}`}>{item.name}</div>
                                )
                            })
                        }

                    </Col>
                    <div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>  <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>  <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                    </div>
                    {chair && chair.length &&
                        <Col style={{ textAlign: 'center', }} xxl={5} xl={12} >
                            <div style={{ background: '#ffca2c' }}><b>SỐ LƯỢNG </b> </div>
                            <div style={{ paddingTop: 20 }}>
                                <MinusCircleOutlined onClick={() => { handleMinus1() }} /> <input value={value1} style={{ width: 50, height: 22, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => handlePlus1()} />
                            </div>
                            <div style={{ paddingTop: 30 }}>
                                <MinusCircleOutlined onClick={() => handleMinus2()} /> <input value={value2} style={{ width: 50, height: 22, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => handlePlus2()} />
                            </div>
                            <div style={{ paddingTop: 30 }}>
                                <MinusCircleOutlined onClick={() => handleMinus3()} /> <input value={value3} style={{ width: 50, height: 22, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => handlePlus3()} />
                            </div>
                        </Col>}
                    <div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>  <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>  <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                    </div>
                    <Col style={{ textAlign: 'center' }} xxl={6}>
                        <div style={{ background: '#ffca2c' }}> <b>GIÁ VÉ</b></div>
                        {chair && chair.length &&
                            chair.map((item: IChair, index) => {
                                return (
                                    <div style={{ padding: '15px 0' }} key={`${index}`}>{item.price.toLocaleString()} VNĐ</div>
                                )
                            })
                        }
                    </Col>
                    <div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>  <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>  <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                    </div>
                    <Col style={{ textAlign: 'center' }} xxl={5}>

                        <div style={{ background: '#ffca2c' }}><b> THÀNH TIỀN </b></div>
                        {chair && chair.length &&
                            <div>
                                <div style={{ padding: '15px 0', color: 'red' }}>
                                    {(chair[0].price * quantity1).toLocaleString()} VNĐ
                                </div>
                                <div style={{ padding: '15px 0', color: 'red' }}>
                                    {(chair[1].price * quantity2).toLocaleString()} VNĐ
                                </div>
                                <div style={{ padding: '15px 0', color: 'red' }}>
                                    {(chair[2].price * quantity3).toLocaleString()} VNĐ
                                </div>
                            </div>
                        }
                    </Col>
                    <div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>  <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                        <div>
                            .
                        </div>  <div>
                            .
                        </div>
                        <div>
                            .
                        </div>
                    </div>
                    {chair && chair.length &&
                        <div style={{ display: 'flex', color: 'red', fontSize: 20, textAlign: 'center' }}>
                            <div style={{ paddingLeft: 500 }}>
                                Tổng cộng: {(chair[0].price * quantity1 + chair[1].price * quantity2 + chair[2].price * quantity3).toLocaleString()} VNĐ
                            </div>
                        </div>

                    }
                    <div className='underline'>

                    </div>
                </Row>
                {!user && <div className='botModal' style={{ paddingLeft: 350 }}>
                            <a href="/login">Đăng nhập</a> / <a href="/register">Đăng ký</a> Thành viên Mega+ để tích lũy điểm
                        </div>}
                <div style={{ display: 'flex', paddingTop: 30 }}>
                    <b>Ghi chú: </b> &nbsp; <div style={{ color: 'red' }}> Mỗi lần đặt vé bạn chỉ được chọn tối đa 10 vé.</div>
                    <div style={{ paddingLeft: 290 }}>
                        <button
                            onClick={() => handleChair(filmSelected)} style={{ display: 'flex', color: 'black' }} className='btn btn-warning'>Chọn ghế</button>
                    </div>

                </div>

            </Modal>
            {film &&
                film.map((item: IFilm, index: number) => {
                    return (
                        <div key={`${index}`}>
                            <div className="contents-page" >
                                <div>
                                    <a href="/">Trang chủ </a> {'> '}
                                    <a href="/phim">Phim</a>
                                </div>
                                <div className="title">
                                    <h1>
                                        {item.name}
                                    </h1>
                                </div>
                            </div>

                            <div className="movie-detail-wapper" style={{ background: '#333' }}>
                                <div className="contents-page"  >
                                    <div className="dt-contents">
                                        <div className="dt-left clearfix">

                                            <div style={{ paddingTop: 20, display: 'flex' }}>
                                                <FieldTimeOutlined style={{ paddingTop: 5, color: 'rgb(224, 210, 11)' }} /> &nbsp;
                                                <span style={{ color: 'rgb(224, 210, 11)' }}><b>Thời lượng: </b>
                                                    {item.time}
                                                </span>
                                                &nbsp; &nbsp; <TagOutlined style={{ paddingTop: 5, color: 'rgb(224, 210, 11)' }} /> &nbsp;<span style={{ color: 'rgb(224, 210, 11)' }}><b>Thể loại: </b>{item.caterogy}</span>
                                            </div>

                                            <div style={{ display: 'flex' }}>
                                                <CalendarOutlined style={{ paddingTop: 5, color: 'rgb(224, 210, 11)' }} /> &nbsp;<span style={{ color: 'rgb(224, 210, 11)' }}><b>Khởi chiếu: </b>{item.premiere}</span>
                                            </div>

                                            <div >
                                                <span style={{ color: 'white', }}> <b>Đạo diễn: </b>{item.director}</span>
                                            </div>
                                            <div style={{ width: 400 }}>
                                                <span style={{ color: 'white' }}> <b>Diễn viên: </b>{item.actor}</span>
                                            </div>
                                            <div>
                                                <span style={{ color: 'white' }}> <b>Ngôn ngữ: </b>{item.sub}</span>
                                            </div>

                                            <div className="scrollable-container" >
                                                <div className="content">
                                                    {item.sumary}
                                                </div>

                                            </div>

                                        </div>

                                        <div className="container-image" style={{ display: 'flex', paddingLeft: 300, justifyContent: 'center' }}>
                                            <div className="background">
                                                <img style={{ height: '100%' }} src={`${import.meta.env.VITE_BASE_URL}/imagefilms/${item.image}`} alt="" />
                                                <div style={{ display: 'flex', justifyItems: 'center' }} className="centered">
                                                    <div onClick={() => showTrailer(item)} className="play">
                                                        <img width={60} src="https://www.megagscinemas.vn/images/home/play-icon.png" alt="" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-image">
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp;

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <Row gutter={[20, 20]} style={{ paddingTop: 35, display: 'flex', justifyContent: 'center' }} >

                                <Col xxl={16} xl={16} style={{ background: 'rgba(0,0,0,.6)' }}>
                                    <div style={{ paddingTop: 25 }}>
                                        <span style={{ fontSize: 35, color: 'white', fontWeight: 900, paddingLeft: 35, paddingTop: 35 }}>
                                            LỊCH CHIẾU-{item.name}</span>
                                    </div>
                                    <div className="underline"></div>
                                    <div style={{ paddingBottom: 25 }}>
                                        <b style={{ color: '#ffcf29' }}>(Click vào xuất chiếu để đặt vé )</b>
                                    </div>
                                    {filmSelected &&
                                        <Row className="datve">
                                            <Col xxl={11} style={{ paddingLeft: 35 }}>
                                                <div>Hôm nay (24/6/2023)</div>
                                                <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                                <ul style={{ display: 'flex' }}>
                                                    <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">13:40</button>
                                                    <div style={{ padding: '0 10px' }}>
                                                        <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">17:30</button>
                                                    </div>
                                                    <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">19:55</button>
                                                </ul>
                                                <div>Ngày mai (25/6/2023)</div>
                                                <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                                <ul style={{ display: 'flex' }}>
                                                    <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">08:40</button>
                                                    <div style={{ paddingLeft: 10 }}>
                                                        <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">13:40</button></div>
                                                    <div style={{ padding: '0 10px' }}>
                                                        <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">17:30</button>
                                                    </div>
                                                    <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">19:55</button>
                                                </ul>
                                                <div>Ngày mốt (26/6/2023)</div>
                                                <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                                <ul style={{ display: 'flex' }}>
                                                    <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">08:40</button>
                                                    <div style={{ paddingLeft: 10 }}>
                                                        <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">13:40</button></div>
                                                    <div style={{ padding: '0 10px' }}>
                                                        <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">17:30</button>
                                                    </div>
                                                    <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">19:55</button>
                                                </ul>
                                                <div style={{ paddingBottom: 25 }}></div>
                                            </Col>
                                            <Col className="vertical-line"></Col>
                                            <Col xxl={12} style={{ paddingLeft: 35 }}>
                                                <div>27/6/2023</div>
                                                <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                                <ul style={{ display: 'flex' }}>
                                                    <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">08:40</button>
                                                    <div style={{ paddingLeft: 10 }}>
                                                        <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">13:40</button></div>
                                                    <div style={{ padding: '0 10px' }}>
                                                        <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">17:30</button>
                                                    </div>
                                                    <button onClick={() => handleBuy(filmSelected)} className="btn btn-warning">19:55</button>
                                                </ul>
                                            </Col>
                                        </Row>}

                                </Col>
                                \
                            </Row>

                                        <Row style={{display:'flex',justifyContent:'center',paddingTop:30}}> 

                                        <Col xxl={16} xl={16} style={{ background: 'rgba(0,0,0,.6)',display:'flex',justifyContent:'center'}}>
                                <div>
                                <div style={{ paddingTop: 25, fontSize: 30, fontWeight: 700, color: 'white', paddingLeft: 35 }}>
                                    Các phim khác
                                    
                                </div>
                                <div className="underline"></div>
                                <div>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                </div>

                            
                                <div>
                                <FilmsNow />
                                </div>
                                </div>
                            
                               
                            </Col>

                                        </Row>
                      




                        </div>

                    )
                })
            }


        </div>

    )
}
export default DetailFilm;