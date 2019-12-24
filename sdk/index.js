// 预加载更改webpack名
export const loader = path => () => import(/* webpackChunkName: `[request]` */`pages/${path}`)
