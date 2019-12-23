import React from 'react'

/**
 * 主体一次性容器
 */
export default (props) => {
  const { children } = props
  return (
    <div>
      <div>头部</div>
      {children}
    </div>
  )
}
