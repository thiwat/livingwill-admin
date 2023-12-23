import PageHeader from "@/components/PageHeader"
import SettingTranslate from "@/components/Setting/TranslateSetting"
import { t } from "@/utils/translate"

const SettingTranslatePage = () => {
  return (
    <>
      <PageHeader
        title={t('menu_settings_translates')}
      />
      <SettingTranslate />
    </>
  )
}

export default SettingTranslatePage