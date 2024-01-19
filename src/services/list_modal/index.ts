import { requestCreate, requestDelete, requestList, requestUpdate } from "@/apis/client/entity";
import { ActionMode } from "@/enums/detail";
import { prepareListColumns } from "@/utils/list";
import { t } from "@/utils/translate";
import { useRequest } from "ahooks";
import { message } from "antd";
import { useMemo, useRef, useState } from "react";
import { ListModalServiceProps } from "./types";

const useListModal = ({ entity, columns, defaultData }: ListModalServiceProps) => {

  const [data, setData] = useState<any[]>([])
  const idRef = useRef<number>(-1)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const pageInfo = useRef<any>({ page: 1, page_size: 10 })

  const _getRequestParams = () => {
    return {
      entity,
      page: pageInfo.current.page,
      page_size: pageInfo.current.page_info,
    }
  }

  const { loading, run, refresh } = useRequest(requestList, {
    defaultParams: [_getRequestParams()],
    onSuccess: (r) => setData(r?.['rows'] || [])
  })

  const updateRequest = useRequest(requestUpdate, {
    manual: true,
    onSuccess: (r) => {
      message.success(t('common_update_success'))
      refresh()
    },
    onError: (e) => {
      message.error(e.message)
    }
  })

  const createRequset = useRequest(requestCreate, {
    manual: true,
    onSuccess: (r) => {
      message.success(t('common_create_success'))
      refresh()
    },
    onError: (e) => {
      message.error(e.message)
    }
  })

  const deleteRequest = useRequest(requestDelete, {
    manual: true,
    onSuccess: (r) => {
      message.success(t('common_delete_success'))
      refresh()
    },
    onError: (e) => {
      message.error(e.message)
    }
  })

  const onRefresh = () => {
    refresh()
  }

  const onCreate = () => {
    idRef.current = -1
    onToggleModal()
  }

  const onEdit = (index: number) => {
    idRef.current = index
    onToggleModal()
  }

  const onDelete = () => {
    onToggleModal()
    const id = data[idRef.current]?.value
    deleteRequest.run({
      entity,
      id
    })
  }

  const onToggleModal = () => setOpenModal(prev => !prev)

  const onSubmit = (values: any) => {
    const newValues = { ...defaultData, ...values }
    idRef.current >= 0
      ? updateRequest.run({ entity, id: values['value'], data: newValues })
      : createRequset.run({ entity, data: newValues })
  }

  const processedColumns = useMemo(() => prepareListColumns(columns, 'value', false, onEdit), [])


  return {
    item: idRef.current >= 0
      ? data[idRef.current]
      : {},
    data,
    loading,
    mode: idRef.current >= 0 ? ActionMode.update : ActionMode.create,
    columns: processedColumns,
    isModalOpen: openModal,
    onToggleModal,
    onRefresh,
    onSubmit,
    onCreate,
    onDelete
  }
}

export default useListModal