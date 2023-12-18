let TRANSLATES: object = {
  login_title: 'Login',
  login_username: 'Username',
  login_password: 'Password',
  login_button_submit: 'Submit',
  menu_dashboard: 'Dashboard',
  menu_users: 'Users',
  menu_audience: 'Audiences',
  menu_lawyers: 'Lawyers',
  menu_customers: 'Customers',
  menu_web_masters: 'Web Masters',
  menu_services: 'Services',
  menu_testament: 'Testaments',
  menu_package: 'Packages',
  menu_contents: 'Contents',
  menu_blog: 'Blogs',
  menu_cms_page: 'CMS Pages',
  menu_cms_block: 'CMS Blocks',
  menu_notification_template: 'Notification Templates',
  menu_settings: 'Settings',
  menu_settings_application: 'Applications',
  menu_settings_authen: 'Authentication',
  menu_settings_security: 'Security',
  menu_settings_footer: 'Footer',
  menu_settings_gateways: 'Gateways',
  menu_settings_translates: 'Translates',
  user_state: 'State',
  user_state_active: 'Active',
  user_user_id: 'User ID',
  user_username: 'Username',
  user_email: 'Email',
  user_full_name: 'Full name',
  user_last_logged_in_date: 'Last logged in',
  common_table_create_button: 'Create',
  common_save_button: 'Save',
  setting_security_recaptcha: 'Recaptcha',
  setting_security_recaptcha_enable: 'Enable recaptcha',
  setting_security_recaptcha_site_key: 'Site key',
  setting_security_recaptcha_secret_key: 'Secret key'
}

export const t = (key: string, data?: unknown): string => {
  return TRANSLATES[key] || key
}

export const setTranslate = (translate: object) => {
  TRANSLATES = translate
}