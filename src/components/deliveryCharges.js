import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var styles = {
  delivery: {
    textDecoration: "underline"
  },
  deliveryCharges: {
    color: "brown",
    fontWeight: 800
  }
};

class DeliveryCharges extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <h5>
          <strong>
            Delivery Charges are additional costs when the items ordered are
            less than a specific amount!!
          </strong>
        </h5>
      </Tooltip>
    );
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.delivery}>Delivery Charges:-</div>
          </OverlayTrigger>
        </Col>
        <Col md={6} style={styles.deliveryCharges}>
          {this.props.subtotal < 500 && this.props.quantity > 1
            ? "Rs40.00"
            : `Rs${this.props.deliveryCharges}`}
        </Col>
      </Row>
    );
  }
}

export default DeliveryCharges;
