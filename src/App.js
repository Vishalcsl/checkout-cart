import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./App.css";
import SubTotal from "./components/subtotal";
import DeliveryCharges from "./components/deliveryCharges";
import Taxes from "./components/taxes";
import Total from "./components/total";
import ItemDetails from "./components/itemDetails";
import ApplyPromoCode from "./components/applyPromoCode";
import IncreaseQuantity from "./components/increaseQuantity";

const price = 9999;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 0,
      deliveryCharges: 0,
      taxes: 0,
      total: 0.0,
      disableButton: false,
      quantity: 0,
      check: true,
      disable: false
    };
    this.disableIt = this.disableIt.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.getDiscount = this.getDiscount.bind(this);
  }

  disableIt() {
    this.setState({ disableButton: !this.state.disableButton });
  }

  handleIncrease() {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
      subtotal: (prevState.quantity + 1) * price,
      taxes: ((prevState.quantity + 1) * price * 0.12).toFixed(2),
      total: (
        prevState.deliveryCharges +
        (prevState.quantity + 1) * price +
        (prevState.quantity + 1) * price * 0.12
      ).toFixed(2)
    }));
  }

  handleDecrease() {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1,
      subtotal: (prevState.quantity - 1) * price,
      taxes: ((prevState.quantity - 1) * price * 0.12).toFixed(2),
      total: (
        prevState.deliveryCharges +
        (prevState.quantity - 1) * price +
        (prevState.quantity - 1) * price * 0.12
      ).toFixed(2)
    }));
  }

  getDiscount = function(e) {
    const code = document.getElementById("formBasicText").value;
    e.preventDefault();
    if (code === "REPUBLIC70") {
      this.setState({
        total: (this.state.total * 0.9).toFixed(2),
        check: true,
        disable: true
      });
    } else {
      this.setState({ check: false, disable: false });
    }
  };

  render() {
    return (
      <div className="container">
        <Grid className="checkout-box">
          <SubTotal subtotal={this.state.subtotal.toFixed(2)} />
          <DeliveryCharges
            deliveryCharges={this.state.deliveryCharges.toFixed(2)}
            subtotal={this.state.subtotal}
            quantity={this.state.quantity}
          />
          <Taxes taxes={this.state.taxes} />
          <IncreaseQuantity
            isDisabled={this.state.disableButton}
            disableIt={this.disableIt}
            handleDecrease={this.handleDecrease}
            handleIncrease={this.handleIncrease}
            quantity={this.state.quantity}
          />
          <hr />
          <Total total={this.state.total} />
          <hr />
          <ItemDetails total={this.state.total} />
          <hr />
          <ApplyPromoCode
            getDiscount={this.getDiscount}
            check={this.state.check}
            disable={this.state.disable}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
