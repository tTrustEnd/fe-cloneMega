import { Col, Row, Select, Space, message, notification } from "antd"
import CurrentPage from "../currentPage"
import './index.scss';


import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons';

import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { FaMapLocation, FaMapLocationDot } from "react-icons/fa6";
import { getUudaiSV } from "../../../../service/api";

export interface IUudai {
    name: string,
    time: string,
    image: string,
    _id:string
}

const Uudai = () => {
    const [rap1, showRap1] = useState<boolean>(true)
    const [rap2, showRap2] = useState<boolean>(false)
    const [listUudai, setListUudai] = useState([])
    const onChange = (value: any) => {
        if (value == '1') {
            showRap1(true)
            showRap2(false)
        }
        if (value == '2') {
            showRap2(true)
            showRap1(false)
        }
    }
    const getUudai = async () => {
        const res = await getUudaiSV()
        setListUudai(res.data)
    }
 
    const listUudai1 = listUudai.splice(0, 17);
    const listUudai2 = listUudai.splice(0, 23);
    useEffect(() => {
        getUudai()
    }, [rap2,rap1])
  
    return (
        <div>
            <CurrentPage
                page={'uu-dai'}
            />
            <Row style={{ display: 'flex' }} gutter={[20, 20]}>

                <Col xxl={4} ></Col>
                <Col xxl={16} style={{ paddingLeft: 50, paddingTop: 40 }}>
                    <div className="title-rap" >
                        <h3 >
                            ƯU DÃI
                        </h3>
                    </div>
                    <div className="select-rap" >
                        <span>ƯU ĐÃI TẠI</span>
                        <span>
                            <Select
                                onChange={onChange}
                                defaultValue="Mega GS Lý Chính Thắng"
                                style={{ width: 350 }}
                                bordered={false}
                                options={[
                                    { value: '1', label: 'Mega GS Lý Chính Thắng' },
                                    { value: '2', label: 'Mega GS Cao Thắng' },
                                ]}
                            />
                        </span>


                    </div>


                    {rap1 &&

                        <div  className="container-uudai" style={{ display: 'flex' }}>
                            {listUudai1 && listUudai1.length > 0
                                && listUudai1.map((item: IUudai, index: number) => {
                                    return (
                                        <a className="uudai" href={`/uu-dai/${item._id}`} key={`${index}`}>
                                            <img src={`${import.meta.env.VITE_BASE_URL}/images/uudai/${item.image}`} alt="" />

                                            <div className="content-uudai">
                                                {item.name}
                                            </div>
                                            <i>{item.time}</i>
                                        </a>
                                    )
                                })
                            }

                        </div>

                    }

                    <div>

                    </div>
                    {rap2 &&

                        <div className="container-uudai" style={{ display: 'flex' }}>
                            {listUudai2 && listUudai2.length > 0
                                && listUudai2.map((item: IUudai, index: number) => {
                                    return (
                                        <a className="uudai" href={`/uu-dai/${item._id}`}  key={`${index}`}>
                                            <img src={`${import.meta.env.VITE_BASE_URL}/images/uudai2/${item.image}`}  />

                                            <div className="content-uudai">
                                                {item.name}
                                            </div>
                                            <i>{item.time}</i>




                                        </a>
                                    )
                                })
                            }

                        </div>

                    }

                </Col>
                <Col xxl={5}></Col>
            </Row>
        </div>
    )
}
export default Uudai