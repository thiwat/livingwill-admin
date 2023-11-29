import { Menu as AntMenu } from 'antd'
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons'
import useMenu from '../../../../hooks/useMenu'

const Menu = () => {

  const { defaultSelectedKeys, onClick } = useMenu()

  const menu = [
    {
      label: 'Dashboard',
      key: '/',
      icon: <HomeOutlined />
    },
    {
      label: 'Users',
      key: '/users',
      icon: <UserOutlined />
    },
    {
      label: 'Settings',
      key: '/settings',
      icon: <SettingOutlined />
    }
  ]

  return (
    <AntMenu
      defaultSelectedKeys={defaultSelectedKeys}
      items={menu}
      onClick={onClick}
    />
  )
}

export default Menu