import React, {useEffect, useState} from "react";
import {DatePicker, Button, Form, InputNumber, Typography, Card} from "antd";
import {searchMember, startSession} from "../helper/api";

const SearchMember = ({setCompsieCompState, setMemberData}) => {
    const handleSubmit = async (data) => {
        const {sessionToken} = await startSession();
        const result = await searchMember(sessionToken,data.membershipId)
        console.log(result)
        // setMemberData(allValues);
        setCompsieCompState(2);
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
                        name="membershipId"
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
                    {/*<Form.Item*/}
                    {/*    label="Date of Birth"*/}
                    {/*    name="dob"*/}
                    {/*    rules={[*/}
                    {/*        {*/}
                    {/*            required: true,*/}
                    {/*            message: "Please choose a Date of Birth",*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <DatePicker*/}
                    {/*        size={"medium"}*/}
                    {/*        className={"w-100"}*/}
                    {/*        placeholder="DD-MM-YYYY"*/}
                    {/*        format="DD-MM-YYYY"*/}
                    {/*    />*/}
                    {/*</Form.Item>*/}
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
