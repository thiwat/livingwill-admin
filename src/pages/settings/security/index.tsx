import _get from 'lodash/get'
import SettingForm from "@/components/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"

const SettingSecurityPage = () => {
  return (
    <SettingForm
      name={'security'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'setting_security_recaptcha',
    fields: [
      {
        name: ['recaptcha', 'enabled'],
        label: 'setting_security_recaptcha_enable',
        type: DetailItemType.boolean,
        required: true
      },
      {
        type: DetailItemType.space
      },
      {
        name: ['recaptcha', 'site_key'],
        label: 'setting_security_recaptcha_site_key',
        type: DetailItemType.string,
        dependenciesFields: ['recaptcha.enabled'],
        required: ({ values }) => _get(values, 'recaptcha.enabled')
      },
      {
        name: ['recaptcha', 'secret_key'],
        label: 'setting_security_recaptcha_secret_key',
        type: DetailItemType.password,
        dependenciesFields: ['recaptcha.enabled'],
        required: ({ values }) => _get(values, 'recaptcha.enabled')
      }
    ]
  }
]

export default SettingSecurityPage