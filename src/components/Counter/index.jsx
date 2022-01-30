import React, { Component } from "react";
import Button from "../Button";
import Display from "../Display";

import { Container, Main, WrapperButton } from "./styles"

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      isNegative: false,
    }
  }

  hanndleClickSub() {
    let count = this.state.value - 1;
    this.setState({value: count});

    if (count < 0 && !this.state.isNegative) {
      this.setState({isNegative: true});
    }
  }

  hanndleClickAdd() {
    let count = this.state.value + 1;
    this.setState({value: count});

    
    if (count >= 0 && this.state.isNegative) {
      this.setState({isNegative: false});
    }
  }

  render() {
    const { value, isNegative } = this.state;

    return (
      <Container>
        <Main>
          <Display isNegative={isNegative} value={value} />

          <WrapperButton>
            <Button onClick={() => this.hanndleClickSub()} />
            <Button onClick={() => this.hanndleClickAdd()} add/>
          </WrapperButton>

        </Main>
      </Container>
    )
  }
}

export default Counter;