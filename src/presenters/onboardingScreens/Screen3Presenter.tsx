import React from "react";
import { Layout } from "../../shared/Layout";
import { Row, Typography, Form, Col, Input, Button, } from "antd";

export const Screen3Presenter: React.SFC = props => {
    return (
        <Layout>
            <Row className="screen__header">
                <Typography.Title level={2}>User Onboarding</Typography.Title>
                <Typography.Paragraph>Part 3/3-Short Reponse Question</Typography.Paragraph>
            </Row>

            <Form>
                <Row>
                    <Typography.Text>What College did you go to?</Typography.Text>
                    <Input.TextArea rows={8} />
                </Row>
                
                <Row>
                    <Button className="btn-continue" type="primary" shape="round" size="large">
                        Finish
                    </Button>
                </Row>
            </Form>
        </Layout>
    )
}