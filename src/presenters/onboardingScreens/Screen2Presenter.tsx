import React from "react";
import { Layout } from "../../shared/Layout";
import { Row, Typography, Form, Col, Input, Button } from "antd";

export const Screen2Presenter: React.SFC = props => {
    return (
        <Layout>
            <Row className="screen__header">
                <Typography.Title level={2}>User Onboarding</Typography.Title>
                <Typography.Paragraph>Part 2/3-Basic Questions</Typography.Paragraph>
            </Row>

            <Form>
                <Row>
                    <Typography.Text>What College did you go to?</Typography.Text>
                    <Input size="large" />
                </Row>

                <Row>
                    <Typography.Text>What was the last company you worked at ?</Typography.Text>
                    <Input size="large" />
                </Row>

                <Row>
                    <Typography.Text>How many years of experience do you have?</Typography.Text>
                    <Input size="large" />
                </Row>

                <Row>
                    <Button className="btn-continue" type="primary" shape="round" size="large">
                        Continue
                    </Button>
                </Row>
            </Form>
        </Layout>
    )
}