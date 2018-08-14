import React from "react";
import { Button } from "antd";

class ErrorBoundary extends React.Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log(info);
  }

  render() {
    if (this.state.error) {
      // Fallback UI
      return <h1>Yikes, something went wrong!</h1>;
    }
    return this.props.children;
  }
}

class SampleButton extends React.Component {
  handleClick = event => {
    event.preventDefault();

    throw new Error();
  };

  render() {
    return <Button onClick={this.handleClick} {...this.props} />;
  }
}

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <SampleButton>With ErrorBoundary </SampleButton>
        </ErrorBoundary>
        <SampleButton> Without ErrorBoundary</SampleButton>
      </div>
    );
  }
}

export default Wrapper;
