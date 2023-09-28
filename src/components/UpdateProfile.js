import { Input , Card, Form, Typography, Button, InputNumber } from "antd"



const UpdateProfile = ({visible,showOnClick}) => {
  return (
    <div>

    

    <Card style={{maxWidth: '750px', marginInline: 'auto'}} bordered={false}>
    <Form>
    <Typography.Title className={'text-play'}
    style={{textAlign: 'left'}}>Update Your Profile
    </Typography.Title>
   <div className="parent">
      <Typography.Text className='item-feild text-hd' style={{color: "white", fontSize: "16px"}}>First Name</Typography.Text>
   
      <Typography.Text className='item-feild text-hd' style={{color: "white", fontSize: "16px"}}>Last Name</Typography.Text>
   
   </div>
   <div className="parent">
      
      <Input size="large"  placeholder="First Name" className=" item-feild input-text" />
      
      <Input size="large" placeholder="Last Name" className=" item-feild input-text" />
   </div>
   <div style={{textAlign:'start'}}>


    
      <Typography.Text className='text-white ' style={{color: "white", fontSize: "16px"}}>Phone No</Typography.Text>
      <InputNumber size="large" className={'ant-input '}  placeholder="Phone No" type="number"/>
      <Typography.Text className='text-white ' style={{color: "white", fontSize: "16px"}}>Email</Typography.Text>
      <Input size="large" className={'ant-input '}  placeholder="Email" type="email"/>
      <Button className={'btn'}
       size={'large'}
       type="primary"
       htmlType="submit"
       style={{marginTop: "10px"}}
       onClick={showOnClick}
    
       >
      Update Profile
      </Button>
      {visible && <UpdateProfile/>}
   </div>
    </Form>
    </Card>
    </div>
  )
}
export default UpdateProfile