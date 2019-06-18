import React, { Component } from 'react'
import { Button } from 'antd'
import './main.css'

const Content = React.lazy(() => import(/* webpackChunkName: "content" */ './content'))

export default class Home extends Component {
  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <div>
          <Button type="primary">Button</Button>
          <Content />
        </div>
      </React.Suspense>
    )
  }
}
