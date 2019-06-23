import React from 'react'


export const About = React.lazy(() => import(/* webpackChunkName: "about" */ './about'))
export const User = React.lazy(() => import(/* webpackChunkName: "user" */ './user'))
export { default as Home } from './home'
export { default as Login } from './login'
