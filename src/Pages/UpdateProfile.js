import { Input, Card, Form, Typography, Button, InputNumber} from "antd";
import {startSession} from "../helper/api";
import { useEffect } from "react";

const UpdateProfile = ({ setCompsieCompState, memberData }) => {
  let [form] = Form.useForm();
  useEffect(() => {
    if (memberData) {
      form.setFieldsValue({
        firstName: memberData.firstName,
        lastName: memberData.lastName,
        phoneNo: memberData.mobilePhone,
        Email: memberData.Email,
      });
    }
  }, [form]);
  let updateProfile = async (data) => {
    console.log(data);
    const { sessionToken } = await startSession();
    console.log(sessionToken);
    setCompsieCompState(0);
  };

  return (
    <div>
      <Card style={{ maxWidth: "750px", marginInline: "auto" }} bordered={false}>
        <Form form={form} onFinish={updateProfile} layout="vertical">
          <Typography.Title className={"text-play"} style={{ textAlign: "left", fontSize: "30px" }}>
            Update Your Profile
          </Typography.Title>
          <div style={{ textAlign: "start" }}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please input your first name!" }]}
            >
              <Input size="medium" className="w-100" placeholder="First Name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please input your last name!" }]}
            >
              <Input size="medium" className="w-100" placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              label="Mobile No"
              name="phoneNo"
              rules={[{ required: true, message: "Please input your mobile number!" }]}
            >
              <InputNumber size="medium" className="w-100" placeholder="Mobile No" type="number" />
            </Form.Item>
            <Form.Item
              label={"Email Address"}
              name="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input size="medium" style={{ width: "100%" }} placeholder="Email" type="email" />
            </Form.Item>

            <Button
              className={"btn"}
              size={"medium"}
              type="primary"
              htmlType="submit"
              style={{ marginTop: "10px" }}
            >
              Enter Promo
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
export default UpdateProfile;
