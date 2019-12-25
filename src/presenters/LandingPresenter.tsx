import React from "react";
import { Typography, Row } from 'antd';
import Button from "antd/es/button";
import { Link } from "react-router-dom";


interface Props {
  loginWithGoogle(): void;
  disabled: boolean;
}
export const LandingPresenter: React.SFC<Props> = (props) => {
return (
<>
  <Row className="landing">
    <Typography.Title>The Future School </Typography.Title>
    <Button disabled={props.disabled} onClick={props.loginWithGoogle} className="google__btn" type="primary" icon="google" size="large">
      Login With Google
    </Button>
    <Typography.Paragraph className="landing__text">Click and Login with Google or <Link to="/onboarding/1">Skip</Link></Typography.Paragraph>
  </Row>
</>
);
}