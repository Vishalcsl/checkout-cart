import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

var style = {
  textcolor: {
    textColor: "red",
    fontWeight: 700
  }
};

class Total extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <h3>Total</h3>
        </Col>
        <Col md={6}>
          <h3 style={style.textcolor}>{`Rs${this.props.total}`}</h3>
        </Col>
      </Row>
    );
  }
}

export default Total;
