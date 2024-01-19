export const MENU = [
  {
    label: 'menu_dashboard',
    key: '/',
    icon: 'HomeOutlined'
  },
  {
    label: 'menu_customers',
    key: '/customer',
    icon: 'UserOutlined'
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
        label: 'menu_cms_block',
        key: '/content/cms_block'
      },
      {
        label: 'menu_cms_page',
        key: '/content/cms_page',
      },
      {
        label: 'menu_notification_template',
        key: '/content/notification_template',
      },
    ]
  },
  {
    label: 'menu_staffs',
    key: '/staff',
    icon: 'TeamOutlined',
  },
  {
    label: 'menu_master_data',
    key: '/master_data',
    icon: 'HddOutlined',
    children: [
      {
        label: 'menu_master_data_relation',
        key: '/master_data/relation'
      }
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
        label: 'menu_settings_site',
        key: '/settings/site'
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