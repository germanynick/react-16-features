import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: green;
  margin: 10px;
  overflow: hidden;
`;

const Popup = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: 100px;
  left: 100px;
  background: red;
  display: ${({ visible }) => !visible && "none"};
`;

const PortalPopup = props =>
  ReactDOM.createPortal(
    <Popup {...props} />,
    document.getElementById("portal")
  );

class Portal extends React.Component {
  state = {
    visiblePopup1: false,
    visiblePopup2: false
  };

  toogle1 = () => {
    this.setState(({ visiblePopup1 }) => ({ visiblePopup1: !visiblePopup1 }));
  };

  toogle2 = () => {
    this.setState(({ visiblePopup2 }) => ({ visiblePopup2: !visiblePopup2 }));
  };

  render() {
    const { visiblePopup1, visiblePopup2 } = this.state;

    return [
      <Container>
        <Button onClick={this.toogle1}>Click Me 1</Button>
        200x200
        <Popup visible={visiblePopup1}>150x150</Popup>
      </Container>,
      <Container>
        <Button onClick={this.toogle2}>Click Me 2</Button>
        200x200
        <PortalPopup visible={visiblePopup2}>150x150</PortalPopup>
      </Container>
    ];
  }
}

export default Portal;
