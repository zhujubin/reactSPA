import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import routes from './common/routers'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Login from './common/pages/login'
import { browserHistory } from 'react-router';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          { routes }
        </div>
      </div>
    );
  }
}

export default App;
