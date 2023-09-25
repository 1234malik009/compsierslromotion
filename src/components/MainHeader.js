import React, { useEffect } from 'react';
import { Image, Layout, Space, Select } from 'antd';
import {useState} from 'react';
import GoogleTranslater from './GoogleTranslator';
const { Option } = Select;
const { Header } = Layout;

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
  height: 100,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#0b1e33',
};

const MainHeader = () => {

  return(
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
            <Image src={require('../assets/images/home.jpg')} height={100} />
            <GoogleTranslater/>
        </Header>
      </Layout>
    </Space>
)};

export default MainHeader;