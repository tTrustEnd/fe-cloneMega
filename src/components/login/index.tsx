import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Descriptions, Divider, Form, Input, Row, message, notification } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";
import { useDispatch } from "react-redux";
import './index.scss'
import { getUserSV, loginSV } from "../../service/api";
import { doLogin } from "../../redux/user/userSlice";
import { AxiosResponse } from "axios";
import CurrentPage from "../home/page/currentPage";
import { useSelector } from "react-redux";

const Login = () => {
    const user = useSelector((state:any) => state.user.account.user)
    console.log(user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    //     const [, forceUpdate] = useState({});
    const [isLoading, setIsLoading] = useState<boolean>(false)
    //     // To disable submit button at the beginning.

    const onFinish = async (value: { email: string, password: string }) => {
        setIsLoading(true)
        const data: AxiosResponse<string, string> = await loginSV({ email: value.email, password: value.password });
        await dispatch(doLogin(data))
        console.log(data)
        if (data.status == 200) {
            notification.success({
                message: 'Đăng nhập thành công'
            })
            setIsLoading(false)
            navigate('/')

        } else {
            setIsLoading(false)
            notification.error({
                message: 'Đăng nhập thất bại',
                description: 'Thông tin đăng nhập không chính xác'
            })
        }
    }
    return (
        <div>
            {user?
   
        <div style={{ display: 'block' }}>

            <CurrentPage
                page={'login'}
            />

            <Row gutter={[20, 20]}>

                <Col xxl={6} style={{ paddingLeft: 450, paddingTop: 100 }}>
                </Col>
                <Col xxl={13} style={{ paddingTop: 30 }}>

                    <div className="title-rap" style={{ width: 1000 }} >
                        <h2 style={{ paddingTop: 5, color: 'white', }}> Đăng nhập</h2>
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


                                <Form.Item style={{paddingLeft:450,paddingTop:30}} shouldUpdate>
                                    {() => (
                                        <Button
                                        style={{textAlign:'center'}}
                                            loading={isLoading}
                                            type="primary"
                                            htmlType="submit"
                                        // disabled={
                                        //     !form.isFieldsTouched(true) ||
                                        //     !!form.getFieldsError().filter(({ errors }) => errors.length)
                                        //         .length
                                        // }
                                        >
                                           <i  style={{fontSize:15,fontWeight:800}}> Đăng nhập </i>
                                        </Button>

                                    )
                                    }

                                </Form.Item>
                                <Form.Item style={{paddingLeft:420}} shouldUpdate>
                                    <span className="span1" >Chưa có tài khoản?<NavLink className="link" to='/register' > Đăng ký</NavLink></span>
                                </Form.Item>
                            </div>
                        </Form>

                    </div>

                    <div style={{paddingLeft:200}}>
                        <img src="https://www.megagscinemas.vn/images/home/img-login.png" alt="" />

                    </div>

                </Col>

            </Row>

        </div>:''}
        </div>
    )
}
export default Login;