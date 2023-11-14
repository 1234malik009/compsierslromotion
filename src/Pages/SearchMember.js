import React, { useEffect, useState } from "react";
import { Button, Form, InputNumber, Typography, Card } from "antd";
import { searchMember, startSession } from "../helper/api";
import axios from "axios";

const SearchMember = ({ setCompsieCompState, setMemberData }) => {
  const callSearchMemberAPI = async (values) => {
    try {
      const sessionToken = await getSessionToken();
      const memberData = await getMemberDetails(sessionToken, values.membershipId);

      console.log(memberData);

      setCompsieCompState(2);
    } catch (error) {
      console.error("Error during API calls", error);
    }
  };

  const getSessionToken = async () => {
    const url = "http://14.200.178.102:44000";
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const raw = JSON.stringify({
      registrationCode: "FEE272F8D227CAA9",
      userId: "OUTACAMP",
      webPassword: "A27983B0169A7337",
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw,
      redirect: "follow",
    };

    const response = await axios(url + "/api/session/startWebSession", requestOptions);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(`Failed to start session: ${result.error || response.statusText}`);
    }

    headers.append("Authorization", `Bearer ${result.sessionToken}`);
    return result.sessionToken;
  };

  const getMemberDetails = async (sessionToken, memberNo) => {
    const url = "http://14.200.178.102:44000";
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", `Bearer ${sessionToken}`);

    const raw = JSON.stringify({
      membershipId: memberNo,
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw,
      redirect: "follow",
    };

    const response = await axios(url + "/api/pos/getFullMemberDetails", requestOptions);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to get member details: ${result.error || response.statusText}`);
    }

    return result;
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
