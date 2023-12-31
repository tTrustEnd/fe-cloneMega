import { Checkbox, Col, Divider, Modal, Row, message, notification } from "antd"
import CurrentPage from "../currentPage"
import './index.scss'
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { MinusCircleOutlined, PlusCircleOutlined, RightCircleOutlined } from "@ant-design/icons"
import { GetLink, Order, getChairDidBuy, updateChair } from "../../../../service/api"
import Countdown from "./countDownPassReloadPage"
import { IChair } from "../.."
import { NavLink, useNavigate } from "react-router-dom"
import ModalBuyTicket from "../ModalBuyTicket"
import { faL } from "@fortawesome/free-solid-svg-icons"
import ModalLogin from "../../../login/modalLogin"


const BookKing = () => {
    const [chairDidBuy, setChairDidBuy] = useState<IChair>()
    const film = useSelector((state: any) => state.film).film;
    const navigate = useNavigate()
    const user = useSelector((state: any) => state.user.account.user)
    const [green1, setGreen1] = useState<boolean>()
    const [green2, setGreen2] = useState<boolean>()
    const [green3, setGreen3] = useState<boolean>()
    const [green4, setGreen4] = useState<boolean>()
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
    const [totalChairBought, setTotalChairBought] = useState(0)
    const [chairSlected, setChairSelected] = useState(0)
    const [totalAll, setTotalAll] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBuy, setIsBuy] = useState(true)
    const [isBuyChinhsach, setisBuyChinhsach] = useState(true)
    const [showModalBuyTicket, setShowModalBuyTicket] = useState(false)
    const [isModalLogin, setIsModalLogin] = useState(false)
    const changeColor1 = () => {
        if (green1) {
            setChairSelected(chairSlected - 1)
            setGreen1(!green1)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen1(!green1)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor2 = () => {
        if (green2) {
            setChairSelected(chairSlected - 1)
            setGreen2(!green2)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen2(!green2)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor3 = () => {
        if (green3) {
            setChairSelected(chairSlected - 1)
            setGreen3(!green3)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen3(!green3)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor4 = () => {
        if (green4) {
            setChairSelected(chairSlected - 1)
            setGreen4(!green4)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen4(!green4)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor5 = () => {
        if (green5) {
            setChairSelected(chairSlected - 1)
            setGreen5(!green5)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen5(!green5)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor6 = () => {
        if (green6) {
            setChairSelected(chairSlected - 1)
            setGreen6(!green6)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen6(!green6)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor7 = () => {
        if (green7) {
            setChairSelected(chairSlected - 1)
            setGreen7(!green7)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen7(!green7)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor8 = () => {
        if (green8) {
            setChairSelected(chairSlected - 1)
            setGreen8(!green8)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen8(!green8)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor9 = () => {
        if (green9) {
            setChairSelected(chairSlected - 1)
            setGreen9(!green9)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen9(!green9)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const changeColor10 = () => {
        if (green10) {
            setChairSelected(chairSlected - 1)
            setGreen10(!green10)
        }
        else if (chairSlected < totalChairBought) {
            setChairSelected(chairSlected + 1)
            setGreen10(!green10)
        }
        else {
            message.error(
                `Đặt có ${totalChairBought} vé mà đòi chọn ${totalChairBought + 1} à`
            )
        }

    }
    const handleCancelBuy = () => {
        setIsModalOpen(true)
    }
    const getChair = async () => {
        let res = await getChairDidBuy(0)
        let total = 0;
        let totalQuantity = 0
        if (res && res.data) {
            setChairDidBuy(res.data)
            for (let i = 0; i < res.data.length; i++) {
                total += res.data[i].price * res.data[i].quantity;
                totalQuantity += res.data[i].quantity
            }
        }
        setTotalAll(total)
        setTotalChairBought(totalQuantity)
        if (totalChairBought === 1) {
            setGreen1(true)
            setChairSelected(1)

        }
        if (totalChairBought === 2) {
            setGreen1(true)
            setGreen2(true)
            setChairSelected(2)

        }
        if (totalChairBought === 3) {
            setGreen1(true)
            setGreen2(true)
            setGreen3(true)
            setChairSelected(3)

        }
        if (totalChairBought === 4) {
            setGreen1(true)
            setGreen2(true)
            setGreen3(true)
            setGreen4(true)
            setChairSelected(4)
        }
        if (totalChairBought === 5) {
            setGreen1(true)
            setGreen2(true)
            setGreen3(true)
            setGreen4(true)
            setGreen5(true)
            setChairSelected(5)

        }
        if (totalChairBought === 6) {
            setGreen1(true)
            setGreen2(true)
            setGreen4(true)
            setGreen5(true)
            setGreen6(true)
            setChairSelected(6)

        }
        if (totalChairBought === 7) {
            setGreen1(true)
            setGreen2(true)
            setGreen3(true)
            setGreen4(true)
            setGreen5(true)
            setGreen6(true)
            setGreen7(true)
            setChairSelected(7)

        }
        if (totalChairBought === 8) {
            setGreen1(true)
            setGreen2(true)
            setGreen3(true)
            setGreen4(true)
            setGreen5(true)
            setGreen6(true)
            setGreen7(true)
            setGreen8(true)
            setChairSelected(8)

        }
        if (totalChairBought === 9) {
            setGreen1(true)
            setGreen2(true)
            setGreen3(true)
            setGreen4(true)
            setGreen5(true)
            setGreen6(true)
            setGreen7(true)
            setGreen8(true)
            setGreen9(true)
            setChairSelected(9)

        }
        if (totalChairBought === 10) {
            setGreen1(true)
            setGreen2(true)
            setGreen3(true)
            setGreen4(true)
            setGreen5(true)
            setGreen6(true)
            setGreen7(true)
            setGreen8(true)
            setGreen9(true)
            setGreen10(true)
            setChairSelected(10)

        }
    }
    useEffect(() => {
        getChair()
    }, [totalChairBought])

    const close = () => {
        setShowModalBuyTicket(false)
        location.reload()
    }
    const closeModalLogin = () => {
        setIsModalLogin(false)

    }
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {

        setIsModalOpen(false);
    };
    const [link, setLinh] = useState('')
    const [bankCode, setBankCode] = useState<string>('')

    const VnpAPI = async () => {
        setisBuyChinhsach(!isBuyChinhsach)
        await Order({ amount: totalAll, bankCode: bankCode, language: 'vn' })
    }
    const getlinkbuy = async () => {
        setIsBuy(!isBuy)
        const res = await GetLink()
        if (res) {
            setLinh(res.data[0].name)
            console.log(link)
        }
    }
    const toggleCheckbox = () => {
        var square: any = document.getElementById("square");
        square.classList.toggle("checked");
    }
    console.log(totalChairBought)
    console.log(link)
    return (
        <div>
            <CurrentPage
                page={`booking/${film.name}`}
            />
            <div>
                <Modal footer={false} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <h2>Hủy đặt vé?</h2>
                    <span>Các thông tin sẽ không lưu</span>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <button onClick={() => { navigate('/') }} className="btn btn-warning">Ok</button>
                    </div>

                </Modal>
            </div>

            <Row className="body-book" gutter={[20, 20]}>

                <Col xxl={11} style={{ paddingTop: 30 }}>
                    <div style={{ display: 'flex' }} >
                        <div className="tag"> <a>1 </a></div>&nbsp; <h3 style={{ paddingTop: 5, color: 'black', fontWeight: 900 }}> CHỌN VỊ TRÍ</h3>
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
                                        <td key={`${index}`}> <b>{index + 1}</b><img onClick={() => message.error('Chọn ghế hàng A đi')} src="https://www.megagscinemas.vn/Images/Seating/25/seat_0.png" alt="2" /></td>
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
                    <div style={{ display: 'flex', paddingTop: 10, textAlign: 'center', float: 'right' }}>
                        <button onClick={async () => { await updateChair(), setShowModalBuyTicket(true) }} style={{ display: 'flex' }} className="btn btn-warning"><div><RightCircleOutlined style={{ color: 'red', fontSize: 25, paddingRight: 5 }} /></div><div> Cập nhật số lượng vé</div> </button>
                    </div>
                    <div className="food-container">
                        <div style={{ display: 'flex' }} >
                            <div className="tag"> <a>2</a></div>&nbsp;
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

                                    <div> <img src="https://cms.megagscinemas.vn//media/76071/combo-bigshare.png" title="Yêu bạn" /></div>
                                    <span style={{ paddingLeft: 15 }}>
                                        <i style={{ fontSize: 15 }}>iBIG SHARE Combo (107,000 VNĐ)</i>
                                        <div >
                                            <MinusCircleOutlined onClick={() => { if (value1 > 0) { setValue1(value1 - 1), setTotalAll(totalAll - 107000) } }} /> <input value={value1} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue1(value1 + 1), setTotalAll(totalAll + 107000) }} />
                                        </div>
                                    </span>
                                </div>

                                <div style={{ display: 'flex' }}>

                                    <div style={{ paddingLeft: 35 }}> <img src="https://cms.megagscinemas.vn//media/76070/combo-share.png" alt="" /></div>
                                    <span style={{ paddingLeft: 15 }}>
                                        <i style={{ fontSize: 15 }}>iSHARE Combo (97,000 VNĐ)</i>
                                        <div >
                                            <MinusCircleOutlined onClick={() => { if (value2 > 0) { setValue2(value2 - 1), setTotalAll(totalAll - 97000) } }} /> <input value={value2} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue2(value2 + 1), setTotalAll(totalAll + 97000) }} />
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
                                        <div>
                                            <MinusCircleOutlined onClick={() => { if (value3 > 0) { setValue3(value3 - 1), setTotalAll(totalAll - 55000) } }} /> <input value={value3} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue3(value3 + 1), setTotalAll(totalAll + 55000) }} />
                                        </div>
                                    </span>
                                </div>

                                <div style={{ display: 'flex' }}>

                                    <div style={{ paddingLeft: 15 }}> <img src="https://cms.megagscinemas.vn//media/76072/popcorn-cheese-40oz.png" alt="" /></div>
                                    <span style={{ paddingLeft: 15 }}>
                                        <i style={{ fontSize: 15 }}>Cheese Popcorn 40oz (55,000 VNĐ)</i>
                                        <div >
                                            <MinusCircleOutlined onClick={() => { if (value4 > 0) { setValue4(value4 - 1), setTotalAll(totalAll - 55000) } }} /> <input value={value4} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue4(value4 + 1), setTotalAll(totalAll + 55000) }} />
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
                                            <MinusCircleOutlined onClick={() => { if (value5 > 0) { setValue5(value5 - 1), setTotalAll(totalAll - 55000) } }} /> <input value={value5} style={{ width: 30, textAlign: 'center' }} type="text" name="" id="" readOnly /> <PlusCircleOutlined onClick={() => { setValue5(value5 + 1), setTotalAll(totalAll + 55000) }} />
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
                        <div style={{ fontSize: 15 }}>
                            {film.sub}
                        </div>
                        <div>
                            {film.premiere}
                        </div>
                        <div>
                            {chairDidBuy && chairDidBuy[0] &&
                                <div>
                                    <span> Loại vé: </span><span style={{ color: 'red' }} >{chairDidBuy[0].name} </span>{chairDidBuy[0].quantity}<span> x </span> {chairDidBuy[0].price.toLocaleString()} VNĐ
                                </div>
                            }
                            {chairDidBuy && chairDidBuy[1] &&
                                <div>
                                    <span> Loại vé: </span> <span style={{ color: 'red' }} >{chairDidBuy[1].name} </span> {chairDidBuy[1].quantity} <span> x </span> {chairDidBuy[1].price.toLocaleString()} VNĐ
                                </div>
                            }
                            {chairDidBuy && chairDidBuy[2] &&
                                <div>
                                    <span> Loại vé: </span><span style={{ color: 'red' }}>{chairDidBuy[2].name}  </span>  {chairDidBuy[2].quantity}<span> x </span> {chairDidBuy[2].price.toLocaleString()} VNĐ
                                </div>
                            }
                        </div>
                        <div>
                            <h3>CHỌN ĐỒ ĂN & THỨC UỐNG</h3>
                            <div className="underline2">

                            </div>
                            {value1 > 0 &&
                                <div> <span style={{ color: 'yellow' }} >iBIG SHARE Combo </span> {value1} x 107.000 VNĐ</div>
                            }
                            {value2 > 0 &&
                                <div> <span style={{ color: 'yellow' }}>iSHARE Combo  </span>  {value2} x 97.000 VNĐ</div>
                            }
                            {value3 > 0 &&
                                <div> <span style={{ color: 'yellow' }}>iCaramel Popcorn 40oz </span>  {value3} x 55.000 VNĐ</div>
                            }
                            {value4 > 0 &&
                                <div><span style={{ color: 'yellow' }}>Cheese Popcorn 40oz</span>  {value4} x 55.000 VNĐ</div>
                            }
                            {value5 > 0 &&
                                <div> <span style={{ color: 'yellow' }}>iSweet Popcorn 40oz </span>   {value5} x 55.000 VNĐ</div>
                            }
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'end', fontSize: 20 }}>
                            Tổng giá tiền
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'end', fontSize: 40, color: 'khaki', fontWeight: 1000 }}>
                            {totalAll.toLocaleString()} VNĐ
                        </div>

                        <div style={{ color: 'yellow', fontSize: 15 }}>
                            Thông tin thanh toán
                        </div>
                        {user &&
                            <div>
                                <div style={{ background: '#333' }}>
                                    Họ và Tên: {user.name}
                                </div>
                                <div style={{ background: '#333' }}>
                                    Email: {user.email}
                                </div>
                                <div style={{ background: '#333' }}>
                                    Số điện thoại: {user.phone}
                                </div>
                            </div>

                        }

                        <div style={{ color: 'yellow', fontSize: 15 }}>
                            Phương thức thanh toán
                        </div>
                        <Checkbox onClick={() => VnpAPI()} style={{ color: 'white' }} >
                            NGÂN HÀNG TÙY CHỌN (ATM CARD)
                        </Checkbox>
                        <Checkbox disabled={isBuyChinhsach} onClick={() => getlinkbuy()}>
                            <div style={{ paddingLeft: 0, paddingTop: 20, fontSize: 15, color: 'white' }}> Tôi đã đọc và đồng ý với
                                <NavLink to=""> Chính sách thanh toán vé trực tuyến</NavLink></div>
                        </Checkbox>
                        <div style={{ color: 'red' }}>
                            (*)Vé đã mua không thể đổi hoặc hoàn tiền.

                            Mã vé sẽ được gửi qua tin nhắn SMS và Email đã nhập.
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <div className="rject-buy" onClick={() => handleCancelBuy()} >Hủy đặt vé</div>

                            <div onClick={() => {
                                if (!user) {
                                    setIsModalLogin(true)
                                }
                            }}>
                                <button className="btn btn-warning" disabled={isBuy}>
                                    {user && <NavLink to={link}>THANH TOÁN</NavLink>}
                                    {!user && <div> THANH TOÁN </div>} </button>
                            </div>




                        </div>
                    </div>


                </Col>
                <ModalBuyTicket
                    showModalBuyTicket={showModalBuyTicket}
                    close={close}
                />
                <ModalLogin
                    closeModalLogin={closeModalLogin}
                    isModalLogin={isModalLogin} />
            </Row>
        </div>
    )
}
export default BookKing;