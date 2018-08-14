import React from "react";
import { times } from "lodash";

const items = times(1000, index => index);

class WillMount extends React.Component {
  componentWillMount(props) {
    // No side effect...
    // this.setState({ });
    // dispatch(action)
  }

  render() {
    console.log("Will Mount");

    return (
      <ul>
        <li>Long time to render</li>
        {items.map(key => <li key={key}>{key}</li>)}
      </ul>
    );
  }
}

export default WillMount;
