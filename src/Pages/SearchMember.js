import React, { useEffect, useState } from "react";
import { Button, Form, InputNumber, Typography, Card } from "antd";
import {getMemberDetails, getToken, searchMember, startSession} from "../helper/api";
import axios from "axios";

const SearchMember = ({ setCompsieCompState, setMemberData }) => {
  const callSearchMemberAPI = async (values) => {
    console.log(values)
    try {
      const token = await getToken();
      const memberDetails = await getMemberDetails(token, values.membershipId);
      setMemberData(memberDetails)
      setCompsieCompState(2)
      // Use the member details in your component logic
    } catch (error) {
      console.error('Error fetching member details:', error.message);
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
          <Form.Item>
            <Button className={"btn"} size={"medium"} type="primary" htmlType="submit" style={{ textAlign: "center" }}>
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SearchMember;
