import React, { Component } from "react";
import {
  Collapse,
  Button,
  form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";
class ApplyPromoCode extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
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
            <form>
              <FormGroup
                controlId="formBasicText"
                //validationState={this.getValidationState()}
              >
                <ControlLabel>Enter your promocode here!</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter valid PromoCode"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Applied only if valid.</HelpBlock>
              </FormGroup>
            </form>
            <Button bsSize="large" bsStyle="success" block>
              Apply
            </Button>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ApplyPromoCode;
