import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";

const { Provider, Consumer } = React.createContext();

const Container = styled.div`
  border: 1px solid black;
  padding: 30px;
  margin: 10px;
`;

const Child3 = () => (
  <Container>
    Children 3
    <Consumer>
      {color => (
        <Button style={{ background: color }}>Button With Theme</Button>
      )}
    </Consumer>
  </Container>
);

const Child2 = () => (
  <Container>
    Children 2<Child3 />
  </Container>
);

const Child1 = () => (
  <Container>
    Children 1<Child2 />
  </Container>
);

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

class ThemeProvider extends React.Component {
  state = { color: "red" };

  handleClick = event => {
    const color = getRandomColor();
    this.setState({ color });
  };

  render() {
    const { color } = this.state;

    return (
      <Provider value={color}>
        <Container>
          <Button onClick={this.handleClick}>{`Random Color ${color}`}</Button>
          Parent
          <Child1 />
        </Container>
      </Provider>
    );
  }
}

export default ThemeProvider;
