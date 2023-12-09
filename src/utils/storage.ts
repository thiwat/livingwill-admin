export const setToStorage = (entity: string, key: string, value: string) => {
  localStorage.setItem(`${entity}_${key}`, value)
}

export const getFromStorage = (entity: string, key: string, defaultValue?: string): string => {
  return localStorage.getItem(`${entity}_${key}`) || defaultValue || ''
}
