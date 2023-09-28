import React from 'react';
import {DatePicker, Button, Form, InputNumber, Typography, Card} from 'antd';

const SearchMember = ({setMemberFetched, setMemberData}) => {

    const handleSubmit = (data) => {
        const allValues = {
            mememberNo: data.memberNo,
            dob: new Date(data.dob).toLocaleString()
        }
        console.log(allValues);
        setMemberData(allValues)
        setMemberFetched(true)
    };

    return (
        <div>
            <Card style={{maxWidth: '750px', marginInline: 'auto'}} bordered={false}>
                <Form onFinish={handleSubmit} style={{marginTop: '20px', textAlign: 'start'}}>
                    <Typography.Title style={{marginBlock: 0}} className='text-slab'>Search Member
                    </Typography.Title>
                    <Typography.Text style={{fontSize: '17px'}} className={'text-inter'}>Firstly Search Your Profile Using Member No and Date Of Birth
                        membership.</Typography.Text>
                    <br/><br/><br/><Typography.Text style={{color: "white", fontSize: "16px"}}>Member
                    No</Typography.Text>
                    <Form.Item
                        name="memberNo"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter Member No',
                            },
                        ]}
                    >
                        <InputNumber
                            size={'large'}
                            className={'w-100'}
                            placeholder="Enter Member No"
                        />
                    </Form.Item>
                    <Typography.Text style={{color: "white", fontSize: "16px"}}>Date Of Birth</Typography.Text>
                    <Form.Item
                        name="dob"
                        rules={[
                            {
                                required: true,
                                message: 'Please choose a Date of Birth',
                            },
                        ]}
                    >
                        <DatePicker
                            size={'large'}
                            className={'w-100'}
                            placeholder="DD-MM-YYYY"
                            format="DD-MM-YYYY"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className={'btn'} size={'large'} type="primary" htmlType="submit">
                            Search
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default SearchMember;