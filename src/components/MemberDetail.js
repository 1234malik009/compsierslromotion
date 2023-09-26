import React from 'react';
import { Button, Card, Col, Row, Typography} from 'antd';
// import { Card, Row, Col, Typography} from "antd";
import { CloseOutlined } from '@ant-design/icons';

const MemberDetail = ({memberData}) => {
  return (
    <div className='mamber-detail'>
<Card bordered= {false} style={{width:'70%'}}>

      <Typography.Title style={{textAlign:'start', marginTop:'0px'}}>Profile</Typography.Title>
     <Typography.Text style={{textAlign:'start', display:'block', fontSize:'20px', marginTop:'-25px'}}>When you renew you will continue to recieve access to Fairfield RSL benefits</Typography.Text>
      <Card 
        style={{ color:'white', background: "#e10000e8", height:'30px', display:'flex',
        justifyContent:'center', width:'100%', alignItems:'center',  marginTop:'40px'}}
        className="text-center"
        bordered={false}
       
      >
        <Typography.Text className='warning-massege'
         style={{fontSize:'16px'}}
         ><CloseOutlined />   Your Fairfienld RSL membership is expired</Typography.Text>
      </Card>
        <Card bordered= {false}>
        <Row>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={12}  >
              <Typography.Title level={4} className= 'text-white'>Name:</Typography.Title>
            </Col>
            <Col xs={12}>
              <Typography.Title level={5} className="text-green">
                {memberData.name}
              </Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={12}>
              <Typography.Title level={4} className= 'text-white'>Email:</Typography.Title>
            </Col>
            <Col xs={12}>
              <Typography.Title level={5} className='text-green'>{memberData.email}</Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={12}>
              <Typography.Title level={4} className= 'text-white'>Phone No:</Typography.Title>
            </Col>
            <Col xs={12}>
              <Typography.Title level={5} className='text-green'>{memberData.phoneNo}</Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={12}>
              <Typography.Title level={4} className= 'text-white'>Date of Birth:</Typography.Title>
            </Col>
            <Col xs={12}>
              <Typography.Title level={5} className='text-green'>{memberData.dob}</Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={12}>
              <Typography.Title level={4} className='text-white'>Member No:</Typography.Title>
            </Col>
            <Col xs={12}>
              <Typography.Title level={5} className='text-green'>{memberData.memberNo}</Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={12}>
              <Typography.Title level={4} className= 'text-white'>Updated Date:</Typography.Title>
            </Col>
            <Col xs={12}>
              <Typography.Title level={5} className='text-green'>{memberData.updated_at}</Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={12}>
              <Typography.Title level={4} className= 'text-white'>Createtion Date:</Typography.Title>
            </Col>
            <Col xs={12}>
              <Typography.Title level={5} className='text-green'>{memberData.createtion_date}</Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={12}>
              <Typography.Title level={4} className= 'text-white'>Status:</Typography.Title>
            </Col>
            <Col xs={12}>
              <Typography.Title level={5} className='text-green'>{memberData.status}</Typography.Title>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='button-container' style={{textAlign:'end', marginTop:'25px'}}>
     <Button style={{margin:"2px"}}  type="primary" htmlType="submit">
     Not Me?
     </Button>
     <Button style={{margin:"2px"}} type="primary" htmlType="submit">
     Yes Continue
     </Button>
      </div>
     </Card>
     </Card>
     </div>
  );
  
};

export default MemberDetail;