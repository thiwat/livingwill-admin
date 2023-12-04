let TRANSLATES: object = {
  login_title: 'Login',
  login_username: 'Username',
  login_password: 'Password',
  login_button_submit: 'Submit',
  menu_dashboard: 'Dashboard',
  menu_users: 'Users',
  menu_settings: 'Settings',
  menu_settings_authen: 'Authentication',
  menu_settings_gateways: 'Gateways',
  menu_settings_translates: 'Translates'
}

export const t = (key: string, data?: unknown): string => {
  return TRANSLATES[key] || key
}

export const setTranslate = (translate: object) => {
  TRANSLATES = translate
}