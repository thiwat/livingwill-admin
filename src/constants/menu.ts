export const MENU = [
  {
    label: 'menu_dashboard',
    key: '/',
    icon: 'HomeOutlined'
  },
  {
    label: 'menu_users',
    key: '/users',
    icon: 'UserOutlined'
  },
  {
    label: 'menu_settings',
    key: '/settings',
    icon: 'SettingOutlined',
    children: [
      {
        label: 'menu_settings_authen',
        key: '/settings/authen'
      },
      {
        label: 'menu_settings_gateways',
        key: '/settings/gateways'
      },
      {
        label: 'menu_settings_translates',
        key: '/settings/translates'
      }
    ]
  }
]