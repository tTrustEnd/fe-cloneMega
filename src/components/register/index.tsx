import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Descriptions, Divider, Form, Input, message, notification } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";
import { useDispatch } from "react-redux";
import './index.scss'
import { createUserSV } from "../../service/api";
const Register = () => {
//     const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
//     const [, forceUpdate] = useState({});
    const [isLoading, setIsLoading] = useState<boolean>(false)
//     // To disable submit button at the beginning.
  
    const onFinish = async(value:{name:string,email:string,password:string}) => {
        console.log(value)
     setIsLoading(true)
     const result = await createUserSV(value)
     //   console.log(result)
      console.log(result)
      setIsLoading(false)
      notification.success({
        message:'Đăng ký người dùng thành công'
      })
      navigate('/login')
   }
    return (

        <div className="register-container">
            <span>Đăng ký người dùng mới</span>

            <div >
                <Form className="form-register "
                    form={form}
                    name="horizontal_login"
                    layout="inline"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                     <Form.Item className=" input"
                        name="name"
                        rules={[{ required: true, message: "Please input your name!" }]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="name"
                        />
                    </Form.Item>
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
           <span className="span1" >Đã có tài khoản?<NavLink className="link" to='/login' > Đăng nhập</NavLink></span> 
        </div>
    )
}
export default Register;