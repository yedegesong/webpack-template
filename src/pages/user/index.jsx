import React from 'react'

function User(props) {
  function HandlePush() {
    const { history } = props
    history.push('/home')
  }
  return (
    <div>
      <h2>
        我是用户模块
        <button onClick={HandlePush}>点击跳转</button>
      </h2>
    </div>
  )
}

export default User
