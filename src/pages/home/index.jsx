import React from 'react'
import styles from './home.less'

function Home(props) {
  console.log(props)
  return <h2 className={styles.homeContent}>模块内容</h2>
}

export default Home
