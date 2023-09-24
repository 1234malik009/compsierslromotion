import { Image, Layout, Select, Space } from 'antd';
import { useState } from 'react';
import SearchMember from './SearchMember';

const { Option } = Select;
const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'transparent',
};

const languageOptions = [
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Dutch',
  'Russian',
  'Chinese',
  'Japanese',
  'Korean',
  'Arabic',
  'Turkish',
  'Swedish',
  'Danish',
  'Norwegian',
  'Finnish',
  'Greek',
  'Hindi',
  'Bengali',
  'Urdu',
  'Punjabi',
  'Vietnamese',
  'Thai',
  'Hebrew',
  'Polish',
  'Romanian',
  'Czech',
  'Hungarian',
  'Ukrainian',
  'Slovak',
  'Slovenian',
  'Croatian',
  'Serbian',
  'Bulgarian',
  'Estonian',
  'Latvian',
  'Lithuanian',
  'Macedonian',
  'Albanian',
  'Georgian',
  'Armenian',
  'Azerbaijani',
  'Kazakh',
  'Uzbek',
];

const MainContent = () => {
  // Declare and initialize the state variable
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);
  const [selectedLangauge, setLanguageSelected] = useState("Choose Language")

  let handleLanguageChange = (language) => {
    console.log(language)
    setLanguageSelected(language)
    setIsLanguageSelected(true)
  }

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
          <Image src={require('../Banner.jpg')} height={'100%'} style={{ marginTop: '50px' }} />
          <h1 style={{fontSize: '50px', marginTop: '40px'}}>CAMPSIE RSL PROMOTION</h1>
          <p style={{fontSize: '30px', fontWeight: '400', marginTop: '5px'}}>PUTTING OUR COMMUNITY FIRST</p>
          {/* Show Language Component If Language is not selected */}
          {isLanguageSelected == false ? <Select
            showSearch
            size='medium'
            style={{ width: '400px', marginTop: '10px'}}
            placeholder="Choose Language"
            optionFilterProp="children"
            onChange={handleLanguageChange}
            value={selectedLangauge}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {languageOptions.map((language, index) => (
              <Option key={index} value={language}>
                {language}
              </Option>
            ))}
          </Select> : 
          <SearchMember/> }
        </Content>
      </Layout>
    </Space>
  );
};

export default MainContent;