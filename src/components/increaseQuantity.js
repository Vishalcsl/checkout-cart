import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  ButtonToolbar,
  ButtonGroup,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";

const alert = (
  <Tooltip placement="bottom" className="in" id="tooltip-bottom">
    Quantity cannnot excced 10 units per user.
  </Tooltip>
);

class IncreaseQuantity extends Component {
  render() {
    console.log(this.state);
    return (
      <Row className="show-grid">
        <Col md={6}>Qnty:-</Col>
        <Col md={3}>{this.props.quantity}</Col>
        <Col md={3}>
          <ButtonToolbar>
            <ButtonGroup>
              {this.props.quantity === 10 ? (
                <OverlayTrigger placement="bottom" overlay={alert}>
                  <Button
                    className="qnty-btn"
                    disabled={this.props.isDisabled}
                    onClick={
                      this.props.quantity <= 9
                        ? this.props.handleIncrease
                        : this.props.disableIt
                    }
                  >
                    Add+
                  </Button>
                </OverlayTrigger>
              ) : (
                <Button
                  className="qnty-btn"
                  disabled={this.props.quantity < 10 ? false : true}
                  onClick={
                    this.props.quantity <= 9
                      ? this.props.handleIncrease
                      : this.props.disableIt
                  }
                >
                  Add+
                </Button>
              )}

              <Button
                className="qnty-btn"
                disabled={this.props.quantity < 1 ? true : false}
                onClick={
                  this.props.quantity >= 1
                    ? this.props.handleDecrease
                    : this.props.disableIt
                }
              >
                Remove-
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    );
  }
}

export default IncreaseQuantity;
