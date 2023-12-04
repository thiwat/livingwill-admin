import { request } from "../request";
import { AuthInput } from "./types";

export const requestAuthLogin = async (data: AuthInput): Promise<any> => {
  return request('/auth/login', 'POST', data)
}

export const requestMyProfile = async (): Promise<any> => {
  return request('/auth/me', 'GET')
}