import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import CasewarePage from './components/CasewarePage';
import './App.css';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Layout style={{minHeight:"100vh"}}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <NavMenu/>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background">
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                }}
              >
              
                <Route path="/SimrandeepBajwaPortfolio" exact/>
                <Route path="/SimrandeepBajwaPortfolio/Caseware" component={CasewarePage}/>
              </Content>
            </Layout>
          </Layout>
          </div>
        </Router>
    );
  }
}

export default App;
