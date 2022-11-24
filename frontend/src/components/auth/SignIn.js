import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../features/users';
import { signIn } from '../../api';

const SignIn = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  console.log("user", user);

  const onFinish = (values) => {

    const response = signIn(values).then((response) => {
      console.log("response", response.data);
      dispatch(loginUser(values));
      localStorage.setItem("user", JSON.stringify(response.data));
    })
    console.log("response", response);


  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}

      style =  {{
        width: '100%',
        margin: '0 auto',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" style={{ 
          borderRadius: '10px',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        }}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          style={{ 
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{
          borderRadius: '10px',
          marginRight: '5px',
        }}>
          Giriş yap
        </Button>
        yada <a href="/register" style={{
          color: 'blue',

        }}>kayıt ol!</a>
      </Form.Item>
    </Form>
  );
};
export default SignIn;