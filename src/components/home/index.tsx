import ImageGallery from 'react-image-gallery';
import { useEffect, useState } from 'react'
import './index.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";
import Baner1 from '../../../src/public/xu-so-banner.png';
import Baner2 from '../../../src/public/flash-banner-1.png';
import Baner3 from '../../../src/public/doremon-banner.png'
import { Col, Modal, Row, Select, Tabs, message } from 'antd';
import FilmsNow from './filmsNow';
import { getChairs, getFilmsByFieldSV, getFilmsSV, updateChair } from '../../service/api';
import { IFilm } from './page/phim';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { doBuyFilm } from '../../redux/buy/buySlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IfilmSelected } from '../../redux/store';
export interface IChair {
    name: string,
    price: number
}
const images = [
    {
        original: Baner1,
        description:
            <div className='image-gallery-description'
                style={{ display: 'flex', justifyContent: 'end', width: 1400, background: 'none' }}>
                <div style={{ paddingTop: '100px', marginBottom: 0 }}>
                    <button
                        className='btn btn-warning'>
                        <a className='nav-link' href='/phim/XỨ%20SỞ%20CÁC%20NGUYÊN%20TỐ%20%7C%20ELEMENTAL/'><h4 style={{ paddingTop: 10 }}>Xem chi tiết</h4></a>
                    </button>
                </div>

            </div>

    },
    {
        original: Baner2,
        description:
            <div className='image-gallery-description'
                style={{ display: 'flex', justifyContent: 'end', width: 1400, background: 'none' }}>
                <div style={{ paddingTop: '100px', marginBottom: 0 }}>
                    <button
                        className='btn btn-warning'>
                        <a className='nav-link' href='/phim/THE%20FLASH'><h4 style={{ paddingTop: 10 }}>Xem chi tiết</h4></a>
                    </button>
                </div>

            </div>
    },
    {
        original: Baner3,
        description:
            <div className='image-gallery-description'
                style={{ display: 'flex', justifyContent: 'end', width: 1400, background: 'none' }}>
                <div style={{ paddingTop: '100px', marginBottom: 0 }}>
                    <button
                        className='btn btn-warning'>
                        <a className='nav-link' href='/phim/PHIM%20ĐIỆN%20ẢNH%20DORAEMON:%20NOBITA%20VÀ%20VÙNG%20ĐẤT%20LÝ%20TƯỞNG%20TRÊN%20BẦU%20TRỜI/'>
                            <h4 style={{ paddingTop: 10 }}>Xem chi tiết</h4></a>
                    </button>
                </div>

            </div>
    },
];
const Home = () => {
    const user = useSelector((state:any) => state.user.account.user)
    const [openVe, setOpenVe] = useState(false)
    const [listFilms, setListFilms] = useState([])
    const [filmSelected, setFilmSelected] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [chair, setChair] = useState<any>()
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [totalMonney1, setTotalMonney1] = useState(0)
    const [quantity1, setQuantity1] = useState(0)
    const [quantity2, setQuantity2] = useState(0)
    const [quantity3, setQuantity3] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const film = useSelector((state: any) => state.film)
    const getAllFilms = async () => {
        const res = await getFilmsSV()
        if (res && res.data) {
            setListFilms(res.data)
        }
    }
    const getChair = async () => {
        const res = await getChairs();
        setChair(res.data)
    }
    useEffect(() => {
        getChair()
        getAllFilms()
    }, [])
    const handleChange = async (value) => {
        const res = await getFilmsByFieldSV(`name=/${value}/i`)
        if (res?.data?.length) {
            setFilmSelected(res.data)
            setOpenVe(true)
        }

    };
    const onChange = (key) => {
        console.log(key)
    };
    // { value: 'MEGA LÝ CHÍNH THẮNG', label: 'MEGA LÝ CHÍNH THẮNG' },
    // { value: 'MEGA CAO THẮNG', label: 'MEGA CAO THẮNG' },
    const optionsFilms = listFilms.map((item: IFilm, index) => {
        return {
            value: item.name,
            lable: index
        }
    })
    const divElement = document.getElementById("mua-ves");

    document.addEventListener("click", function (event: any) {
        // Kiểm tra xem phần tử được click có là phần tử div hay không
        if (!event.target.closest("#mua-ves")) {
            setOpenVe(false)
        }

    })
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
    const items = [
        {
            key: '1',
            label: <div className='btn' style={{ display: 'flex', justifyItems: 'center' }}>
                <button className='btn btn-warning'>
                    <h4 style={{ margin: '0 auto', textAlign: 'center', opacity: 0.9, fontWeight: 800 }}>PHIM ĐANG CHIẾU</h4> </button> </div>,
            children: <FilmsNow />,
        },
        {
            key: '2',
            label: <div className='btn'>
                <button className='btn btn-warning'>
                    <h4 style={{ margin: '0 auto', textAlign: 'center', opacity: 0.9, fontWeight: 800 }}>PHIM SẮP CHIẾU</h4>
                </button> </div>,
            children: <>s</>,
        },
    ];
    const handleBuy = async(item) => {
        await updateChair(0)
        console.log(item)
        setIsModalOpen(true)
        dispatch(doBuyFilm(item))

    }
    const handleChair = () => {
        console.log('check chair', chair)
        if (quantity1 > 0 || quantity2 > 0 || quantity3 > 0) {
            const filmSelected = film.film.name
            console.log(filmSelected)
            navigate(`/booking/${filmSelected}`)
        }
        else {
            message.error('Bạn cần chọn ít nhất 1 vé để mua')
        }
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = async () => {
        setValue1(0)
        setValue2(0)
        setValue3(0)
        setQuantity1(0)
        setQuantity2(0)
        setQuantity3(0)
        setIsModalOpen(false);
        await updateChair()
    };
    return (
        <div className="mega-content">
            <div className='home-baner'>
                <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showBullets={true}
                    showPlayButton={false}
                    autoPlay={true}
                />
            </div>
            <div className='booking-form' >
                <div className='wrapper'>
                    <div className='contents'>
                        <div className='title'>
                            <h3>MUA VÉ ONLINE</h3>
                            <p>
                                <b>(*) </b>
                                Chọn vào xuất chiếu để đặt vé trực tuyến
                            </p>
                        </div>
                    </div>
                    <Modal className='modal-buy'
                        width={800} footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                                <Col style={{ textAlign: 'center', }} xxl={5} xl={12} lg={12} >
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
                                    onClick={() => handleChair()} style={{ display: 'flex', color: 'black' }} className='btn btn-warning'>Chọn ghế</button>
                            </div>

                        </div>

                    </Modal>
                    {openVe &&
                        <div className='mua-ves' id="mua-ves" >

                            {filmSelected &&
                                filmSelected.map((item: IFilm, index) => {
                                    return (
                                        <div key={`${index}`} style={{ background: 'rgba(49, 49, 50, 0.7)' }}>

                                            <div style={{ paddingTop: 25 }}>

                                                <span key={`${index}`} style={{ fontSize: 25, color: 'white', fontWeight: 900, paddingLeft: 35, paddingTop: 35 }}>
                                                    {item.name}</span>
                                            </div>
                                            <div ></div>
                                            <div style={{ paddingBottom: 25 }}>
                                                <b style={{ color: '#ffcf29' }}>(Click vào xuất chiếu để đặt vé )</b>
                                            </div>
                                            <div className="datve">
                                                <div style={{ paddingLeft: 35 }}>
                                                    <div>Hôm nay (24/6/2023)</div>
                                                    <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                                    <ul style={{ display: 'flex' }}>
                                                        <button onClick={() => handleBuy(item)} className="btn btn-warning">13:40</button>
                                                        <div style={{ padding: '0 10px' }}>
                                                            <button onClick={() => handleBuy(item)} className="btn btn-warning">17:30</button>
                                                        </div>
                                                        <button onClick={() => handleBuy(item)} className="btn btn-warning">19:55</button>
                                                    </ul>
                                                    <div>Ngày mai (25/6/2023)</div>
                                                    <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                                    <ul style={{ display: 'flex' }}>
                                                        <button onClick={() => handleBuy(item)} className="btn btn-warning">08:40</button>
                                                        <div style={{ paddingLeft: 10 }}>
                                                            <button onClick={() => handleBuy(item)} className="btn btn-warning">13:40</button></div>
                                                        <div style={{ padding: '0 10px' }}>
                                                            <button onClick={() => handleBuy(item)} className="btn btn-warning">17:30</button>
                                                        </div>
                                                        <button onClick={() => handleBuy(item)} className="btn btn-warning">19:55</button>
                                                    </ul>
                                                    <div>Ngày mốt (26/6/2023)</div>
                                                    <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                                    <ul style={{ display: 'flex' }}>
                                                        <button onClick={() => handleBuy(item)} className="btn btn-warning">08:40</button>
                                                        <div style={{ paddingLeft: 10 }}>
                                                            <button onClick={() => handleBuy(item)} className="btn btn-warning">13:40</button></div>
                                                        <div style={{ padding: '0 10px' }}>
                                                            <button onClick={() => handleBuy(item)} className="btn btn-warning">17:30</button>
                                                        </div>
                                                        <button onClick={() => handleBuy(item)} className="btn btn-warning">19:55</button>
                                                    </ul>
                                                    <div style={{ paddingBottom: 25 }}></div>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Select
                            defaultValue="MEGA CAO THẮNG"
                            style={{ width: 230 }}
                            onChange={handleChange}
                            options={[
                                { value: 'MEGA LÝ CHÍNH THẮNG', label: 'MEGA LÝ CHÍNH THẮNG' },
                                { value: 'MEGA CAO THẮNG', label: 'MEGA CAO THẮNG' },
                            ]}
                        />
                        <Select
                            defaultValue="CHỌN PHIM"
                            style={{ width: 230 }}
                            onChange={handleChange}
                            options={optionsFilms}
                        />
                        <Select
                            defaultValue="CHỌN NGÀY"
                            style={{ width: 230 }}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='mega-films'>
                <Tabs
                    className='tab' items={items} onChange={onChange} />
            </div >
            <div className='all' style={{ display: 'flex', justifyContent: 'center', padding: '15px 0' }}>
                <a href="/phim"><h2>Xem tất cả</h2></a>
            </div>

            <div className='advertise-wrap'>
                <div className='content'>
                    <a href="/uu-dai/">
                        <img title='Quảng cáo' src="https://cms.megagscinemas.vn//media/76783/banner-advertise-1.png" className="img-responsive" />
                    </a>
                </div>
            </div>
            <div className="big-offer img">
                <a title="ƯU ĐÃI HỌC SINH - SINH VIÊN GIỎI HÈ 2023" className="bg-special" href="/uu-dai/uu-dai-hoc-sinh-sinh-vien-gioi-he-2023/">
                    <img alt="ƯU ĐÃI HỌC SINH - SINH VIÊN GIỎI HÈ 2023"
                        src="https://cms.megagscinemas.vn//media/77066/hè-1920-1080-px-1.png?width=745&amp;height=420"
                        style={{ width: 745, height: 420 }} />
                </a>
            </div>


        </div>

    )
}
export default Home;