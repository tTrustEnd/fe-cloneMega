import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Descriptions, Divider, Form, Input, Row, message, notification } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import './index.scss'
import { createUserSV } from "../../service/api";
import CurrentPage from "../home/page/currentPage";
const Register = () => {
    //     const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    //     const [, forceUpdate] = useState({});
    const [isLoading, setIsLoading] = useState<boolean>(false)
    //     // To disable submit button at the beginning.

    const onFinish = async (value: { name: string, email: string, password: string }) => {
        console.log(value)
        setIsLoading(true)
        const result = await createUserSV(value)
        //   console.log(result)
        console.log(result)
        setIsLoading(false)
        notification.success({
            message: 'Đăng ký người dùng thành công'
        })
        navigate('/')
    }
    return (

        <div style={{ display: 'block' }}>

        <CurrentPage
            page={'register'}
        />

        <Row gutter={[20, 20]}>

            <Col xxl={6} style={{ paddingLeft: 450, paddingTop: 100 }}>
            </Col>
            <Col xxl={13} style={{ paddingTop: 30 }}>

                <div className="title-rap" style={{ width: 1000 }} >
                    <h2 style={{ paddingTop: 5, color: 'white', }}> Đăng ký</h2>
                </div>
                <div>
                    <Form
                        style={{ display: 'block' }}
                        form={form}
                        name="horizontal_login"
                        layout="inline"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <div style={{ margin: '0 auto' }}>
                        <Form.Item style={{width:800,paddingLeft:200,paddingTop:15}}
                                name="name"
                                rules={[{ required: true, message: "Please input your username!" }]}
                            >
                                <Input 
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Name"
                                />
                            </Form.Item>
                            <Form.Item style={{width:800,paddingLeft:200,paddingTop:15}}
                                name="email"
                                rules={[{ required: true, message: "Please input your username!" }]}
                            >
                                <Input 
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Email"
                                />
                            </Form.Item>
                            <Form.Item  style={{width:800,paddingLeft:200,paddingTop:15}}
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}
                            >
                                <Input.Password 
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item style={{width:800,paddingLeft:200,paddingTop:15}}
                                name="phone"
                                rules={[{ required: true, message: "Please input your username!" }]}
                            >
                                <Input 
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Số điện thoại"
                                />
                            </Form.Item>

                            <Form.Item style={{paddingLeft:450,paddingTop:30}} shouldUpdate>
                                {() => (
                                    <Button
                                        loading={isLoading}
                                        type="primary"
                                        htmlType="submit"
                                    // disabled={
                                    //     !form.isFieldsTouched(true) ||
                                    //     !!form.getFieldsError().filter(({ errors }) => errors.length)
                                    //         .length
                                    // }
                                    >
                                    <i  style={{fontSize:15,fontWeight:800}}> Đăng ký </i>
                                    </Button>

                                )
                                }

                            </Form.Item>
                            <Form.Item style={{paddingLeft:420}} shouldUpdate>
                                <span className="span1" >Đã có tài khoản?<NavLink className="link" to='/login' > Đăng nhập</NavLink></span>
                            </Form.Item>
                        </div>
                    </Form>

                </div>

                <div style={{paddingLeft:200}}>
                    <img src="https://www.megagscinemas.vn/images/home/img-login.png" alt="" />

                </div>

            </Col>

        </Row>

    </div>
    )
}
export default Register;