import { Image, Layout, Space, Typography} from 'antd';
import SearchMember from './SearchMember';
import { useState } from 'react';
import MemberMain from './MemberMain';


const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'transparent',
};

const MainContent = () => {
  const [isMemberFetched, setMemberFetched] = useState(false)
  const [memberData, setMemberData] = useState([])


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
          <Typography.Title level={1} className={'hero__title text-play'}>CAMPSIE RSL</Typography.Title>
          <Typography.Text className={'text-inter hero__para'}>PUTTING OUR COMMUNITY FIRST</Typography.Text>
          {!isMemberFetched ? <SearchMember setMemberFetched={setMemberFetched} memberData={memberData} setMemberData={setMemberData}/> : <MemberMain/> }
          {/* {showProfile && (<UpdateProfile visible={showProfile} handleOnClick={handleOnClick} handleHideMemberDetail={handleHideMemberDetail}/>)}
          {hideMemberDetail && (<SearchMember visible={hideMemberDetail} handleOnClick={handleOnClick} handleHideMemberDetail={handleHideMemberDetail}/>)} */}
        </Content>
      </Layout>
    </Space>
  );
};

export default MainContent;