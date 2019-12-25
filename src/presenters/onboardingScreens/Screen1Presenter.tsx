import React from "react";
import { Typography, Row, Col, Form, Input, Button } from "antd";
import { Layout } from "../../shared/Layout";
import { validateEmail, validatePhone } from "../../utils";


type name = "email" | "phoneNumber" | "lastName" | "firstName";
interface Props {
    lastName: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    submit: () => void;
    onChange(name: name, value: string): any;
    disabled?: boolean;
}

export const Screen1Presenter: React.SFC<Props> = (props) => {
    return (
        <Layout>
        <Row className="screen__1">
            <Row className="screen__header">
                <Typography.Title level={2}>User Onboarding</Typography.Title>
                <Typography.Paragraph>Part 1/3-Basic Questions</Typography.Paragraph>
            </Row>
            <Form>
                <Row className="name">
                    <Col span={11}>
                        <Typography.Text>First Name</Typography.Text>
                        <Form.Item
                            validateStatus={(props.firstName !== ""&& props.firstName.length >= 4) ? 
                                "success": props.firstName === "" ? "validating": "error"}
                            hasFeedback={(props.firstName !== ""&& props.firstName.length > 0)}
                            help={(props.firstName !== ""&& props.firstName.length >= 4) ? null: 
                            props.firstName === "" ? null : "Name must be 4 characters"}
                            >
                        <Input
                            allowClear
                            onChange={({target: {value}}) => props.onChange("firstName", value) }  
                            name="firstName" 
                            value={props.firstName} 
                            className="name__first" 
                            size="large" />
                        </Form.Item>
                        
                    </Col>

                    <Col span={1}>
                        
                    </Col>
                    <Col span={12}>
                        <Typography.Text>Last Name</Typography.Text>
                        <Form.Item
                            validateStatus={(props.lastName !== ""&& props.lastName.length >= 4) ? 
                            "success": props.lastName === "" ? "validating": "error"}
                            hasFeedback={(props.lastName !== ""&& props.lastName.length > 0)}
                            help={(props.lastName !== ""&& props.lastName.length >= 4) ? null: 
                            props.lastName === "" ? null : "Name must be 4 characters"}
                        >
                        <Input 
                            allowClear
                            onChange={({target: {value}}) => props.onChange("lastName", value) } 
                            name="lastName" value={props.lastName} 
                            className="name__last" 
                            size="large" 
                        />
                        </Form.Item>
                        
                    </Col>
                </Row>
                <Row>
                    <Typography.Text>Email</Typography.Text>
                    <Form.Item 
                        validateStatus={(props.email !== ""&& validateEmail(props.email)) ? 
                        "success": props.email === "" ? "validating": "error"}
                        hasFeedback={(props.email !== ""&& props.email.length > 0)}
                        help={(props.email !== ""&& validateEmail(props.email)) ? null: 
                        props.email === "" ? null : "Please enter a valid email"}
                        >
                    <Input
                        type="email" 
                        allowClear
                        onChange={({target: {name, value}}) => props.onChange("email", value) } 
                        name="email" 
                        value={props.email} 
                        size="large" />
                    </Form.Item>
                    
                </Row>

                <Row>
                    <Typography.Text>Phone Number</Typography.Text>
                    <Form.Item
                        validateStatus={(props.phoneNumber !== ""&& validatePhone(props.phoneNumber)) ? 
                        "success": props.phoneNumber === "" ? "validating": "error"}
                        hasFeedback={(props.phoneNumber !== ""&& props.phoneNumber.length > 0)}
                        help={(props.phoneNumber !== ""&& validatePhone(props.phoneNumber)) ? null: 
                        props.phoneNumber === "" ? null : "Please provide a valid phone number"}
                        >
                        <Input 
                            allowClear
                            onChange={({target: {value}}) => props.onChange("phoneNumber", value) } 
                            name="phoneNumber" 
                            value={props.phoneNumber} 
                            size="large" 
                        />
                    </Form.Item>
                    
                </Row>

                <Row>
                    <Button 
                    disabled={props.disabled || !validateEmail(props.email) || !validatePhone(props.phoneNumber) || !(props.lastName.length >= 4) || !(props.firstName.length >= 4)} 
                    onClick={props.submit} className="btn-continue" type="primary" shape="round"  size="large"
                    >
                        Continue
                    </Button>
                </Row>
            </Form>
        </Row>
        </Layout>
    )
}