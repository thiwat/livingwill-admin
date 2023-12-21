import _cloneDeep from 'lodash/cloneDeep'
import _debounce from 'lodash/debounce'
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
  const router = useRouter()

  const delaySearch = useRef(_debounce((value) => {
    keyword.current = value
    setToStorage(entity, 'keyword', value)
    _fetchData()
  }, 500))

  const _getRequestParams = () => {
    return {
      entity,
      page: pageInfo.current.page,
      page_size: pageInfo.current.page_info,
      filter: baseFilters,
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

  return {
    data,
    loading,
    keyword: keyword.current,
    columns: processedColumns,
    onRefresh,
    onCreate,
    onSearch
  }
}

export default useList