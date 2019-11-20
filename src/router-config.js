import React from 'react'

const routersConfig = [
  {
    name: '首页',
    path: '/home',
    component: React.lazy(() => import(/* webpackChunkName: "home" */ 'pages/home')),
  },
]

export default routersConfig
