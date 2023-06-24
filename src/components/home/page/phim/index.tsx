import { useEffect, useState } from 'react'
import { getFilmsByFieldSV, getFilmsSV } from '../../../../service/api'
import { Col, Modal, Row, Tabs } from 'antd'
import './index.scss'
import { CalendarOutlined, FieldTimeOutlined, TagOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
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
    const handleCancel = () => {
        setShowVideo(false);
        setSrcTrailer('')
    };

    useEffect(() => {
        getFilm()
    }, [])
    const items = [
        {
            key: '1',
            label: <div className='btn' ><button className='btn btn-warning'> <h4 style={{ margin: '0 auto', textAlign: 'center' }}>PHIM ĐANG CHIẾU</h4> </button> </div>,
            children:

                <Row gutter={[20, 20]} style={{ paddingLeft: 350, background: '#bebebe' }}>

                    <Modal
                        width={'100%'} footer={false} title="s" open={showVideo} onCancel={handleCancel}>
                        {showVideo && <iframe width="100% " height={800} style={{ margin: '0 auto' }}
                            src={srcTrailer}
                            title="THE FLASH | OFFICIAL TRAILER 2 | DỰ KIẾN KHỞI CHIẾU 16.06.2023"
                        >
                        </iframe>}
                    </Modal>

                    {listFilms && listFilms.length > 0 &&
                        listFilms.map((item: IFilm, index) => {
                            return (

                                <div className='khung' style={{ display: 'flex', background: ' rgb(190, 169, 127' }} key={`${index}`}>

                                    <div className="image">
                                        <a href={`phim/${item.name}`}> <img src={`${import.meta.env.VITE_BASE_URL}/imagefilms/${item.image}`} alt="" /></a>
                                    </div>
                                    <div className='contentss' style={{ width: 300, paddingLeft: 15 }}>
                                        <div><a href={`/phim/${item.name}/`}>{item.name} </a></div>
                                        <div style={{ display: 'flex' }}>
                                            <FieldTimeOutlined style={{ paddingTop: 5 }} />  &nbsp;  <span> Thời lượng:</span> {item.time}</div>
                                        <div style={{ display: 'flex' }}><TagOutlined style={{ paddingTop: 5 }} />   &nbsp;<span>Thể loại: </span> {item.caterogy}</div>
                                        <div style={{ display: 'flex' }}> <CalendarOutlined style={{ paddingTop: 5 }} />  &nbsp;<span>Khởi chiếu: </span>{item.premiere}</div>
                                        <div><span>Đạo diễn: </span>{item.director}</div>
                                        <div><span>Diễn viên: </span>{item.actor}</div>
                                        <div><span>Phụ đề: </span>{item.sub}</div>
                                    </div>
                                    <div><button className='btn btn-warning' onClick={() => showTrailer(item)}> {`>>`}trailer</button> </div>

                                </div>



                            )
                        })
                    }
                </Row>



        },
        {
            key: '2',
            label: <div className='btn'> <button className='btn btn-warning'><h4 style={{ margin: '0 auto', textAlign: 'center' }}>PHIM SẮP CHIẾU</h4></button> </div>,
            children:

                <Row gutter={[20, 20]} style={{ paddingLeft: 350, background: '#bebebe' }}>

                    <Modal
                        width={'100%'} footer={false} title="s" open={showVideo} onCancel={handleCancel}>
                        {showVideo && <iframe width="100% " height={800} style={{ margin: '0 auto' }}
                            src={srcTrailer}
                            title="THE FLASH | OFFICIAL TRAILER 2 | DỰ KIẾN KHỞI CHIẾU 16.06.2023"
                        >
                        </iframe>}
                    </Modal>

                    {listFilms && listFilms.length > 0 &&
                        listFilms.map((item: IFilm, index) => {
                            return (

                                <div className='khung' style={{ display: 'flex', background: ' rgb(190, 169, 127' }} key={`${index}`}>

                                    <div className="image">
                                        <a href={`phim/${item.name}`}> <img src={`${import.meta.env.VITE_BASE_URL}/imagefilms/${item.image}`} alt="" /></a>
                                    </div>
                                    <div className='contentss' style={{ width: 300, paddingLeft: 15 }}>
                                        <div><a href={`/phim/${item.name}/`}>{item.name} </a></div>
                                        <div style={{ display: 'flex' }}>
                                            <FieldTimeOutlined style={{ paddingTop: 5 }} />  &nbsp;  <span> Thời lượng:</span> {item.time}</div>
                                        <div style={{ display: 'flex' }}><TagOutlined style={{ paddingTop: 5 }} />   &nbsp;<span>Thể loại: </span> {item.caterogy}</div>
                                        <div style={{ display: 'flex' }}> <CalendarOutlined style={{ paddingTop: 5 }} />  &nbsp;<span>Khởi chiếu: </span>{item.premiere}</div>
                                        <div><span>Đạo diễn: </span>{item.director}</div>
                                        <div><span>Diễn viên: </span>{item.actor}</div>
                                        <div><span>Phụ đề: </span>{item.sub}</div>
                                    </div>
                                    <div><button className='btn btn-warning' onClick={() => showTrailer(item)}> {`>>`}trailer</button> </div>

                                </div>



                            )
                        })
                    }
                </Row>,
        },
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