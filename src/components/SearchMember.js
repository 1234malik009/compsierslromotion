import React, {useEffect, useState} from "react";
import {DatePicker, Button, Form, InputNumber, Typography, Card} from "antd";

const SearchMember = ({setCompsieCompState, setMemberData}) => {
    const handleSubmit = (data) => {
        const allValues = {
            mememberNo: data.memberNo,
            dob: new Date(data.dob).toLocaleString(),
        };
        setMemberData(allValues);
        setCompsieCompState(1);
    };
    return (
        <div>
            <Card
                style={{maxWidth: "750px", marginInline: "auto"}}
                bordered={false}
            >
                <Form
                    layout="vertical"

                    onFinish={handleSubmit}
                    style={{marginTop: "20px", textAlign: "start"}}
                >
                    <Typography.Title style={{marginBlock: 0}} className="text-slab">
                        Search Member
                    </Typography.Title>
                    <Typography.Text
                        style={{fontSize: "17px"}}
                        className={"text-inter"}
                    >
                        Firstly, search your profile using Member No and DOB.
                    </Typography.Text>
                    <br/>
                    <br/>
                    <Form.Item
                        label="Member No"
                        name="memberNo"
                        rules={[
                            {
                                required: true,
                                message: "Please enter Member No",
                            },
                        ]}
                    >
                        <InputNumber
                            size={"medium"}
                            className={"w-100"}
                            placeholder="Enter Member No"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Date of Birth"
                        name="dob"
                        rules={[
                            {
                                required: true,
                                message: "Please choose a Date of Birth",
                            },
                        ]}
                    >
                        <DatePicker
                            size={"medium"}
                            className={"w-100"}
                            placeholder="DD-MM-YYYY"
                            format="DD-MM-YYYY"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className={"btn"}
                            size={"medium"}
                            type="primary"
                            htmlType="submit"
                            style={{textAlign: "center"}}
                        >
                            Search
                        </Button>
                    </Form.Item>
                </Form>

            </Card>
        </div>
    );
};

export default SearchMember;
