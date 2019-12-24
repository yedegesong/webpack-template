import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import styles from './layout.less'

const { Header, Sider, Content } = Layout
/**
 * 主体一次性容器
 */
export default class BaseLayout extends Component {
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
        <Header className={styles.layoutHeader}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles.layoutMain}>
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
