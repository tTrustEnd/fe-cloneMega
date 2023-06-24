import { useLocation } from "react-router-dom";
import { getFilmsByFieldSV, getFilmsSV } from "../../../../../service/api";
import { useEffect, useState } from "react";
import './index.scss'
import { IFilm } from "..";
import { CalendarOutlined, FieldTimeOutlined, PlaySquareFilled, TagOutlined } from "@ant-design/icons";
import { Col, Modal, Row } from "antd";
import FilmsNow from "../../../filmsNow";

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
                                            <div className="background">
                                                <img src={`${import.meta.env.VITE_BASE_URL}/imagefilms/${item.image}`} alt="" />
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
                            <Row gutter={[20, 20]} style={{ paddingTop: 35 }} >
                                <Col xxl={4}>
                                </Col>
                                <Col xxl={16} style={{ background: 'rgba(0,0,0,.6)' }}>
                                    <div style={{ paddingTop: 25 }}>
                                        <span style={{ fontSize: 35, color: 'white', fontWeight: 900, paddingLeft: 35, paddingTop: 35 }}>LỊCH CHIẾU-{item.name}</span>
                                    </div>
                                    <div className="underline"></div>
                                    <div style={{ paddingBottom: 25 }}>
                                        <b style={{ color: '#ffcf29' }}>(Click vào xuất chiếu để đặt vé )</b>
                                    </div>
                                    <Row className="datve">
                                        <Col xxl={11} style={{ paddingLeft: 35 }}>
                                            <div>Hôm nay (24/6/2023)</div>
                                            <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                            <ul style={{ display: 'flex' }}>
                                                <button className="btn btn-warning">13:40</button>
                                                <div style={{ padding: '0 10px' }}>
                                                    <button className="btn btn-warning">17:30</button>
                                                </div>
                                                <button className="btn btn-warning">19:55</button>
                                            </ul>
                                            <div>Ngày mai (25/6/2023)</div>
                                            <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                            <ul style={{ display: 'flex' }}>
                                                <button className="btn btn-warning">08:40</button>
                                                <div style={{ paddingLeft: 10 }}>
                                                    <button className="btn btn-warning">13:40</button></div>
                                                <div style={{ padding: '0 10px' }}>
                                                    <button className="btn btn-warning">17:30</button>
                                                </div>
                                                <button className="btn btn-warning">19:55</button>
                                            </ul>
                                            <div>Ngày mốt (26/6/2023)</div>
                                            <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                            <ul style={{ display: 'flex' }}>
                                                <button className="btn btn-warning">08:40</button>
                                                <div style={{ paddingLeft: 10 }}>
                                                    <button className="btn btn-warning">13:40</button></div>
                                                <div style={{ padding: '0 10px' }}>
                                                    <button className="btn btn-warning">17:30</button>
                                                </div>
                                                <button className="btn btn-warning">19:55</button>
                                            </ul>
                                            <div style={{ paddingBottom: 25 }}></div>
                                        </Col>
                                        <Col className="vertical-line"></Col>
                                        <Col xxl={12} style={{ paddingLeft: 35 }}>
                                            <div>27/6/2023</div>
                                            <ul><h6 style={{ color: '#ffcf29', fontSize: 20, fontWeight: 900 }}>RẠP CAO THẮNG</h6></ul>
                                            <ul style={{ display: 'flex' }}>
                                                <button className="btn btn-warning">08:40</button>
                                                <div style={{ paddingLeft: 10 }}>
                                                    <button className="btn btn-warning">13:40</button></div>
                                                <div style={{ padding: '0 10px' }}>
                                                    <button className="btn btn-warning">17:30</button>
                                                </div>
                                                <button className="btn btn-warning">19:55</button>
                                            </ul>
                                        </Col>
                                    </Row>

                                </Col>
                                <Col xxl={5}>
                                </Col>
                            </Row>
                            <Row gutter={[20, 20]} style={{ paddingTop: 35 }}>
                                <Col xxl={4}></Col>
                                <Col xxl={16} style={{ background: 'rgba(0,0,0,.6)' }}>
                                    <span style={{ paddingTop: 25, fontSize: 30, fontWeight: 700, color: 'white', paddingLeft: 35 }}>
                                        Các phim khác
                                        <div className="underline"></div>
                                    </span>
                                    <div>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                    </div>

                                    <div style={{ paddingLeft: 300 }}>


                                    </div >
                                </Col>
                                <div style={{ paddingLeft: 320 }}>

                                    <FilmsNow />
                                </div>
                                <Col xxl={5}></Col>
                            </Row>

                        </div>

                    )
                })
            }


        </div>

    )
}
export default DetailFilm;