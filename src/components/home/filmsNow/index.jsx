import { useEffect, useState } from 'react'
import "react-image-gallery/styles/scss/image-gallery.scss";
import { getFilmsByFieldSV, getFilmsSV } from '../../../service/api';
import { Pagination, } from 'antd';
import './index.scss'
import { FieldTimeOutlined, PlayCircleOutlined, PlaySquareOutlined, TagOutlined } from '@ant-design/icons';
import { FaYoutube } from "react-icons/fa6";
const FilmsNow = () => {
    const [listFilms, setListFilms] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(4)
    const [query, setQuery] = useState('')
    const [showVideo, setShowVideo] = useState(false);
    const [srcTrailer, setSrcTrailer] = useState('https://www.youtube.com/watch?v=yoaH00LdkIo')
    const onChangePage = async (page) => {
        if (page != current) {
            setCurrent(page)
            const query = `page=${page}&limit=${3}`
            let res = await getFilmsByFieldSV(query)
            setListFilms(res.data)
        }
    }
    const getFilm = async (query) => {
        query = `page=${current}&limit=${pageSize}`
        let result = await getFilmsByFieldSV(query)
        if (result && result.data) {
            setListFilms(result.data)
        }
    }

    const showTrailer = (item) => {
        console.log(item.name)

        setShowVideo(true)
        if (item.name === 'THE FLASH') {
            console.log('s')
            setSrcTrailer("https://www.youtube.com/embed/yoaH00LdkIo")
        }
    }

    useEffect(() => {
        getFilm(query)
    }, [current, pageSize,query])
    return (
        <div style={{ display: 'block' }}>
            {showVideo &&
                <iframe width="1780 " height="1080"
                    src={srcTrailer}
                    title="THE FLASH | OFFICIAL TRAILER 2 | DỰ KIẾN KHỞI CHIẾU 16.06.2023"
                    autoPlay={true}
                >
                </iframe>
            }
            <div style={{ display: 'flex' }}>

                {listFilms.map((item, index) => {
                    return (
                        <div className="container" key={`${index}`}>
                            <img
                                className='img'
                                height={400}
                                src={`${import.meta.env.VITE_BASE_URL}/imagefilms/${item.image}`}
                                alt="" />
                            <div className="top-left" >
                                <div style={{ fontSize: 20, textAlign: 'left', }}>{item.name}</div>
                                <div style={{ display: 'flex' }}>
                                    <FieldTimeOutlined style={{ color: 'yellow', paddingTop: 5 }} /> {item.time}
                                    &nbsp;&nbsp; &nbsp;  <TagOutlined style={{ color: 'yellow', paddingTop: 5 }} />{item.caterogy}
                                </div>
                                <br /><br /><br />
                                <div style={{ paddingRight: 55 }}>
                                    <span style={{ color: '#eddede' }}>  <b style={{ color: 'red' }}>(*)</b> Chọn vào xuất chiếu để đặt vé </span>
                                </div>

                                <div style={{ display: 'flex', paddingRight: 55 }}>
                                    <PlayCircleOutlined style={{ color: 'yellow', paddingTop: 5 }} />&nbsp;  {item.sub}
                                </div>

                                <div className='group-btn' style={{ display: 'flex' }} >
                                    <div>
                                        <button
                                            onClick={() => showTrailer(item)}
                                            className='btn btn-warning'>
                                            <span
                                                style={{ fontWeight: 700, margin: '0 auto' }}>
                                                <FaYoutube
                                                    style={{ color: 'red' }} /> </span>

                                        </button>
                                    </div>

                                    <div style={{ padding: '0 8px' }}>
                                        <button title='Xem chi tiết' className='btn btn-warning'>
                                            <span style={{ fontWeight: 700, margin: '0 auto' }}>Xem chi tiết</span>
                                        </button >
                                    </div>

                                    <div>
                                        <button title='Xem chi tiết' className='btn btn-warning'>
                                            <span style={{ fontWeight: 700, margin: '0 auto' }}> Mua vé</span>
                                        </button >
                                    </div>


                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{ textAlign: 'center', paddingTop: 15 }}>
                <Pagination
                    onChange={onChangePage}
                    current={current}
                    pageSize={pageSize}
                    total={10}
                />
            </div>
        </div>


    )
}
export default FilmsNow;