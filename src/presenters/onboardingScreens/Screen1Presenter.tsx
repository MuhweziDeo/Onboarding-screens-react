import React from "react";
import { Typography, Row, Col, Form, Input, Button } from "antd";
import { Layout } from "../../shared/Layout";


export const Screen1Presenter: React.SFC = (props) => {
    console.log(props);
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
                        <Input className="name__first" size="large" />
                    </Col>

                    <Col span={1}>
                        
                    </Col>
                    <Col span={12}>
                        <Typography.Text>Last Name</Typography.Text>
                        <Input className="name__last" size="large" />
                    </Col>
                </Row>
                <Row>
                    <Typography.Text>Email</Typography.Text>
                    <Input size="large" />
                </Row>

                <Row>
                    <Typography.Text>Phone Number</Typography.Text>
                    <Input size="large" />
                </Row>

                <Row>
                    <Button className="btn-continue" type="primary" shape="round" size="large">
                        Continue
                    </Button>
                </Row>
            </Form>

        </Row>
        </Layout>
    )
}