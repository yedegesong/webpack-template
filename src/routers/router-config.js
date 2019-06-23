import { Home, About, User, Login } from '../pages'

const routersConfig = [
  {
    name: '首页',
    path: '/home',
    component: Home,
  },
  {
    name: '关于',
    path: '/about',
    component: About,
  },
  {
    name: '用户中心',
    path: '/user',
    auth: true,
    component: User,
  },
  {
    name: '用户登录',
    path: '/login',
    component: Login,
  },
]

export default routersConfig
