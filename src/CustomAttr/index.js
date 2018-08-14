import React from "react";

// React 15
// <div />

// React 16:
// <div mycustomattribute="hello world" />
class CustomAttr extends React.Component {
  render() {
    return <div mycustomattribute="hello world">My Container</div>;
  }
}

export default CustomAttr;
