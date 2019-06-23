import React from 'react'
import ReactDOM from 'react-dom'
import Root from './routers'

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Root />
    </React.Suspense>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
