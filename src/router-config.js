
import { loader } from 'sdk'

const routersConfig = [
  {
    name: '首页',
    path: '/',
    component: loader('home'),
    childs: [
      {
        name: '子项目',
        path: '/home',
        component: loader('home'),
      },
    ],
  },
]

export default routersConfig
