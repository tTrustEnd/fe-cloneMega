import { Col, Modal, Row, message } from 'antd'
import {useState,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IChair } from '../..'
import { useDispatch } from 'react-redux'
import { doBuyFilm } from '../../../../redux/buy/buySlice'
import { getChairs, getFilmsByFieldSV, getFilmsSV, updateChair } from '../../../../service/api'
import { IFilm } from '../phim'
import { useSelector } from 'react-redux'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import './index.scss'
const ModalBuyTicket = (props) => {
    let {showModalBuyTicket,close} = props;
    const user = useSelector((state:any) => state.user.account.user)
    const [openVe, setOpenVe] = useState(false)
    const [listFilms, setListFilms] = useState([])
   const filmSelected = useSelector((state:any) => state.saveFilm.film)
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
   
    const handleBuy = async(item) => {
        await updateChair(0)
        console.log(item)
        setIsModalOpen(true)
        dispatch(doBuyFilm(item))

    }
    const handleChair = () => {
        console.log('check chair', chair)
        if (quantity1 > 0 || quantity2 > 0 || quantity3 > 0) {
            close()
            location.reload()
        }
        else {
            message.error('Bạn cần chọn ít nhất 1 vé để mua')
        }
    }
    return(
        <Modal className='modal-buy' keyboard={false} maskClosable={false} 
        width={800} footer={false} open={showModalBuyTicket} onOk={close} onCancel={close}>
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
                            <NavLink to="/login">Đăng nhập</NavLink> / <NavLink to="/register">Đăng ký</NavLink> Thành viên Mega+ để tích lũy điểm
                        </div>}
        <div style={{ display: 'flex', paddingTop: 30 }}>
            <b>Ghi chú: </b> &nbsp; <div style={{ color: 'red' }}> Mỗi lần đặt vé bạn chỉ được chọn tối đa 10 vé.</div>
            <div style={{ paddingLeft: 290 }}>
                <button
                    onClick={() => handleChair()} style={{ display: 'flex', color: 'black' }} className='btn btn-warning'>Chọn ghế</button>
            </div>

        </div>

    </Modal>
    )
}
export default ModalBuyTicket;