import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'
import RoutersConfig from 'router-config'

const App = () => {
  return (
    <Router>
      <Switch>
        {RoutersConfig.map((route, routerIndex) => {
          return (
            <Route
              key={routerIndex}
              path={route.path}
              exact={route.exact}
              render={(routerProps) => {
                const Component = React.lazy(route.component)
                return <Component {...routerProps} />
              }}
            />
          )
        })}
        <Redirect to={{ pathname: '/home' }} />
      </Switch>
    </Router>
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
