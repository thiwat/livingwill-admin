import _get from 'lodash/get'
import { requestDetail, requestUpdate } from "@/apis/client/entity"
import { useBreadcrumbState } from "@/atoms/breadcrumb"
import { ActionMode } from "@/enums/detail"
import { compileTemplate } from "@/utils/template"
import { t } from "@/utils/translate"
import { useRequest } from "ahooks"
import { useEffect, useMemo } from "react"
import { DetailServiceProps } from "./types"
import { message, Form as AntForm } from 'antd'

const useDetail = ({
  badge,
  title,
  entity,
  actions,
  keyData
}: DetailServiceProps) => {

  const [form] = AntForm.useForm()
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

  const onClickCustomAction = async (key) => {
    try {
      const action = actions.find(i => i.key === key)
      if (!action) return

      const params = action.params({ values: getRequest.data })
      const res = await action.action(params)
      form.setFieldsValue(res)
      message.success(t('common_execute_action_success'))
    } catch (e) {
      message.error(e.message)
    }
  }

  const filteredActions = useMemo(() => {
    if (!getRequest.data) return []

    return actions
      .filter(i => i.conditions({ values: getRequest.data }))

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
    form,
    mode: keyData ? ActionMode.update : ActionMode.create,
    badgeData,
    actions: filteredActions,
    loading: getRequest.loading,
    data: getRequest.data,
    displayTitle: breadcrumb,
    onSubmit,
    onClickCustomAction
  }
}

export default useDetail