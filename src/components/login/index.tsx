import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Descriptions, Divider, Form, Input, message, notification } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";
import { useDispatch } from "react-redux";
import './index.scss'
import { getUserSV, loginSV } from "../../service/api";
import { doLogin } from "../../redux/user/userSlice";
import { AxiosResponse } from "axios";

const Login = () => {
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

        <div className="register-container">
            <span>Đăng nhập</span>

            <div >
                <Form className="form-register "
                    form={form}
                    name="horizontal_login"
                    layout="inline"
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    <Form.Item className=" input"
                        name="email"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item className=" input"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>


                    <Form.Item shouldUpdate>
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
                                Đăng nhập
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </div>
            <span className="span1" >Chưa có tài khoản?<NavLink className="link" to='/register' > Đăng ký</NavLink></span>
        </div>
    )
}
export default Login;