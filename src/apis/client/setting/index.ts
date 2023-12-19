import { request } from "../request"
import { RequestGetSettingProps, RequestSetSettingProps } from "./types"

export const requestGetSetting = async ({ name }: RequestGetSettingProps) => {
  return request(`/setting/${name}`, 'get')
}

export const requestSetSetting = async ({ name, data }: RequestSetSettingProps) => {
  return request(`/setting/${name}`, 'put', data)
}