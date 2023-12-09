import { request } from "../request"
import { RequestListProps } from "./types"
import { buildQuery } from "@/utils/request"

export const requestList = ({ entity, ...other }: RequestListProps): Promise<unknown> => {
  return request(`/entity/${entity}?${buildQuery(other)}`, 'GET')
}