import { request } from "../request";

export const requestSiteSetting = async (): Promise<any> => {
  return request(`v1/setting/site/admin`, 'GET', undefined)
}