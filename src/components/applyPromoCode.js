import React, { Component } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import {
  Collapse,
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Grid,
  Row
} from "react-bootstrap";
import { connect } from "reatc-redux";
import { handleChange } from "../actions/promoCodeAction";

class ApplyPromoCode extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      visible: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  handleChange = e => {
    this.props.handleChange(e);
  };

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
          className="apply-promo-btn"
          bsSize="large"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open ? "Back" : "Apply Promo"}
          {this.state.open ? "<<" : "+"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Form name="form" onSubmit={this.props.getDiscount}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Enter your promocode here!</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter valid PromoCode"
                  onChange={this.handleChange}
                  name="promocode"
                />
                <FormControl.Feedback />
                <HelpBlock>Applied only if valid.</HelpBlock>
              </FormGroup>
              <FormGroup>
                <Button
                  onClick={this.show}
                  disabled={this.props.disable}
                  type="submit"
                  bsSize="large"
                  bsStyle="success"
                  block
                >
                  Apply
                </Button>
                {this.props.check == true ? (
                  <Rodal visible={this.state.visible} onClose={this.hide}>
                    <div>
                      <Grid>
                        <Row className="show-grid">
                          <h3 style={{ color: "green" }}>
                            PromoCode Applied Successfully
                          </h3>
                        </Row>
                        <Row className="pop-up-btn-row">
                          <Button
                            className="pop-up-btn"
                            bsSize="large"
                            bsStyle="success"
                            onClick={this.hide}
                          >
                            ok
                          </Button>
                        </Row>
                      </Grid>
                    </div>
                  </Rodal>
                ) : (
                  <Rodal visible={this.state.visible} onClose={this.hide}>
                    <div>
                      <Grid>
                        <Row className="show-grid">
                          <h3 style={{ color: "red", textAlign: "left" }}>
                            Error!!
                          </h3>
                          <h3 style={{ color: "red", textAlign: "left" }}>
                            Please Enter a valid PromoCode!!
                          </h3>
                        </Row>
                        <Row className="pop-up-btn-row">
                          <Button
                            className="pop-up-btn"
                            bsSize="large"
                            bsStyle="danger"
                            onClick={this.hide}
                          >
                            ok
                          </Button>
                        </Row>
                      </Grid>
                    </div>
                  </Rodal>
                )}
              </FormGroup>
            </Form>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(ApplyPromoCode);
