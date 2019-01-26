import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class SubTotal extends Component {
  constructor() {
    super();
    this.state = {
      subtotal: 90
    };
  }
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Subtotal:-</Col>
        <Col md={6}>{`$${this.props.subtotal}`}</Col>
      </Row>
    );
  }
}

export default SubTotal;
