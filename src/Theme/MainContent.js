import { Image, Layout, Space, Typography } from 'antd'
import SearchMember from '../Pages/SearchMember'
import React, { useState } from 'react'
import MemberDetail from '../Pages/MemberDetail'
import UpdateProfile from '../Pages/UpdateProfile'

const { Content } = Layout

const contentStyle = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: 'transparent',
}

const MainContent = () => {
	const [compsieCompState, setCompsieCompState] = useState(0)
	const [memberData, setMemberData] = useState([])

	return (
		<Space
			direction="vertical"
			style={{
				width: '100%',
				height: '100%',
			}}
			size={[0, 48]}
		>
			<Layout>
				<Content style={contentStyle}>
					<Image
						className="banner-image"
						src={require('../Banner.jpg')}
						height={'100%'}
						style={{ marginTop: '50px' }}
					/>

					<Typography.Title level={1} className={'hero__title text-play'}>
						CAMPSIE RSL
					</Typography.Title>
					<Typography.Text className={'text-inter hero__para'}>
						PUTTING OUR COMMUNITY FIRST
					</Typography.Text>
					{compsieCompState == 0 ? (
						<SearchMember
							setCompsieCompState={setCompsieCompState}
							setMemberData={setMemberData}
						/>
					) : compsieCompState == 1 ? (
						<MemberDetail setCompsieCompState={setCompsieCompState} />
					) : (
						<UpdateProfile setCompsieCompState={setCompsieCompState} />
					)}
				</Content>
			</Layout>
		</Space>
	)
}

export default MainContent
