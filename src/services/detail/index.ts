import _get from 'lodash/get'
import { requestCreate, requestDelete, requestDetail, requestUpdate } from "@/apis/client/entity"
import { useBreadcrumbState } from "@/atoms/breadcrumb"
import { ActionMode } from "@/enums/detail"
import { compileTemplate } from "@/utils/template"
import { t } from "@/utils/translate"
import { useRequest } from "ahooks"
import { useEffect, useMemo } from "react"
import { DetailServiceProps } from "./types"
import { message, Form as AntForm } from 'antd'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { Entity } from '@/enums/entity'
import { executeBooleanValue } from '@/utils/form'

const useDetail = ({
  badge,
  title,
  entity,
  actions,
  customActions,
  keyData
}: DetailServiceProps) => {

  const router = useRouter()
  const pathname = usePathname()
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

  const createRequset = useRequest(requestCreate, {
    manual: true,
    onSuccess: (r) => {
      const path = pathname.replace('/create', '')
      const key = entity === Entity.user
        ? 'user_id'
        : 'code'
      message.success('common_create_success')
      router.replace(`${path}/[key]`, `${path}/${_get(r, key)}`)
    }
  })

  const deleteRequest = useRequest(requestDelete, {
    manual: true,
    onSuccess: (r) => {
      message.success('common_delete_success')
      router.back()
    }
  })

  const onSubmit = (values) => {
    keyData && keyData !== 'create'
      ? updateRequest.run({
        entity,
        id: keyData,
        data: values
      })
      : createRequset.run({
        entity,
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
      const action = customActions.find(i => i.key === key)
      if (!action) return

      const params = action.params({ values: getRequest.data })
      const res = await action.action(params)
      form.setFieldsValue(res)
      message.success(t('common_execute_action_success'))
    } catch (e) {
      message.error(e.message)
    }
  }

  const onDelete = () => {
    deleteRequest.run({
      entity,
      id: keyData
    })
  }

  const filteredCustomActions = useMemo(() => {
    if (!getRequest.data) return []

    if (!customActions) return []

    return customActions
      .filter(i => i.conditions({ values: getRequest.data }))

  }, [getRequest.data])

  const compiledActions = useMemo(() => {
    if (!getRequest.data) return {}

    if (!actions) return {}

    return {
      delete: executeBooleanValue(actions.delete, { values: getRequest.data })
    }
  }, [getRequest.data])

  useEffect(() => {
    if (keyData && keyData !== 'create') {
      getRequest.run({
        entity,
        id: keyData
      })
    }
  }, [])

  return {
    form,
    mode: keyData && keyData !== 'create' ? ActionMode.update : ActionMode.create,
    badgeData,
    actions: compiledActions,
    customActions: filteredCustomActions,
    loading: getRequest.loading,
    data: getRequest.data,
    displayTitle: breadcrumb,
    onDelete,
    onSubmit,
    onClickCustomAction
  }
}

export default useDetail