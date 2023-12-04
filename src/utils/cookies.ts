import _cloneDeep from 'lodash/cloneDeep'
import Cookies, { CookieSetOptions, CookieGetOptions } from 'universal-cookie'

const newCookies = new Cookies()

type SameSite = boolean | 'strict' | 'lax' | 'none'

const options: CookieSetOptions = {
  path: '/',
  httpOnly: process.env.COOKIE_HTTP_ONLY === 'true',
  secure: process.env.COOKIE_SECURE === 'true',
  sameSite: process.env.COOKIE_SAME_SITE as SameSite
}

const set = (key: string, value: any, ttl?: number) => {
  const setOptions: CookieSetOptions = _cloneDeep(options)
  if (ttl > 0) {
    setOptions['maxAge'] = ttl
  }
  return newCookies.set(key, value, setOptions as CookieSetOptions)
}

const get = (key: string) => {
  return newCookies.get(key, options as CookieGetOptions)
}

const remove = (key: string) => {
  return newCookies.remove(key, options as CookieSetOptions)
}

export const cookies = {
  set,
  get,
  remove
}

