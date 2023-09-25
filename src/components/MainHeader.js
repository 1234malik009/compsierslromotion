import React from 'react';
import { Image, Layout, Space, Select } from 'antd';
import {useState} from 'react';
const { Option } = Select;
const { Header } = Layout;
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
  const [selectedLangauge, setLanguageSelected] = useState("Choose Language")

  let handleLanguageChange = (language) => {
    console.log(language)
    setLanguageSelected(language)
  }
  return(
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
            <Image src={require('../assets/images/home.jpg')} height={100} />
            <Select
            showSearch
            size='medium'
            style={{ width: '100px' , height: '30px', marginTop: '10px'}}
            // placeholder="Choose Language"
            title='Choose Language'
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
          </Select>
        </Header>
      </Layout>
    </Space>
)};

export default MainHeader;