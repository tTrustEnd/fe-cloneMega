import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Descriptions, Divider, Form, Input, Modal, Row, message, notification } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";
import { useDispatch } from "react-redux";
import './index.scss'
import { getUserSV, loginSV } from "../../service/api";
import { doLogin } from "../../redux/user/userSlice";
import { AxiosResponse } from "axios";
import CurrentPage from "../home/page/currentPage";

const ModalLogin = (props) => {
    let { isModalLogin, closeModalLogin } = props
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
          location.reload()

        } else {
            setIsLoading(false)
            notification.error({
                message: 'Đăng nhập thất bại',
                description: 'Thông tin đăng nhập không chính xác'
            })
        }
    }
    return (

            <Modal open={isModalLogin}
                className='modal-buy'
                width={800} footer={false} onOk={close} onCancel={closeModalLogin}>
                    <div style={{paddingLeft:50}}>
                    <div className="title-rap" style={{ width: 600 }} >
                    <h2 style={{ paddingTop: 5, color: 'white', }}> Đăng nhập</h2>
                </div>
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
                        <div >
                            <Form.Item style={{ paddingTop: 15 }}
                                name="email"
                                rules={[{ required: true, message: "Please input your username!" }]}
                            >
                                <Input
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Email"
                                />
                            </Form.Item>
                            <Form.Item style={{paddingTop: 10}}
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item style={{ paddingLeft: 300, paddingTop: 30 }} shouldUpdate>
                                {() => (
                                    <Button
                                        style={{ textAlign: 'center' }}
                                        loading={isLoading}
                                        type="primary"
                                        htmlType="submit"
                                    // disabled={
                                    //     !form.isFieldsTouched(true) ||
                                    //     !!form.getFieldsError().filter(({ errors }) => errors.length)
                                    //         .length
                                    // }
                                    >
                                        <i style={{ fontSize: 15, fontWeight: 800 }}> Đăng nhập </i>
                                    </Button>
                                )
                                }
                            </Form.Item>
                            <Form.Item style={{ paddingLeft: 260 }} shouldUpdate>
                                <span className="span1" >Chưa có tài khoản?<NavLink className="link" to='/register' > Đăng ký</NavLink></span>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
               
            </Modal>
   
    )
}
export default ModalLogin;