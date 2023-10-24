import { Input, Card, Form, Typography, Button, InputNumber} from "antd";
import {startSession} from "../helper/api";

const UpdateProfile = ({ setCompsieCompState }) => {

  let updateProfile = async (data) => {
    console.log(data)
    const {sessionToken} = await startSession();
    console.log(sessionToken)
    setCompsieCompState(0)
  }

  return (
    <div>
      <Card
        style={{ maxWidth: "750px", marginInline: "auto" }}
        bordered={false}
      >
        <Form onFinish={updateProfile} layout="vertical">
          <Typography.Title
            className={"text-play"}
            style={{ textAlign: "left" }}
          >
            Update Your Profile
          </Typography.Title>
          <div style={{ textAlign: "start" }}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please input your first name!" }]}
            >
              <Input
                size="medium"
                className="w-100"
                placeholder="First Name"
              />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please input your last name!" }]}
            >
              <Input
                size="medium"
                className="w-100"
                placeholder="Last Name"
              />
            </Form.Item>
            <Form.Item
              label="Phone No"
              name="phoneNo"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <InputNumber
                size="medium"
                className="w-100"
                placeholder="Phone No"
                type="number"
              />
            </Form.Item>
            <Form.Item
              label={"Email Address"}
              name="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                size="medium"
                style={{width: '100%'}}
                placeholder="Email"
                type="email"
              />
            </Form.Item>

            <Button
              className={"btn"}
              size={"medium"}
              type="primary"
              htmlType="submit"
              style={{ marginTop: "10px" }}
            >
              Update Profile
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
export default UpdateProfile;
