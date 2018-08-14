import React from "react";
import { Row, Col } from "antd";
import WillMount from "./WillMount";
import DerivedState from "./DerivedState";
import SnapShot from "./SnapShot";

class Lifecycle extends React.Component {
  render() {
    return (
      <Row>
        <Col span={8}>
          <DerivedState />
        </Col>
        <Col span={8}>
          <WillMount />
        </Col>
        <Col span={8}>
          <SnapShot />
        </Col>
      </Row>
    );
  }
}

export default Lifecycle;
