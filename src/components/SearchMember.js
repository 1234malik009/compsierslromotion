import React from 'react';
import { DatePicker, Button, Form, InputNumber, Typography, Card } from 'antd';

const SearchMember = ({setMemberFetched,setMemberData}) => {

  const handleSubmit = (data) => {
    const allValues = {
        mememberNo:data.memberNo,
        dob:new Date(data.dob).toLocaleString()
      }
      console.log(allValues);
      setMemberData(allValues)
      setMemberFetched(true)
  };

  return (
    <div className='member-search-div'>
    <Card className='member-Search' style={{width:'70%', border:'none'}} >
    <Form  onFinish={handleSubmit} style={{marginTop: '20px', textAlign:'start'}}>
    <Typography.Title className='member-search-title' style={{marginTop:'-15px', marginBottom:'0px', fontSize:'30px'}}>Renew Your Membership</Typography.Title>
    <Typography.Text style={{fontSize:'20px'}}>Firstly lets check the status of your fairfeild membership.</Typography.Text>
    <br /><br /><br /><Typography.Text style={{color:"white", fontSize:"16px"}}>Member No</Typography.Text>
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
            style={{ width: '90%' }}
            placeholder="Enter Member No"
          />
        </Form.Item>
        <Typography.Text style={{color:"white", fontSize:"16px"}}>Date Of Birth</Typography.Text>
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
            style={{ width: '90%' }}
            placeholder="DD-MM-YYYY"
            format="DD-MM-YYYY"
          />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
          Search
          </Button>
        </Form.Item>
    </Form>
    </Card>
    </div>
  );
};

export default SearchMember;