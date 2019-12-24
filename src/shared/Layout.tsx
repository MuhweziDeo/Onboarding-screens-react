import React from "react";
import { Row } from "antd";

export const Layout: React.SFC = props => {
    return (
        <Row className="layout">
            {props.children}
        </Row>
    )
}