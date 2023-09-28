import { Input , Card, Form, Typography, Button, InputNumber, Row } from "antd"



const UpdateProfile = () => {
  return (
    <div>

    

    <Card style={{maxWidth: '750px', marginInline: 'auto'}} bordered={false}>
    <Form
    >

    <Typography.Title className={'text-play'}
    style={{textAlign: 'left'}}>Update Your Profile
    </Typography.Title>
   <div className="parent">
      <Typography.Text className='item-feild text-hd' style={{color: "white", fontSize: "16px"}}>First Name</Typography.Text>
   
      <Typography.Text className='item-feild text-hd' style={{color: "white", fontSize: "16px"}}>Last Name</Typography.Text>
   
   </div>
   <div className="parent">
   <Row>
    
   <Form.Item 
    name='firstName'
    rules={[{ required: true, message: 'Please input your first name!' }]}
    >
      
      <Input size="large"  placeholder="First Name" className=" item-feild input-text" />
      </Form.Item>
   </Row>
    <Row>

      <Form.Item
      name='lastName'
      rules={[{ required: true, message: 'Please input your last name!' }]}
    >
      
      <Input size="large" placeholder="Last Name" className=" item-feild input-text" />
      </Form.Item>
    </Row>
   </div>
   <div style={{textAlign:'start'}}>


    
      <Typography.Text className='text-white ' style={{color: "white", fontSize: "16px"}}>Phone No</Typography.Text>
      <Form.Item
      name='phoneNo'
      rules={[{ required: true, message: 'Please input your phone number!' }]}>
      
      <InputNumber size="large" className={'ant-input '}  placeholder="Phone No" type="number"/>
      </Form.Item>
      <Typography.Text className='text-white ' style={{color: "white", fontSize: "16px"}}>Email</Typography.Text>
      <Form.Item
      name='Email'
      rules={[{ required: true, message: 'Please input your email!' }]}>
      <Input size="large" className={'ant-input '}  placeholder="Email" type="email"/>
      </Form.Item>
      <Button className={'btn'}
       size={'large'}
       type="primary"
       htmlType="submit"
       style={{marginTop: "10px"}}
    
       >
      Update Profile
      </Button>
   </div>
    </Form>
    </Card>
    </div>
  )
}
export default UpdateProfile