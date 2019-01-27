import React, { Component } from "react";
import Rodal from "rodal";
import { Button } from "react-bootstrap";
class CompletionPage extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    this.setState({ visible: true });
  }
  hide() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Button
          className="checkout-btn"
          bsStyle="danger"
          onClick={this.show}
          bsSize="large"
          disabled={this.props.quantity > 0 ? false : true}
        >
          Proceed Checkout
        </Button>
        <Rodal visible={this.state.visible} onClose={this.hide}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "green" }}>Completed</h1>
          </div>
        </Rodal>
      </div>
    );
  }
}

export default CompletionPage;
