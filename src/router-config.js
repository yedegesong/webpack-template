
const loader = path => () => import(/* webpackChunkName: `[request]` */`pages/${path}`)

const routersConfig = [
  {
    name: '首页',
    path: '/home',
    component: loader('home'),
  },
]

export default routersConfig
