import _get from 'lodash/get'
import { requestDetail, requestUpdate } from "@/apis/client/entity"
import { useBreadcrumbState } from "@/atoms/breadcrumb"
import { ActionMode } from "@/enums/detail"
import { compileTemplate } from "@/utils/template"
import { t } from "@/utils/translate"
import { useRequest } from "ahooks"
import { useEffect, useMemo } from "react"
import { DetailServiceProps } from "./types"
import { message } from 'antd'

const useDetail = ({
  badge,
  title,
  entity,
  keyData
}: DetailServiceProps) => {

  const [breadcrumb, setBreadcrumb] = useBreadcrumbState()

  const getRequest = useRequest(requestDetail, {
    manual: true,
    onSuccess: (r) => {
      if (title) {
        const compiledTitle = compileTemplate(title, r)
        setBreadcrumb(compiledTitle)
      }
    }
  })

  const updateRequest = useRequest(requestUpdate, {
    manual: true,
    onSuccess: (r) => {
      message.success(t('common_update_success'))
    }
  })

  const onSubmit = (values) => {
    updateRequest.run({
      entity,
      id: keyData,
      data: values
    })
  }

  const badgeData = useMemo(() => {
    if (!badge) return {}
    return {
      label: t(`${badge.prefixTranslate}${_get(getRequest.data, badge.fieldName)}`),
      color: _get(badge.mapColors, _get(getRequest.data, badge.fieldName))
    }
  }, [getRequest.data])

  useEffect(() => {
    if (keyData) {
      getRequest.run({
        entity,
        id: keyData
      })
    }
  }, [])

  return {
    mode: keyData ? ActionMode.update : ActionMode.create,
    badgeData,
    loading: getRequest.loading,
    data: getRequest.data,
    displayTitle: breadcrumb,
    onSubmit
  }
}

export default useDetail