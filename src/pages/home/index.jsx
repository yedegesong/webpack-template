import React from 'react'
import { Table } from 'antd'

import './home.less'

function Home() {
  const dataListNum = 20
  const dataSource = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dataListNum; i++) {
    dataSource.push(
      {
        key: i,
        name: `胡彦斌${i}`,
        age: 32,
        address: `西湖区湖底公园1号${i}`,
      },
    )
  }

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  return <Table dataSource={dataSource} columns={columns} />
}

export default Home
