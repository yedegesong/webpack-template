// 预加载更改webpack名
export const loader = path => () => import(/* webpackChunkName: `[request]` */`pages/${path}`)

// 数组树结构解析平级
export function transformData(data, prevData = []) {
  const childrenList = []
  data.forEach((item) => {
    if ((item.childs || []).length) {
      childrenList.push(...item.childs.map(v => ({ ...v, parent: item.name })))
    }
    prevData.push(item)
  })
  if (!childrenList.length) {
    return [...prevData]
  }
  return transformData(childrenList, prevData)
}
