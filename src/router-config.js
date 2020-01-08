
// import { loader } from 'sdk'

const routersConfig = [
  {
    path: '/home',
    // component: loader('home'),
    component: () => import('pages/home'),
  },
  {
    path: '/user',
    component: () => import('pages/user'),
  },
]

export default routersConfig
