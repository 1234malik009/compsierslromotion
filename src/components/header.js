import React from 'react';
import { Layout, Space } from 'antd';


const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'start',
  color: '#fff',
  height: 100,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#0b1e33',
};



const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
      <img src={require('../components/home.jpg')} alt="Logo-Image" height={100} />
      </Header>
    </Layout>
    </Space>
    );

export default App;