import {Input, Layout, Space } from 'antd';
import Button from './button'
import SubmitButton from './submitbutton'
import Dob from './dob'

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'transparent',
};

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Content style={contentStyle}>
      <img src={require('../Banner.jpg')} alt="Logo-Image" height={300} style={{marginTop:'50px'}}  />
      <br />
      <Input style={ {width: 300}}/>
      <Button onClick={dob} />
      <br />
      <SubmitButton/>
      <br />
      
      <h1>CAMPSIE RSL</h1>
      <p>PUTTING OUR COMMUNITY FIRST</p>
      <Dob/>
      </Content>
       </Layout>
    
  </Space>
);
export default App;