import React from "react";
import { Typography, Row, Col, Form, Input, Button } from "antd";
import { Layout } from "../../shared/Layout";


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
                        <Input 
                            onChange={({target: {value}}) => props.onChange("firstName", value) }  
                            name="firstName" 
                            value={props.firstName} 
                            className="name__first" 
                            size="large" />
                    </Col>

                    <Col span={1}>
                        
                    </Col>
                    <Col span={12}>
                        <Typography.Text>Last Name</Typography.Text>
                        <Input 
                            onChange={({target: {value}}) => props.onChange("lastName", value) } 
                            name="lastName" value={props.lastName} 
                            className="name__last" 
                            size="large" 
                        />
                    </Col>
                </Row>
                <Row>
                    <Typography.Text>Email</Typography.Text>
                    <Input 
                        onChange={({target: {name, value}}) => props.onChange("email", value) } 
                        name="email" 
                        value={props.email} 
                        size="large" />
                </Row>

                <Row>
                    <Typography.Text>Phone Number</Typography.Text>
                    <Input 
                        onChange={({target: {name, value}}) => props.onChange("phoneNumber", value) } 
                        name="phoneNumber" 
                        value={props.phoneNumber} 
                        size="large" 
                    />
                </Row>

                <Row>
                    <Button disabled={props.disabled || false} onClick={props.submit} className="btn-continue" type="primary" shape="round"  size="large">
                        Continue
                    </Button>
                </Row>
            </Form>
        </Row>
        </Layout>
    )
}