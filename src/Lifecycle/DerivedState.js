import React from "react";
import { Input, Button } from "antd";
import { times } from "lodash";
import faker from "faker";

// React 16.3
class FilterList extends React.Component {
  state = {
    filterText: ""
  };

  static getDerivedStateFromProps(props, state) {
    const { items } = props;
    const { filterText, prevItems, prevFilterText } = state;

    if (items !== prevItems || filterText !== prevFilterText) {
      return {
        prevItems: items,
        prevFilterText: filterText,
        filterItems: items.filter(item => item.startsWith(filterText))
      };
    }

    return null;
  }

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const { filterItems } = this.state;
    console.log("New Filter List");

    return (
      <div>
        <Input onChange={this.handleChange} />
        <ul>{filterItems.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    );
  }
}

class OldFilterList extends React.Component {
  state = {
    filterText: "",
    filterItems: []
  };

  componentWillReceiveProps(nextProps) {
    const { items } = this.props;
    const { filterText } = this.state;

    if (items !== nextProps.items) {
      this.setState({
        filterItems: nextProps.items.filter(item => item.startsWith(filterText))
      });
    }
  }

  handleChange = event => {
    const { value } = event.target;
    const filterItems = this.props.items.filter(item => item.startsWith(value));

    this.setState({ filterText: value, filterItems });
  };

  render() {
    const { filterItems } = this.state;
    console.log("Old Filter List");

    return (
      <div>
        <Input onChange={this.handleChange} />
        <ul>{filterItems.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    );
  }
}

class DerivedState extends React.Component {
  state = {
    items: []
  };

  refreshData = () => {
    this.setState({ items: times(100, () => faker.name.lastName()) });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Button onClick={this.refreshData}>Refresh Data</Button>
        <FilterList items={items} />
      </div>
    );
  }
}

export default DerivedState;
