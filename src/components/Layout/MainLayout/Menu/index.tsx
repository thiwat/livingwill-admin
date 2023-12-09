import { Menu as AntMenu } from 'antd'
import * as Icon from '@ant-design/icons'
import useMenu from '../../../../hooks/useMenu'
import { useMemo } from 'react'
import { t } from '@/utils/translate'

const Menu = () => {

  const { items, defaultSelectedKeys, defaultOpenKeys, onClick } = useMenu()

  const menu = useMemo(() => {
    return items.map(i => {
      const MenuIcon = Icon[i.icon]
      return {
        label: i.label,
        key: i.key,
        children: i.children,
        icon: <MenuIcon />
      }
    })
  }, [])

  return (
    <AntMenu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      items={menu}
      mode={'inline'}
      onClick={onClick}
    />
  )
}

export default Menu