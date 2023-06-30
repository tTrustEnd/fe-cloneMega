import { useEffect, useState } from 'react'
import { getFilmsByFieldSV, getFilmsSV, updateChair } from '../../../../service/api'
import { Col, Modal, Row, Tabs } from 'antd'
import './index.scss'
import { CalendarOutlined, FieldTimeOutlined, TagOutlined } from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import CurrentPage from '../currentPage'
import ModalBuyTicket from '../ModalBuyTicket'

export interface IFilm {
    _id: string,
    name: string,
    image: string,
    time: string,
    caterogy: string,
    premiere: string,
    director: string,
    actor: string,
    sub: string,
    trailer: string,
    sumary: string
}
const LichChieu = () => {
    const navigate = useNavigate()
    const [listFilms, setListFilms] = useState([])
    const [showVideo, setShowVideo] = useState(false);
    const [srcTrailer, setSrcTrailer] = useState('');
    const getFilm = async () => {
        const result = await getFilmsSV()
        if (result && result.data) {
            setListFilms(result.data)
        }
    }

    const handleBuy = (item) => {
        navigate(`/phim/${item.name}`)
    }
    useEffect(() => {
        getFilm()
    }, [])

    return (
        <div>
            <CurrentPage
                page={'lich-chieu'}
            />
            <Row className='BODY' gutter={[20, 20]} style={{ display: 'flex', justifyContent: 'center', paddingTop: 40 }}>
                <div className="title-rap" style={{ width: 1140 }} >
                    <h2 style={{ paddingTop: 5, color: 'white' }}> LỊCH CHIẾU</h2>
                </div>
                <div style={{ background: '#a9a4a4', paddingTop: 10 }}>
                    {listFilms && listFilms.length > 0 &&
                        listFilms.map((item: IFilm, index) => {
                            return (
                                <div className='khung' style={{ display: 'flex', background: 'rgb(70, 64, 64)', width: 1140, paddingBottom: 25 }} key={`${index}`}>

                                    <div className="image">
                                        <NavLink to={`/phim/${item.name}`}> <img src={`${import.meta.env.VITE_BASE_URL}/imagefilms/${item.image}`} alt="" /></NavLink>
                                    </div>
                                    <div className='contentss' style={{ paddingLeft: 15 }}>
                                        <div><NavLink to={`/phim/${item.name}/`}>{item.name} </NavLink></div>
                                        <div style={{ display: 'flex' }}>
                                            <FieldTimeOutlined style={{ paddingTop: 5 }} />  &nbsp;  <span> Thời lượng: {item.time}</span> </div>
                                        <div style={{ display: 'flex' }}><TagOutlined style={{ paddingTop: 5 }} />   &nbsp;<span>Thể loại: {item.caterogy}</span> </div>
                                        <div style={{ display: 'flex' }}> <CalendarOutlined style={{ paddingTop: 5 }} />  &nbsp;<span>Khởi chiếu: {item.premiere}</span></div>
                                        <div><span>Đạo diễn: </span>{item.director}</div>
                                        <div><span>Diễn viên: </span>{item.actor}</div>
                                        <div><span>Phụ đề: </span>{item.sub}</div>
                                        <div style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</div>
                                        <button onClick={() => handleBuy(item)} className="btn btn-warning"><b>Đặt vé</b></button>
                                    </div>
                                </div>


                            )
                        })
                    }
                </div>
            </Row>

        </div>
    )
}
export default LichChieu;