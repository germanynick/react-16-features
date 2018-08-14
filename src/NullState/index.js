import React from "react";
import { Button } from "antd";

class NullState extends React.Component {
  state = {
    title: "Hello world"
  };

  setTitle = title => {
    this.setState(
      ({ title: oldTitle }) => (oldTitle === title ? null : { title })
    );
  };

  render() {
    console.log("Re-render");

    return (
      <div>
        {this.state.title}
        <Button onClick={() => this.setTitle("Hello world")}>
          Hello world
        </Button>
        <Button onClick={() => this.setTitle("Hello world 2")}>
          Hello world 2
        </Button>
      </div>
    );
  }
}

export default NullState;
