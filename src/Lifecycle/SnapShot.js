import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import faker from "faker";
import { times } from "lodash";

const Container = styled.div`
  height: 300px;
  overflow: scroll;
`;

class SnapShot extends React.Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.state = {
      items: []
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.items.length < this.state.items.length) {
      const content = this.content.current;
      return content.scrollHeight - content.scrollTop;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const content = this.content.current;
      content.scrollTop = content.scrollHeight - snapshot;
    }
  }

  handleAddMore = () => {
    this.setState({
      items: [...this.state.items, ...times(10, () => faker.name.firstName())]
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Button onClick={this.handleAddMore}>Add 10 More</Button>
        <Container innerRef={this.content}>
          <ul>
            {items.map((item, index) => <li key={index}>{`${index} item`}</li>)}
          </ul>
        </Container>
      </div>
    );
  }
}

export default SnapShot;
