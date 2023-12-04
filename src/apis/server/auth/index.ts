import { request } from "../request";
import { AuthInput } from "./types";

export const requestAuthLogin = async (data: AuthInput): Promise<unknown> => {
  data['app_key'] = process.env.APP_KEY
  data['secret_key'] = process.env.SECRET_KEY
  return request('v1/auth/access_token', 'POST', data)
}

export const requestMyProfile = async (headers?: object): Promise<unknown> => {
  return request('v1/user/me', 'GET', undefined, headers)
}