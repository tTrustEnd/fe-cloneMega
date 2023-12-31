import { useEffect, useState } from 'react'
import "react-image-gallery/styles/scss/image-gallery.scss";
import { getFilmsByFieldSV, getFilmsSV } from '../../../service/api';
import { Modal, Pagination } from 'antd';
import './index.scss'
import { FieldTimeOutlined, PlayCircleOutlined, TagOutlined } from '@ant-design/icons';
import { FaYoutube } from "react-icons/fa6";
import { IFilm } from '../page/phim';
import { NavLink, useNavigate } from 'react-router-dom';

const FilmsNow = () => {
    // function scrollToTop() {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth' // Để có hiệu ứng cuộn mượt
    //     });
    //   }
    const [listFilms, setListFilms] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, _setPageSize] = useState(4)
    const [query, _setQuery] = useState('')
    const [showVideo, setShowVideo] = useState(false);
    const [srcTrailer, setSrcTrailer] = useState('')
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    const onChangePage = async (page: any) => {
        setCurrent(page)
        const query = `page=${page}&limit=${pageSize}`
        const res = await getFilmsByFieldSV(query)
        setListFilms(res.data)

    }
    const getFilm = async (query: any) => {
        const allFilm = await getFilmsSV()
        if (allFilm && allFilm.data && allFilm.data.length > 0) {
            setTotal(allFilm.data.length)
        }
        query = `page=${current}&limit=${pageSize}`
        const result = await getFilmsByFieldSV(query)
        if (result && result.data) {
            setListFilms(result.data)
        }
    }

    const showTrailer = (item: IFilm) => {
        setShowVideo(true)
        setSrcTrailer(item.trailer)

    }
    const handleCancel = async () => {
        await setSrcTrailer('')
        await setShowVideo(false);

    };

    useEffect(() => {
        getFilm(query)
    }, [query, current, pageSize])
    return (
        <div style={{ display: 'block' }}>

            <div style={{ display: 'flex' }}>
                <Modal
                    width={'100%'}
                    style={{ paddingTop: 25 }}
                    footer title="s" open={showVideo} onCancel={handleCancel}>
                    <iframe className='fullscreen-iframe' width="100% " height={800} style={{ margin: '0 auto' }}
                        src={srcTrailer}
                        title="THE FLASH | OFFICIAL TRAILER 2 | DỰ KIẾN KHỞI CHIẾU 16.06.2023"
                    >
                    </iframe>
                </Modal>
                {listFilms.map((item: IFilm, index) => {
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


                                <div style={{ display: 'flex', paddingRight: 55, color: 'yellow' }}>
                                    {`>>`} Chọn vào xuất chiếu để đặt vé
                                </div>

                                <div style={{ display: 'flex', paddingRight: 55 }}>
                                    <PlayCircleOutlined style={{ color: 'yellow', paddingTop: 5 }} />&nbsp;  {item.sub}
                                </div>


                            </div>
                            <div className='bottom-left group-btn' style={{ display: 'flex', paddingTop: 100 }} >
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
                                        <a href={`/phim/${item.name}`}  style={{ fontWeight: 700, margin: '0 auto' }}>Xem chi tiết</a>
                                    </button >
                                </div>

                                <div>
                                    <button title='Xem chi tiết' className='btn btn-warning'>   
                                        <a href={`/phim/${item.name}`} style={{ fontWeight: 700, margin: '0 auto' }}> Mua vé</a>
                                    </button >
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
                    total={total}
                />
            </div>


        </div>


    )
}
export default FilmsNow;