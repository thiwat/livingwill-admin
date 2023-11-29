let TRANSLATES: object = {
  login_username: 'Username'
}

export const t = (key: string, data?: unknown): string => {
  return TRANSLATES[key] || key
}

export const setTranslate = (translate: object) => {
  TRANSLATES = translate
}