import { request } from "../request";
import { ListQueryInput } from "./types";
import queryString from 'query-string'

export const requestList = async (
  entity: string,
  query: ListQueryInput,
  headers: object
): Promise<unknown> => {
  return request(`v1/${entity}?${queryString.stringify(query)}`, 'GET', undefined, headers)
}