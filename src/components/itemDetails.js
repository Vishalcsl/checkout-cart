import React, { Component } from "react";
import {
  Collapse,
  Well,
  Media,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-btn"
          bsSize="large"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open ? "Hide Details" : "Show Items Details"}
          {this.state.open ? "-" : "+"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well bsSize="large">
              <Media>
                <Media.Left>
                  <img
                    width={150}
                    height={400}
                    src="https://rukminim1.flixcart.com/image/832/832/jk1grrk0/mobile/8/x/n/asus-zenfone-max-pro-m1-zb601kl-4d102in-original-imaf7hajxvhhkckh.jpeg?q=70"
                    alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Specifications:-</Media.Heading>
                  <ListGroup>
                    <ListGroupItem bsStyle="success">
                      Brand:-<strong>Asus</strong>
                    </ListGroupItem>
                    <ListGroupItem bsStyle="info">
                      Model:-
                      <strong>
                        Zenfone, <i>Max M1 pro</i>
                      </strong>
                    </ListGroupItem>
                    <ListGroupItem bsStyle="warning">
                      Battery:-<strong>5000mAh</strong>
                    </ListGroupItem>
                    <ListGroupItem bsStyle="danger">
                      Camera:{" "}
                      <Row>
                        <Col md={6}>
                          Front:-<b>8MP</b>with Advance light sensing features
                          and led flash{" "}
                        </Col>
                        <Col md={6}>
                          (b)Rear:-
                          <b>13MP 5MP dual camera</b> with depth sensing and led
                          flash
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem bsStyle="success">
                      Processor:-<strong>Snapdargon 636 octa-core</strong>
                    </ListGroupItem>
                    <ListGroupItem bsStyle="info">
                      <Row>
                        <Col md={6}>
                          <strong>Total price:-{`$${this.props.total}`}</strong>
                        </Col>
                        <Col md={6}>Qty: 1</Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
