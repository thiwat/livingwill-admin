import { request } from "../request"

export const requestGetSetting = async (name: string, headers: object) => {
  return request(`v1/setting/${name}`, 'get', undefined, headers)
}

export const requestSetSetting = async (name: string, data: any, headers: object) => {
  return request(`v1/setting/${name}`, 'put', data, headers)
}