import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
} from 'react-router-dom'
import RoutersConfig from './router-config'

const Auth = false
const App = (props) => {
  return (
    <div>
      <ul className="slide">
        <li>
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <Link to="/user">用户中心</Link>
        </li>
      </ul>
      <div className="content">
        <div>
          <Switch>
            {RoutersConfig.map((route, routerIndex) => {
              return (
                <Route
                  key={routerIndex}
                  path={route.path}
                  render={(props) => {
                    // 路由存在权限校验并且 Auth保持非登录状态
                    return route.auth && !Auth ? (
                      <Redirect
                        to={{
                          pathname: '/login',
                        }}
                      />
                    ) : (
                      <route.component {...props} />
                    )
                  }}
                />
              )
            })}
            <Redirect to={{ pathname: '/home' }} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

function Root() {
  return (
    <Router>
      <Route path="/" render={props => <App {...props} />} />
    </Router>
  )
}
export default Root
