import { useLocation } from "react-router-dom"
import { getUudaiSVbyField } from "../../../../../service/api";
import { useEffect, useState } from 'react'
import { Col, Row, Select } from "antd";
import CurrentPage from "../../currentPage";
import AllUudai from "../allUudai";
export interface IUudai {
    name: string,
    image: string,
    time:string
}
const DetaiUudai = () => {
    const [uudai, setUudai] = useState<IUudai | any>()
    const location: any = useLocation()
    const path = location.pathname;
    const id = path.replace('/uu-dai/', '')
    const getUudai = async () => {
        const res = await getUudaiSVbyField(`_id=${id}`)
        setUudai(res.data)
    }
    useEffect(() => {
        getUudai()
    }, [])
    return (
        <div>
            <CurrentPage
                page={`uu-dai`}
            />

            {uudai &&

                <div>
                    <Row style={{ display: 'flex' }} gutter={[20, 20]}>

                        <Col xxl={4} ></Col>
                        <Col xxl={16} style={{ paddingLeft: 50, paddingTop: 40 }}>
                            <div className="title-rap" >
                                <h3 >
                                    ƯU ĐÃI
                                </h3>
                            </div>
                            <div className="select-rap" >
                                <div>
                                    <span style={{ fontSize: 35 }}>{uudai[0].name}</span>
                                </div>
                                <div>
                                    <span><i>{uudai[0].time}</i></span>
                                </div>
                                <span>
                                    <div>
                                        <img src={`${import.meta.env.VITE_BASE_URL}/images/uudai/${uudai[0].image}`} alt="" />
                                    </div>

                                </span>
                                <div style={{ paddingTop: 35, }}>
                                    <h3 className='title-rap' > <span style={{ color: 'white' }}>ƯU ĐÃI KHÁC</span></h3>
                                </div>

                                <AllUudai />
                            </div>
                        </Col>
                        <Col xxl={5}></Col>
                    </Row>
                </div>

            }


        </div>
    )
}
export default DetaiUudai