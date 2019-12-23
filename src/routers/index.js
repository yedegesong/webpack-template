import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import RoutersConfig from 'router-config'
import Layouts from 'layouts'

const App = (props) => {
  return (
    <Router>
      <Layouts {...props}>
        <Switch>
          {RoutersConfig.map((route, routerIndex) => {
            return (
              <Route
                key={routerIndex}
                path={route.path}
                exact
                render={(routerProps) => {
                  const Component = React.lazy(route.component)
                  return (
                    <Component {...route} {...routerProps} />
                  )
                }}
              />
            )
          })}
        </Switch>
      </Layouts>
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
