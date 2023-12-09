export const MENU = [
  {
    label: 'menu_dashboard',
    key: '/',
    icon: 'HomeOutlined'
  },
  {
    label: 'menu_audience',
    key: '/audience',
    icon: 'UserOutlined',
    children: [
      {
        label: 'menu_users',
        key: '/audience/user',
      },
      {
        label: 'menu_customers',
        key: '/audience/customer',
      },
      {
        label: 'menu_lawyers',
        key: '/audience/lawyer'
      }
    ]
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