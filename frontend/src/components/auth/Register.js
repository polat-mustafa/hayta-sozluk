import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import './style.css';
import { register } from '../../api/index' 
import axios from 'axios';

const Register = () => {

  const onFinish = (values) => {
    if (values.password !== values.confirmPassword) return alert('Şifreler eşleşmiyor, lütfen tekrar deneyin.');

    const data = {
      username: values.username,
      password: values.password,
      email: values.email,
    }
    console.log('Received values of form: ', data);
    axios.post('http://localhost:3000/register', data).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    }).then(() => {

    document.getElementById('register').reset()
    setTimeout(() => {
      window.location.href = '/login'
    }, 1000)
    })

  };

  return (
    <Form
      name="register"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}

      style =  {{
        width: '100%',
        margin: 'auto',
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
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" style={{ 
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

      <Form.Item
        name="confirmPassword"
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
          placeholder="Confirm Password"
          style={{ 
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ borderRadius: '10px'}}>
          Kayıt ol
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;