import React from 'react';
import { DatePicker, Button, Form, InputNumber, Typography } from 'antd';

const SearchMember = ({setMemberFetched,setMemberData}) => {

  const handleSubmit = (data) => {
    const allValues = {
        mememberNo:data.memberNo,
        dob:new Date(data.dob).toLocaleString()
      }
      console.log(allValues);
      setMemberData(allValues)
      setMemberFetched(false)
  };

  return (
    <Form  onFinish={handleSubmit} style={{marginTop: '20px'}}>
    <Typography.Text style={{color:"white", fontSize:"20px"}}>Member No</Typography.Text>
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
        <Typography.Text style={{color:"white", fontSize:"20px"}}>Date Of Birth</Typography.Text>
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
            Next
          </Button>
        </Form.Item>
    </Form>
  );
};

export default SearchMember;