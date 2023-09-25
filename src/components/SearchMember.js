import React from 'react';
import {DatePicker, Button, Form, InputNumber, Layout } from 'antd';

const SearchMember = () => {

  const handleSubmit = (data) => {
      console.log(data)
  };

  return (
    <Layout>
    <Form className='dob-form' onFinish={handleSubmit} style={{marginTop: '20px'}}>
    <p3 style={{color:"white", fontSize:"18px"}}>Mumber Number</p3>
      <Form.Item
        name="memberNo"
        rules={[
          {
            required: true,
            message: 'Please enter Member No',
          },
        ]}
      >
        <InputNumber
          style={{ width: '400px' }}
          placeholder="Enter Member No"
        />
      </Form.Item>
      <p3 style={{color:"white", fontSize:"18px"}}>Date Of Birth</p3>
      <Form.Item
        name="dob"
        rules={[
          {
            required: true,
            message: 'Please choose a Date of Birth',
          },
        ]}
      >
        <DatePicker
          style={{ width: '400px' }}
          placeholder="DD-MM-YYYY"
          format="DD-MM-YYYY"
        />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Layout>
  );
};

export default SearchMember;