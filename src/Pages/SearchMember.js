import React, { useState } from "react";
import { Button, Form, InputNumber, Typography, Card, message, DatePicker } from "antd";
import {getMemberDetails, getToken} from "../helper/api";
import dayjs from "dayjs";

const SearchMember = ({ setCompsieCompState, setMemberData }) => {

  let [loading, setLoading] = useState(false)

  const callSearchMemberAPI = async (values) => {
    let dateOfBrith = values['dateOfBirth'].format("YYYY-MM-DD")
    setLoading(true)
    try {
      const token = await getToken();
      const data = await getMemberDetails(token, values.membershipId);
      if(data.code == 50000){
        message.error("No Member Found")
      }else if(data.dateOfBirth != dateOfBrith){
        message.error("No Member Found")
      }else{
        setMemberData(data)
        setCompsieCompState(2)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
      message.error("Unable to fetch member details")
    }
  };

  return (
    <div>
      <Card style={{ maxWidth: "750px", marginInline: "auto" }} bordered={false}>
        <Form layout="vertical" onFinish={callSearchMemberAPI} style={{ marginTop: "20px", textAlign: "start" }}>
          <Typography.Title style={{ marginBlock: 0, fontSize: "22px" }} className="text-slab">
            Now let us find you.
          </Typography.Title>
          <Typography.Text style={{ fontSize: "17px" }} className={"text-inter"}>
            Please enter your club membership number.
          </Typography.Text>
          <br />
          <br />
          <Form.Item
            label="Member No"
            name="membershipId"
            rules={[
              {
                required: true,
                message: "Please enter Member No",
              },
            ]}
          >
            <InputNumber size={"medium"} className={"w-100"} placeholder="Enter Member No" />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            rules={[
              {
                required: true,
                message: "Please enter date Of Birth",
              },
            ]}
          >
            <DatePicker size={"medium"} className={"w-100"} placeholder="Enter date Of Birth" />
          </Form.Item>
          <Form.Item>
            <Button className={"btn"} size={"medium"} type="primary" htmlType="submit" loading={loading} style={{ textAlign: "center" }}>
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SearchMember;
