import _cloneDeep from 'lodash/cloneDeep'
import _debounce from 'lodash/debounce'
import _isArray from 'lodash/isArray'
import { requestList } from "@/apis/client/entity"
import { useRequest } from "ahooks"
import { useMemo, useRef, useState } from "react"
import { ListServiceProps } from "./types"
import { prepareListColumns } from '@/utils/list'
import { getFromStorage, setToStorage } from '@/utils/storage'
import { useRouter } from 'next/router'

const useList = ({ entity, baseFilters, columns, rowKey }: ListServiceProps) => {

  const [data, setData] = useState<any[]>([])
  const pageInfo = useRef<any>({ page: 1, page_size: 10 })
  const keyword = useRef<string>(getFromStorage(entity, 'keyword'))
  const filters = useRef<any>(getFromStorage(entity, 'filters', {}))
  const router = useRouter()

  const delaySearch = useRef(_debounce((value) => {
    keyword.current = value
    setToStorage(entity, 'keyword', value)
    _fetchData()
  }, 500))


  const _convertFilter = (filter: any): any => {
    const formatFilter = {}
    for (const field in (filter || {})) {
      if (_isArray(filter[field])) {
        formatFilter[field] = { $in: filter[field] }
        continue
      }
      formatFilter[field] = filter[field]
    }
    return formatFilter
  }


  const _getRequestParams = () => {
    return {
      entity,
      page: pageInfo.current.page,
      page_size: pageInfo.current.page_info,
      filter: { ..._convertFilter(filters.current), ...baseFilters },
      keywords: keyword.current
    }
  }

  const { loading, run, refresh } = useRequest(requestList, {
    defaultParams: [_getRequestParams()],
    onSuccess: (r) => {
      setData(r['rows'])
    }
  })

  const processedColumns = useMemo(() => prepareListColumns(columns, rowKey), [])

  const _fetchData = () => {
    run(_getRequestParams())
  }

  const onSearch = ({ target: { value } }) => {
    delaySearch.current(value)
  }

  const onRefresh = () => {
    refresh()
  }

  const onCreate = () => {
    router.push(`${router.pathname}/[key]`, `${router.pathname}/create`)
  }

  const onFilter = (filter: any): void => {
    filters.current = filter
    setToStorage(entity, 'filters', filter)
    _fetchData()
  }

  return {
    data,
    loading,
    filters: filters.current,
    keyword: keyword.current,
    columns: processedColumns,
    onRefresh,
    onFilter,
    onCreate,
    onSearch
  }
}

export default useList