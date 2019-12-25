import React from "react";
import { Layout } from "../../shared/Layout";
import { Row, Typography, Form, Input, Button } from "antd";

interface Props {
    college: string;
    company:string;
    experience: number;
    onChangeCollege(value: string): void;
    onChangeCompany(value: string): void;
    onChangeExperience(value: number): void;
    disabled: boolean;
    submit(): void;
}
export const Screen2Presenter: React.SFC<Props> = props => {
    return (
        <Layout>
            <Row className="screen__header">
                <Typography.Title level={2}>User Onboarding</Typography.Title>
                <Typography.Paragraph>Part 2/3-Basic Questions</Typography.Paragraph>
            </Row>

            <Form>
                <Row>
                    <Typography.Text>What College did you go to?</Typography.Text>
                    <Input 
                        value={props.college} 
                        onChange={({target: {value}}) => props.onChangeCollege(value)} 
                        size="large" 
                    />
                </Row>

                <Row>
                    <Typography.Text>What was the last company you worked at ?</Typography.Text>
                    <Input
                        value={props.company} 
                        onChange={({target: {value}}) => props.onChangeCompany(value)}  
                        size="large" 
                    />
                </Row>

                <Row>
                    <Typography.Text>How many years of experience do you have?</Typography.Text>
                    <Input
                        value={props.experience} 
                        onChange={({target: {value}}) => props.onChangeExperience(Number(value))} 
                        size="large"
                        type="number" 
                    />
                </Row>

                <Row>
                    <Button 
                        disabled={props.disabled} 
                        onClick={props.submit}
                        className="btn-continue" 
                        type="primary" 
                        shape="round" 
                        size="large">
                        Continue
                    </Button>
                </Row>
            </Form>
        </Layout>
    )
}