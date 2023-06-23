import { useLocation } from "react-router-dom";
import { getFilmsByFieldSV, getFilmsSV } from "../../../../../service/api";
import { useEffect, useState } from "react";
import './index.scss'
import { IFilm } from "..";
import { CalendarOutlined, FieldTimeOutlined, PlaySquareFilled, TagOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const DetailFilm = () => {
    const [film, setFilm] = useState([])
    const location: any = useLocation()
    const path = location.pathname;
    const Remove = '/phim/'
    const charRv2 = '/'
    const removeCharacter = (str: string, char: string) => {
        const result = str.replace(new RegExp(char, 'g'), '');

        return result;
    }
    const [showVideo, setShowVideo] = useState(false);
    const [srcTrailer, setSrcTrailer] = useState('');
    const outputString = removeCharacter(path, Remove);
    const name = removeCharacter(outputString, charRv2)
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
    return (
        <div>
            <Modal
                width={'100%'} footer={false} title="s" open={showVideo} onCancel={handleCancel}>
                {showVideo && <iframe width="100% " height={800} style={{ margin: '0 auto' }}
                    src={srcTrailer}
                    title="THE FLASH | OFFICIAL TRAILER 2 | DỰ KIẾN KHỞI CHIẾU 16.06.2023"
                >
                </iframe>}
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
                                            <img src={`${import.meta.env.VITE_BASE_URL}/imagefilms/${item.image}`} alt="" />
                                            <div style={{ display: 'flex', justifyItems: 'center' }} className="centered">
                                                <div onClick={() => showTrailer(item)} className="play">
                                                    <img width={60} src="https://www.megagscinemas.vn/images/home/play-icon.png" alt="" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })

            }


        </div>

    )
}
export default DetailFilm;