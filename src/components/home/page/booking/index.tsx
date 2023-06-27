import { Col, Row, message } from "antd"
import CurrentPage from "../currentPage"
import './index.scss'
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { getChairDidBuy, getChairs } from "../../../../service/api"
import Countdown from "./countDownPassReloadPage"
import { IChair } from "../.."


const BookKing = () => {
    const [chairDidBuy, setChairDidBuy] = useState<IChair>()
    const film = useSelector((state: any) => state.film).film;
    const [green1, setGreen1] = useState(false)
    const [green2, setGreen2] = useState(false)
    const [green3, setGreen3] = useState(false)
    const [green4, setGreen4] = useState(false)
    const [green5, setGreen5] = useState(false)
    const [green6, setGreen6] = useState(false)
    const [green7, setGreen7] = useState(false)
    const [green8, setGreen8] = useState(false)
    const [green9, setGreen9] = useState(false)
    const [green10, setGreen10] = useState(false)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [value4, setValue4] = useState(0)
    const [value5, setValue5] = useState(0)
    const [price1, setPrice1] = useState(107000)
    const [price2, setPrice2] = useState(97000)
    const [price3, setPrice3] = useState(55000)
    const [price4, setPrice4] = useState(55000)
    const [price5, setPrice5] = useState(55000)

    const changeColor1 = () => {
        setGreen1(!green1)
    }
    const changeColor2 = () => {
        setGreen2(!green2)
    }
    const changeColor3 = () => {
        setGreen3(!green3)
    }
    const changeColor4 = () => {
        setGreen4(!green4)
    }
    const changeColor5 = () => {
        setGreen5(!green5)
    }
    const changeColor6 = () => {
        setGreen6(!green6)
    }
    const changeColor7 = () => {
        setGreen7(!green7)
    }
    const changeColor8 = () => {
        setGreen8(!green8)
    }
    const changeColor9 = () => {
        setGreen9(!green9)
    }
    const changeColor10 = () => {
        setGreen10(!green10)
    }
    const getChair = async () => {
        let res = await getChairDidBuy(0)
        setChairDidBuy(res.data)
    }
    useEffect(() => {
        getChair()
    }, [])

    return (
        <div>
            <CurrentPage
                page={`Booking-${film.name}`}
            />

            <Row className="body-book" gutter={[20, 20]}>

                <Col xxl={4}>
                </Col>

                <Col xxl={11} style={{ paddingTop: 30, paddingLeft: 45 }}>
                    <div style={{ display: 'flex' }} >
                        <div className="tag"> 1</div>&nbsp; <h3 style={{ paddingTop: 5, color: 'black', fontWeight: 900 }}> CHỌN VỊ TRÍ</h3>
                    </div>
                    <div className="chuthich-ghe">
                        <div>
                            <img src="	https://www.megagscinemas.vn/images/seating/25/seat_5.png" alt="" />   Ghế của bạn
                        </div>
                        <div>
                            <img src="https://www.megagscinemas.vn/images/seating/25/seat_0.png" alt="" /> Khu vực Standard
                        </div>
                        <div>
                            <img src="https://www.megagscinemas.vn/images/seating/25/seat_8.png" alt="" />Khu vực Couples
                        </div>
                        <div>
                            <img src="https://www.megagscinemas.vn/images/seating/25/seat_1.png" alt="" />  Đã bán
                        </div>
                    </div>
                    <table>
                        <tbody style={{ paddingTop: 100 }}>
                            <tr>
                                <th>A</th>
                                <td> <b>1</b><img onClick={() => changeColor1()} src={green1 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>2</b><img onClick={() => changeColor2()} src={green2 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>3</b><img onClick={() => changeColor3()} src={green3 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>4</b><img onClick={() => changeColor4()} src={green4 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>5</b><img onClick={() => changeColor5()} src={green5 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>6</b><img onClick={() => changeColor6()} src={green6 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>7</b><img onClick={() => changeColor7()} src={green7 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>8</b><img onClick={() => changeColor8()} src={green8 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>9</b><img onClick={() => changeColor9()} src={green9 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                                <td> <b>10</b><img onClick={() => changeColor10()} src={green10 ? "https://www.megagscinemas.vn/images/seating/25/seat_5.png" : "https://www.megagscinemas.vn/Images/Seating/25/seat_0.png"} alt="" /></td>
                            </tr>

                        </tbody>

                        <tbody>
                            <tr>
                                <th>B</th>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => {
                                    return (
                                        <td className="" key={`${index}`}> <b>{index + 1}</b><img onClick={() => message.error('Chọn ghế hàng A đi')} src="https://www.megagscinemas.vn/Images/Seating/25/seat_0.png" alt="" /></td>
                                    )
                                })}

                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                <th>C</th>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => {
                                    return (
                                        <td key={`${index}`}> <b>{index + 1}</b><img onClick={() => message.error('Chọn ghế hàng A đi')} src="https://www.megagscinemas.vn/Images/Seating/25/seat_0.png" alt="" /></td>
                                    )
                                })}

                            </tr>

                        </tbody>

                        <tbody>
                            <tr>
                                <th>D</th>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => {
                                    return (
                                        <td key={`${index}`}> <b>{index + 1}</b><img onClick={() => message.error('Chọn ghế hàng A đi')} src="https://www.megagscinemas.vn/Images/Seating/25/seat_0.png" alt="" /></td>
                                    )
                                })}

                            </tr>

                        </tbody>

                        <tbody>
                            <tr>
                                <th>E</th>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => {
                                    return (
                                        <td key={`${index}`}> <b>{index + 1}</b><img onClick={() => message.error('Chọn ghế hàng A đi')} src="https://www.megagscinemas.vn/Images/Seating/25/seat_3.png" alt="" /></td>
                                    )
                                })}

                            </tr>

                        </tbody>

                        <tbody>
                            <tr>
                                <th>F</th>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => {
                                    return (
                                        <td key={`${index}`}> <b>{index + 1}</b><img onClick={() => message.error('Chọn ghế hàng A đi')} src="https://www.megagscinemas.vn/Images/Seating/25/seat_3.png" alt="" /></td>
                                    )
                                })}

                            </tr>

                        </tbody>

                        <tbody>
                            <tr>
                                <th>G</th>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => {
                                    return (
                                        <td key={`${index}`}> <b>{index + 1}</b><img onClick={() => message.error('Tiếc quá! Bạn làm gì có người yêu')} src="https://www.megagscinemas.vn/Images/Seating/25/seat_8.png" alt="" /></td>
                                    )
                                })}

                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                <th>H</th>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => {
                                    return (
                                        <td key={`${index}`}> <b>{index + 1}</b><img onClick={() => message.error('Ui! Ghế có người chọn trước rồi')} src="https://www.megagscinemas.vn/Images/Seating/25/seat_1.png" alt="" /></td>
                                    )
                                })}

                            </tr>

                        </tbody>




                    </table>

                    <div className="food-container">
                        <div style={{ display: 'flex' }} >
                            <div className="tag"> 2</div>&nbsp;
                            <h3 style={{ paddingTop: 5, color: 'black', fontWeight: 900 }}>
                                CHỌN ĐỒ ĂN & THỨC UỐNG
                            </h3>
                        </div>

                        <div style={{ background: '#333', paddingLeft: 15 }}>
                            <div style={{ color: 'white', fontSize: 20, paddingBottom: 10, paddingTop: 10 }}>
                                iCombo
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex' }}>

                                    <div> <img src="https://cms.megagscinemas.vn//media/76071/combo-bigshare.png" alt="" /></div>
                                    <span style={{ paddingLeft: 15 }}>
                                        <i style={{ fontSize: 15 }}>iBIG SHARE Combo (107,000 VNĐ)</i>
                                        <div >
                                            <MinusCircleOutlined onClick={() => { if (value1 > 0) { setValue1(value1 - 1) } }} /> <input value={value1} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue1(value1 + 1) }} />
                                        </div>
                                    </span>
                                </div>

                                <div style={{ display: 'flex' }}>

                                    <div style={{ paddingLeft: 35 }}> <img src="https://cms.megagscinemas.vn//media/76070/combo-share.png" alt="" /></div>
                                    <span style={{ paddingLeft: 15 }}>
                                        <i style={{ fontSize: 15 }}>iSHARE Combo (97,000 VNĐ)</i>
                                        <div >
                                            <MinusCircleOutlined onClick={() => { if (value2 > 0) { setValue2(value2 - 1) } }} /> <input value={value2} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue2(value2 + 1) }} />
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <div style={{ color: 'white', fontSize: 20, paddingBottom: 10, paddingTop: 10 }}>
                                iPopcorn
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex' }}>

                                    <div> <img src="https://cms.megagscinemas.vn//media/76090/popcorn-caramel-40oz.png" alt="" /></div>
                                    <span style={{ paddingLeft: 15 }}>
                                        <i style={{ fontSize: 15 }}>iCaramel Popcorn 40oz (55,000 VNĐ)</i>
                                        <div >
                                            <MinusCircleOutlined onClick={() => { if (value3 > 0) { setValue3(value3 - 1) } }} /> <input value={value3} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue3(value3 + 1) }} />
                                        </div>
                                    </span>
                                </div>

                                <div style={{ display: 'flex' }}>

                                    <div style={{ paddingLeft: 15 }}> <img src="https://cms.megagscinemas.vn//media/76072/popcorn-cheese-40oz.png" alt="" /></div>
                                    <span style={{ paddingLeft: 15 }}>
                                        <i style={{ fontSize: 15 }}>Cheese Popcorn 40oz (55,000 VNĐ)</i>
                                        <div >
                                            <MinusCircleOutlined onClick={() => { if (value4 > 0) { setValue4(value4 - 1) } }} /> <input value={value4} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue4(value4 + 1) }} />
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <div style={{ color: 'white', fontSize: 20, paddingBottom: 10, paddingTop: 10 }}>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex' }}>

                                    <div> <img src="https://cms.megagscinemas.vn//media/76088/popcorn-sweet-40oz.png" alt="" /></div>
                                    <span style={{ paddingLeft: 15 }}>
                                        <i style={{ fontSize: 15 }}>iSweet Popcorn 40oz (55,000 VNĐ)</i>
                                        <div >
                                            <MinusCircleOutlined onClick={() => { if (value5 > 0) { setValue5(value5 - 1) } }} /> <input value={value5} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue5(value5 + 1) }} />
                                        </div>
                                    </span>
                                </div>
                            </div>



                        </div>


                    </div>

                </Col>

                <Col xxl={4} style={{ paddingTop: 50 }}>
                    <div style={{ display: 'flex', background: '#ffd029', width: 400 }}>
                        <img width={100} src={`${import.meta.env.VITE_BASE_URL}/imagefilms/${film.image}`} alt="" />
                        <div style={{ paddingLeft: 10 }}>
                            <h2 style={{ paddingLeft: 12 }}>Thời gian còn lại</h2>
                            <Countdown />
                        </div>
                    </div>

                    <div className="content-film">
                        <div>
                            <h4>{film.name}</h4>
                        </div>
                        <div style={{fontSize:15}}>
                            {film.sub}
                        </div>
                        <div>
                            {film.premiere}
                        </div>
                        <div>
                            {chairDidBuy && chairDidBuy[0] &&
                                <div>
                                    <span> Loại vé: </span><span style={{ color: 'red' }} >{chairDidBuy[0].name} </span>{chairDidBuy[0].quantity}<span>x</span> {chairDidBuy[0].price} VNĐ
                                </div>
                            }
                            {chairDidBuy && chairDidBuy[1] &&
                                <div>
                                    <span> Loại vé: </span> <span style={{ color: 'red' }} >{chairDidBuy[1].name} </span> {chairDidBuy[1].quantity} <span>x</span> {chairDidBuy[1].price} VNĐ
                                </div>
                            }
                            {chairDidBuy && chairDidBuy[2] &&
                                <div>
                                    <span> Loại vé: </span><span style={{ color: 'red' }}>{chairDidBuy[2].name}  </span>  {chairDidBuy[2].quantity}<span>x</span> {chairDidBuy[2].price} VNĐ
                                </div>
                            }
                        </div>
                    </div>

                        <iframe height={400} width={400} src="http://localhost:8080/order" ></iframe>
                </Col>
            </Row>
        </div>
    )
}
export default BookKing;