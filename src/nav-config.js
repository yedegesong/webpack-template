const sidebarNav = [
  {
    name: 'Dashboard',
    icon: 'user',
    pageKey: 'dashboard',
    childs: [
      {
        path: '/home',
        pageKey: 'home',
        name: '首页',
      },
      {
        path: '/user',
        pageKey: 'user',
        name: '分析页',
      },
    ],
  },
]

export default sidebarNav
