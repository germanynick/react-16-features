import React from "react";
import { Button, notification } from "antd";

// React 15:
//
// const ForwardRef = ({ forwardRef, ...props }) => (
//   <button ref={forwardRef} {...props}>
//     Receive Ref
//   </button>
// );

const ForwardRef = React.forwardRef((props, ref) => (
  <button ref={ref} {...props}>
    Receive REF
  </button>
));

// React 15
//
// <button ref={(instance) => this.buttonRef = instance} />
//

class Container extends React.Component {
  buttonRef = React.createRef();

  showNoti = () => {
    notification.success({
      message: "Hello!",
      description: "This is a message that was click by second button!"
    });
  };

  handleClickAdd = () => {
    this.buttonRef.current.addEventListener("click", this.showNoti);
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickAdd}>Add Event</Button>
        <ForwardRef ref={this.buttonRef} />
      </div>
    );
  }
}

export default Container;
