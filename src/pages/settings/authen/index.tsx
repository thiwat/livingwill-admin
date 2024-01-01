import SettingForm from "@/components/Setting"
import { PASSWORD_CASE } from "@/constants/authentication"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"
import { t } from "@/utils/translate"

const SettingsAuthenPage = () => {
  return (
    <SettingForm
      name={'authentication'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'setting_authentication_password_policy',
    fields: [
      {
        name: ['password_policy', 'password_case'],
        label: 'setting_authentication_password_match_case',
        type: DetailItemType.checkbox,
        required: true,
        options: {
          options: PASSWORD_CASE.map(i => ({
            label: t(`setting_authentication_password_${i}`),
            value: i
          })),
          mode: 'multiple'
        }
      },
      {
        name: ['password_policy', 'minimum_length'],
        label: 'setting_authentication_password_minimum_length',
        type: DetailItemType.number,
        required: true
      },
    ]
  },
  {
    title: 'setting_authentication_account_policy',
    fields: [
      {
        name: ['password_policy', 'minimum_password_age'],
        label: 'setting_authentication_password_minimum_password_age',
        type: DetailItemType.number,
        required: true,
        options: {
          suffix: t('common_unit_day')
        }
      },
      {
        name: ['password_policy', 'maximum_password_age'],
        label: 'setting_authentication_password_maximum_password_age',
        type: DetailItemType.number,
        required: true,
        options: {
          suffix: t('common_unit_day')
        }
      },
      {
        name: ['password_policy', 'enforce_password_history'],
        label: 'setting_authentication_password_enforce_password_history',
        type: DetailItemType.number,
        required: true,
      },
      {
        name: ['password_policy', 'prompt_user_before_password_expires'],
        label: 'setting_authentication_password_prompt_user_before_password_expires',
        type: DetailItemType.number,
        required: true,
        options: {
          suffix: t('common_unit_day')
        }
      },
      {
        name: ['password_policy', 'wrong_password_attempt'],
        label: 'setting_authentication_password_wrong_password_attempt',
        type: DetailItemType.number,
        required: true,
      },
      {
        name: ['password_policy', 'wrong_password_attempt_duration'],
        label: 'setting_authentication_password_wrong_password_attempt_duration',
        type: DetailItemType.number,
        required: true,
        options: {
          suffix: t('common_unit_minute')
        }
      },
      {
        name: ['password_policy', 'unlock_user_after_x_minutes'],
        label: 'setting_authentication_password_unlock_user_after_x_minutes',
        type: DetailItemType.select,
        required: true,
        options: {
          mode: 'tags'
        }
      },
    ]
  }
]

export default SettingsAuthenPage