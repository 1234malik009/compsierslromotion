import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import UpdateProfile from "./UpdateProfile";
import{Link} from 'react-router-dom'

const memberData = {
  name: "Brad Waston",
  email: "brad@gmail.com",
  phoneNo: "07878787878",
  dob: "1976-12-27",
  memberNo: "12345678",
  updated_at: "2021-03-20",
  createtion_date: "2021-03-20",
  status: "Active",
};

const MemberDetail = ({ setCompsieCompState }) => {
    
  const handleSubmit = () => {
    setCompsieCompState(2);
  };

  return (
    <div className="App">
      <div className="mamber-detail">
        <Card
          bordered={false}
          style={{ maxWidth: "900px", width: "100%", marginBottom: "30px" }}
        >
          <Typography.Title
            className={"text-play"}
            style={{ textAlign: "left", marginBlock: "0px" }}
          >
            Profile Detail
          </Typography.Title>
          <Typography.Text
            className={"text-slab"}
            style={{ textAlign: "left", display: "block", fontSize: "20px" }}
          >
            Verify your profile & procced to continue
          </Typography.Text>
          <Card bordered={false} bodyStyle={{ padding: "0px" }}>
            <Row>
              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      Name:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.name}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      Member No:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.memberNo}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      Email:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.email}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      Updated Date:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.updated_at}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      Phone No:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.phoneNo}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      Createtion Date:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.createtion_date}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      Date of Birth:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.dob}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>

              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      Status:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.status}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div
              className="button-container"
              style={{ textAlign: "end", marginTop: "25px" }}
            >
            <Link to='/Empty'>
                Yes
              </Link>
                
              
              <Button
                className={"btn"}
                style={{ margin: "2px" }}
                type="primary"
                htmlType="submit"
                onClick={handleSubmit}
              >
                {" "}
                Update Profile
              </Button>
              <Button
                style={{ margin: "2px" }}
                className={"text-black"}
                type="primary"
                htmlType="submit"
              >
                Yes Continue
              </Button>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default MemberDetail;
