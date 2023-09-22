import { Layout, Space } from 'antd';
import Image from '../images/Campsie RSL Logo.jpg';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'start',
  color: '#fff',
  height: 100,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#0e3360',
};



const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
    <img src={Image} className='header-image' alt="" />
      </Header>
    </Layout>
  </Space>
);

export default App;