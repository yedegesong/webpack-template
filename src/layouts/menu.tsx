import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

export default function LayoutMenu(props) {
  const { menuData, onMenuItemClick, selectedKeys, openKeys } = props

  const renderMenu = (params) => {
    const { path, name, icon, pageKey } = params
    return (
      <Menu.Item
        key={pageKey}
        onClick={() => {
          onMenuItemClick(params)
        }}
      >
        <Link to={path}>
          <Icon type={icon} />
          <span>{name}</span>
        </Link>
      </Menu.Item>
    )
  }

  const multipleMenu = (params) => {
    const { childs, name, icon, pageKey } = params
    return (
      <SubMenu
        key={pageKey}
        title={(
          <span>
            {icon ? <Icon type={icon} /> : null}
            <span>{name}</span>
          </span>
        )}
      >
        {
          childs.map((childItem) => {
            return renderMenu(childItem)
          })
        }
      </SubMenu>

    )
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={openKeys}
      defaultSelectedKeys={selectedKeys}
    >
      {
        menuData.map((item, idx) => {
          return item.childs && item.childs.length > 0 ? multipleMenu(item, idx) : renderMenu(item)
        })
      }

    </Menu>
  )
}
