import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Taxes extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>GST @12% </Col>
        <Col md={6}>{`Rs${this.props.taxes}`}</Col>
      </Row>
    );
  }
}

export default Taxes;
