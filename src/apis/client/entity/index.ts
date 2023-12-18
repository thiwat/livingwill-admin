import { request } from "../request"
import { RequestDetailProps, RequestListProps } from "./types"
import { buildQuery } from "@/utils/request"

export const requestList = ({ entity, ...other }: RequestListProps): Promise<unknown> => {
  return request(`/entity/${entity}?${buildQuery(other)}`, 'GET')
}

export const requestDetail = ({ entity, id }: RequestDetailProps): Promise<object> => {
  return request(`/entity/${entity}/${id}`, 'GET')
}