// 预加载更改webpack名
export const loader = path => () => import(/* webpackChunkName: `[request]` */`pages/${path}`)

// 黑名单需要登录
export const BlackList = ['user']
