let TRANSLATES: object = {
  login_username: 'Username',
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