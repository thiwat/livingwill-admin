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
      },
      {
        label: 'menu_web_masters',
        key: '/audience/web_master',
      }
    ]
  },
  {
    label: 'menu_services',
    key: '/service',
    icon: 'ScheduleOutlined',
    children: [
      {
        label: 'menu_testament',
        key: '/service/testament',
      },
      {
        label: 'menu_package',
        key: '/service/package',
      }
    ]
  },
  {
    label: 'menu_contents',
    key: '/content',
    icon: 'GroupOutlined',
    children: [
      {
        label: 'menu_blog',
        key: '/content/blog',
      },
      {
        label: 'menu_cms_page',
        key: '/content/cms_page',
      },
      {
        label: 'menu_cms_block',
        key: '/content/cms_block'
      },
      {
        label: 'menu_notification_template',
        key: '/content/notification_template',
      },
    ]
  },
  {
    label: 'menu_settings',
    key: '/settings',
    icon: 'SettingOutlined',
    children: [
      {
        label: 'menu_settings_application',
        key: '/settings/application'
      },
      {
        label: 'menu_settings_attachment',
        key: '/settings/attachment'
      },
      {
        label: 'menu_settings_authentication',
        key: '/settings/authen'
      },
      {
        label: 'menu_settings_security',
        key: '/settings/security'
      },
      {
        label: 'menu_settings_footer',
        key: '/settings/footer'
      },
      {
        label: 'menu_settings_gateway',
        key: '/settings/gateway'
      },
      {
        label: 'menu_settings_translates',
        key: '/settings/translates'
      }
    ]
  }
]