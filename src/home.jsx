import React,{Component} from 'react';
import { Button } from 'antd'
import $ from 'jquery'
import './main.css'
// const Content = React.lazy(() => import(/* webpackChunkName: "content" */ './content'));
const Content = React.lazy(() => import('./content'));
export default class Home extends Component {
  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
          <div>
            <Button type="primary">Button12</Button>
            <Content />
        </div> 
      </React.Suspense>
    )
  }
}
