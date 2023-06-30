import { useEffect, useState } from 'react'
import { getFilmsByFieldSV, getFilmsSV } from '../../../../service/api'
import { Col, Modal, Row, Tabs } from 'antd'
import './index.scss'
import { CalendarOutlined, FieldTimeOutlined, TagOutlined } from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import CurrentPage from '../currentPage'

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
const Phim = () => {
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
    const showTrailer = (item: IFilm) => {
        setShowVideo(true)
        setSrcTrailer(item.trailer)

    }
    const handleCancel = async() => {
        await setSrcTrailer('')
       await setShowVideo(false);
    };

    useEffect(() => {
        getFilm()
    }, [])
    const items = [
        {
            key: '1',
            label: <div className='btn' ><button className='btn btn-warning'> <h4 style={{ margin: '0 auto', textAlign: 'center' }}>PHIM ĐANG CHIẾU</h4> </button> </div>,
            children:

                <Row gutter={[20, 20]} style={{ display: 'flex', justifyContent: 'center', paddingLeft: '100px', paddingRight: 100, background: '#bebebe' }}>

                    <Modal
                        width={'100%'} footer={false} title="s" open={showVideo} onCancel={handleCancel}>
                        {showVideo && <iframe className="fullscreen-iframe" width="100% "
                            src={srcTrailer}
                            title="THE FLASH | OFFICIAL TRAILER 2 | DỰ KIẾN KHỞI CHIẾU 16.06.2023"
                        >
                        </iframe>}
                    </Modal>



                    {listFilms && listFilms.length > 0 &&
                        listFilms.map((item: IFilm, index) => {
                            return (
                                <Col xl={11}>
                                    <div className='khung' style={{ display: 'flex', background: ' rgb(190, 169, 127' }} key={`${index}`}>

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
                                            <div><button style={{position:'absolute'}} className='btn btn-warning' onClick={() => showTrailer(item)}> {`>>`}trailer</button> </div>

                                        </div>

                                    </div>
                                </Col>

                            )
                        })
                    }
                </Row>



        },
        {
            key: '2',
            label: <div className='btn'> <button className='btn btn-warning'><h4 style={{ margin: '0 auto', textAlign: 'center' }}>PHIM SẮP CHIẾU</h4></button> </div>,
            children:<></>
        }

          
    ];
    const onChange = (key: any) => {
        console.log(key);
    };
    return (
        <div>
            <CurrentPage
                page={'phim'}
            />
            <Tabs
                className='tab' items={items} onChange={onChange} />
        </div>
    )
}
export default Phim;