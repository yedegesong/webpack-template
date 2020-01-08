import React, { Component } from 'react'
import { Layout, Icon, Spin } from 'antd'
import { withRouter } from 'react-router-dom'
import { transformData } from 'sdk'
import LayoutMenu from './menu'
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

  onMenuItemClick = (item) => {
    const { path } = item
    // this.props.history.push(path)
  }

  render() {
    console.log(this.props)
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
            <LayoutMenu {...this.props} onMenuItemClick={this.onMenuItemClick} />
          </Sider>
          <Content className={styles.layoutMain}>
            <React.Suspense fallback={<div><Spin size="large" /></div>}>
              {children}
            </React.Suspense>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

// export default withRouter(BaseLayout)
