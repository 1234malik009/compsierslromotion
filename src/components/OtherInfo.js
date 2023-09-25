import { Button, Form, InputNumber } from "antd"

function OtherInfo() {
    const handleSubmit= (values) =>{
        console.log(values);
    }
  return (
    <Form className='dob-form' onFinish={handleSubmit} style={{marginTop: '20px'}}>
    <Form.Item
    label='Member Number<'
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
    
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
  </Form>
  )
}
export default OtherInfo