import React from 'react';
import {DatePicker, Button, Form, InputNumber } from 'antd';

const SearchMember = () => {

  const handleSubmit = (data) => {
      console.log(data)
  };

  return (
    <Form onFinish={handleSubmit} style={{marginTop: '20px'}}>
      <Form.Item
        label="Member No"
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
      <Form.Item
        label="Date of Birth"
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
          placeholder="Choose Date"
          format="DD-MM-YYYY"
        />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchMember;