import React from 'react';
import { Image, Layout, Space } from 'antd';

const { Header } = Layout;

const headerStyle = {
  textAlign: 'start',
  color: '#fff',
  height: 100,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#0b1e33',
};

const MainHeader = () => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
            <Image src={require('../assets/images/home.jpg')} height={100} />
        </Header>
      </Layout>
    </Space>
  );

export default MainHeader;