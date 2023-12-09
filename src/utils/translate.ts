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
  menu_settings: 'Settings',
  menu_settings_authen: 'Authentication',
  menu_settings_gateways: 'Gateways',
  menu_settings_translates: 'Translates',
  user_user_id: 'User ID',
  user_username: 'Username',
  user_email: 'Email',
  user_full_name: 'Full name',
  user_last_logged_in_date: 'Last logged in',
  common_table_create_button: 'Create'
}

export const t = (key: string, data?: unknown): string => {
  return TRANSLATES[key] || key
}

export const setTranslate = (translate: object) => {
  TRANSLATES = translate
}