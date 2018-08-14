import React from "react";
import { Button, Input } from "antd";

const { Provider, Consumer } = React.createContext();

const Child3 = () => (
  <Consumer>
    {color => <Button style={{ background: color }}>Button With Theme</Button>}
  </Consumer>
);

const Child2 = () => <Child3 />;

const Child1 = () => <Child2 />;

class ThemeProvider extends React.Component {
  state = { color: "red" };

  handleChangeColor = event => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <Provider value={this.state.color}>
        <Input type="color" onChange={this.handleChangeColor} />
        <Child1 />
      </Provider>
    );
  }
}

export default ThemeProvider;
