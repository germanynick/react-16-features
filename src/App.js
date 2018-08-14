import React from "react";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";

import ErrorBoudary from "./ErrorBoundary";
import Fragment from "./Fragment";
import Portal from "./Portal";
import CustomAttr from "./CustomAttr";
import NullState from "./NullState";
import Context from "./Context";
import Ref from "./Ref";
import Lifecycle from "./Lifecycle";
import Pointer from "./Pointer";

const { Header, Content, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                <Link to="/errors">
                  <Icon type="user" />
                  <span className="nav-text">Error Boundary</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/fragment">
                  <Icon type="video-camera" />
                  <span className="nav-text">Fragment</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/portal">
                  <Icon type="upload" />
                  <span className="nav-text">Portal</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/custom-attr">
                  <Icon type="bar-chart" />
                  <span className="nav-text">Custom Attribute</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/null-state">
                  <Icon type="cloud-o" />
                  <span className="nav-text">Null State</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/context">
                  <Icon type="appstore-o" />
                  <span className="nav-text">Context</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/ref">
                  <Icon type="team" />
                  <span className="nav-text">Ref</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/lifecycle">
                  <Icon type="shop" />
                  <span className="nav-text">Lifecycle</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/pointer">
                  <Icon type="shop" />
                  <span className="nav-text">Pointer</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <Switch>
                <Route path="/errors" component={ErrorBoudary} />
                <Route path="/fragment" component={Fragment} />
                <Route path="/portal" component={Portal} />
                <Route path="/custom-attr" component={CustomAttr} />
                <Route path="/null-state" component={NullState} />
                <Route path="/context" component={Context} />
                <Route path="/ref" component={Ref} />
                <Route path="/lifecycle" component={Lifecycle} />
                <Route path="/pointer" component={Pointer} />
                <Redirect to="/errors" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
