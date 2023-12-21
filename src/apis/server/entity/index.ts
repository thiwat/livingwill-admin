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

export const requestEntityRecord = async (
  entity: string,
  id: string,
  headers: object
): Promise<unknown> => {
  return request(`v1/${entity}/${id}`, 'GET', undefined, headers)
}

export const requestCreateRecord = async (
  entity: string,
  body: any,
  headers: object
): Promise<unknown> => {
  return request(`v1/${entity}`, 'POST', body, headers)
}

export const requestUpdateRecord = async (
  entity: string,
  id: string,
  body: any,
  headers: object
): Promise<unknown> => {
  return request(`v1/${entity}/${id}`, 'PUT', body, headers)
}

export const requestDeleteRecord = async (
  entity: string,
  id: string,
  headers: object
): Promise<unknown> => {
  return request(`v1/${entity}/${id}`, 'DELETE', {}, headers)
}