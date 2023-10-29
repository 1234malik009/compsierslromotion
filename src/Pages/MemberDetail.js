import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const memberData = {
  first_name: "Brad",
  last_name: "Waston",
  gander: "male/female",
  phoneNo: "07878787878",
  dateOfBirth: "13-11-1995",
  memberShipNo: "12345678",
  date_registered: "123 Smith St, Campsie",
  expiry_date:"19-05-2024"
};

const MemberDetail = ({ setCompsieCompState }) => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    setCompsieCompState(3);
  };

  let onContinueClick = () => {
    let token = generateFakeToken();
    let tokenData = {
      token: token,
      status: false,
    };
    localStorage.removeItem("token");
    localStorage.setItem("token", JSON.stringify(tokenData));
    navigate("/" + token);
  };

  let generateFakeToken = () => {
    let token = "Token= " + "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 40; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
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
            style={{ textAlign: "left", fontSize: '30px', marginBlock: "0px" }}
          >
            Please check your contact details to confirm they are upto date.
          </Typography.Title>
          {/* <Typography.Text
            className={"text-slab"}
            style={{ textAlign: "left", display: "block", fontSize: "20px" }}
          >
            Verify your profile & procced to continue
          </Typography.Text> */}
          <Card bordered={false} bodyStyle={{ padding: "0px" }}>
            <Row>
              <Col xs={24} md={12}>
                <Row>
                  <Col xs={12}>
                    <Typography.Title
                      level={4}
                      className="text-white text-play fs-18"
                    >
                      First Name:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.first_name}
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
                      Membership No:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.memberShipNo}
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
                      Last Name:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.last_name}
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
                    	Gender:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.gander}
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
                      Mobile No:
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
                      Address:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.date_registered}
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
                      {memberData.dateOfBirth}
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
                      Date Registered:
                    </Typography.Title>
                  </Col>
                  <Col xs={12} className={"text-left"}>
                    <Typography.Text className="text-green text-inter fs-19">
                      {memberData.expiry_date}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div
              className="button-container"
              style={{ textAlign: "end", marginTop: "25px" }}
            >
              <Button
                className={"btn"}
                style={{ margin: "2px" }}
                type="primary"
                htmlType="submit"
                onClick={handleSubmit}
              >
                {" "}
                Review & Update details
              </Button>
              {/* <Button
                onClick={onContinueClick}
                style={{ margin: "2px" }}
                className={"text-black"}
                type="primary"
                htmlType="submit"
              >
                Enter Promotion
              </Button> */}
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default MemberDetail;