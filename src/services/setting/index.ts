import { requestGetSetting, requestSetSetting } from "@/apis/client/setting"
import { t } from "@/utils/translate"
import { useRequest } from "ahooks"
import { message } from 'antd'
import { SettingServiceProps } from "./types"

const useSetting = ({ name }: SettingServiceProps) => {

  const getSettingRequest = useRequest(requestGetSetting, {
    defaultParams: [{ name }]
  })

  const setSettingRequest = useRequest(requestSetSetting, {
    manual: true,
    loadingDelay: 500,
    onSuccess: (r) => {
      message.success({ content: t('common_save_setting_success') })
    }
  })

  const onSave = (data) => {
    setSettingRequest.run({ name, data })
  }

  return {
    data: getSettingRequest.data,
    loading: getSettingRequest.loading,
    isSaving: setSettingRequest.loading,
    onSave
  }
}

export default useSetting