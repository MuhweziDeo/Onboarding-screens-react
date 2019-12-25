import React from "react";
import { Layout } from "../../shared/Layout";
import { Row, Typography, Form, Input, Button, } from "antd";

interface Props {
    disabled: boolean;
    interest: string;
    onChangeIntrest(value: string): void;
    submit(): void;
}
export const Screen3Presenter: React.SFC<Props> = props => {
    return (
        <Layout>
            <Row className="screen__header">
                <Typography.Title level={2}>User Onboarding</Typography.Title>
                <Typography.Paragraph>Part 3/3-Short Reponse Question</Typography.Paragraph>
            </Row>

            <Form>
                <Row>
                    <Typography.Text>Why are u intrested in Software Engineering?</Typography.Text>
                    <Form.Item
                         validateStatus={(props.interest !== ""&& props.interest.length >= 10) ? 
                         "": props.interest === "" ? "validating": "error"}
                         hasFeedback={(props.interest !== ""&& props.interest.length > 0)}
                         help={(props.interest !== ""&& props.interest.length >= 10) ? null: 
                         props.interest === "" ? null : "Experience must be atleast 10 characters"}
                    >
                    <Input.TextArea 
                        value={props.interest} 
                        onChange={({target: {value}}) => props.onChangeIntrest(value)} 
                        rows={8} 
                    />
                    </Form.Item>
                    
                </Row>
                
                <Row>
                    <Button onClick={props.submit} disabled={props.disabled || !(props.interest.length >=10)} className="btn-continue" type="primary" shape="round" size="large">
                        Finish
                    </Button>
                </Row>
            </Form>
        </Layout>
    )
}