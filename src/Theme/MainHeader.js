import React from "react";
import { Image, Layout, Space } from "antd";
const { Header } = Layout;

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  height: 100,
  lineHeight: "64px",
  backgroundColor: "#0b1e33",
};

const MainHeader = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
          <Image
            src={require("../assets/images/home.jpg")}
            height={90}
            style={{ objectFit: "cover" }}
          />
        </Header>
      </Layout>
    </Space>
  );
};

export default MainHeader;
