import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

const { Header, Sider, Content } = Layout
/**
 * 主体一次性容器
 */
export default class SiderDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    })
  };

  render() {
    const { children } = this.props
    const { collapsed } = this.state
    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
