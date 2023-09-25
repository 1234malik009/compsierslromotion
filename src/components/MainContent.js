import { Image, Layout, Space } from 'antd';
import SearchMember from './SearchMember';
import { useState } from 'react';
import MemberDetail from './MemberDetail';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'transparent',
};

const MainContent = () => {

  const [isMemberFetched, setMemberFetched] = useState(false)

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
        height: '100%'
      }}
      size={[0, 48]}
    >
      <Layout>
        <Content style={contentStyle}>
          <Image className='banner-image' src={require('../Banner.jpg')} height={'100%'} style={{ marginTop: '50px' }} />
          <h1 style={{fontSize: '50px', marginTop: '40px'}}>CAMPSIE RSL PROMOTION</h1>
          <p style={{fontSize: '30px', fontWeight: '400', marginTop: '5px'}}>PUTTING OUR COMMUNITY FIRST</p>
          {/* Show Language Component If Language is not selected */} 
          {(isMemberFetched == false) ? <SearchMember setMemberFetched={setMemberFetched}/> : <MemberDetail/>}
        </Content>
      </Layout>
    </Space>
  );
};

export default MainContent;