import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./App.css";
import SubTotal from "./components/subtotal";
import DeliveryCharges from "./components/deliveryCharges";
import Taxes from "./components/taxes";
import Total from "./components/total";
import ItemDetails from "./components/itemDetails";
import ApplyPromoCode from "./components/applyPromoCode";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 90,
      deliveryCharges: 0,
      taxes: 90 * 0.18,
      total: 90 + 0 + 90 * 0.18
    };
  }
  render() {
    return (
      <div className="container">
        <Grid className="checkout-box">
          <SubTotal subtotal={this.state.subtotal.toFixed(2)} />
          <DeliveryCharges
            deliveryCharges={this.state.deliveryCharges.toFixed(2)}
          />
          <Taxes taxes={this.state.taxes} />
          <hr />
          <Total total={this.state.total} />
          <ItemDetails total={this.state.total} />
          <hr />
          <ApplyPromoCode />
        </Grid>
      </div>
    );
  }
}

export default App;
