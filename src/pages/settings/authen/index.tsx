import _get from 'lodash/get'
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
        name: ['authen', 'password_policy', 'password_case'],
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
        name: ['authen', 'password_policy', 'minimum_length'],
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
        name: ['authen', 'password_policy', 'minimum_password_age'],
        label: 'setting_authentication_password_minimum_password_age',
        type: DetailItemType.number,
        required: true,
        options: {
          suffix: t('common_unit_day')
        }
      },
      {
        name: ['authen', 'password_policy', 'maximum_password_age'],
        label: 'setting_authentication_password_maximum_password_age',
        type: DetailItemType.number,
        required: true,
        options: {
          suffix: t('common_unit_day')
        }
      },
      {
        name: ['authen', 'password_policy', 'enforce_password_history'],
        label: 'setting_authentication_password_enforce_password_history',
        type: DetailItemType.number,
        required: true,
      },
      {
        name: ['authen', 'password_policy', 'prompt_user_before_password_expires'],
        label: 'setting_authentication_password_prompt_user_before_password_expires',
        type: DetailItemType.number,
        required: true,
        options: {
          suffix: t('common_unit_day')
        }
      },
      {
        name: ['authen', 'password_policy', 'wrong_password_attempt'],
        label: 'setting_authentication_password_wrong_password_attempt',
        type: DetailItemType.number,
        required: true,
      },
      {
        name: ['authen', 'password_policy', 'wrong_password_attempt_duration'],
        label: 'setting_authentication_password_wrong_password_attempt_duration',
        type: DetailItemType.number,
        required: true,
        options: {
          suffix: t('common_unit_minute')
        }
      },
      {
        name: ['authen', 'password_policy', 'unlock_user_after_x_minutes'],
        label: 'setting_authentication_password_unlock_user_after_x_minutes',
        type: DetailItemType.select,
        required: true,
        options: {
          mode: 'tags'
        }
      },
    ]
  },
  {
    title: 'setting_authentication_social_information',
    fields: [
      {
        name: ['social', 'facebook', 'enabled'],
        label: 'setting_authentication_facebook_enabled',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        type: DetailItemType.space
      },
      {
        name: ['social', 'facebook', 'client_id'],
        label: 'setting_authentication_facebook_client_id',
        dependenciesFields: ['social.facebook.enabled'],
        type: DetailItemType.string,
        required: ({ values }) => _get(values, 'social.facebook.enabled'),
      },
      {
        name: ['social', 'facebook', 'client_secret'],
        label: 'setting_authentication_facebook_client_secret',
        dependenciesFields: ['social.facebook.enabled'],
        type: DetailItemType.password,
        required: ({ values }) => _get(values, 'social.facebook.enabled'),
      },
      {
        name: ['social', 'google', 'enabled'],
        label: 'setting_authentication_google_enabled',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        type: DetailItemType.space
      },
      {
        name: ['social', 'google', 'client_id'],
        label: 'setting_authentication_google_client_id',
        dependenciesFields: ['social.google.enabled'],
        type: DetailItemType.string,
        required: ({ values }) => _get(values, 'social.google.enabled'),
      },
      {
        name: ['social', 'google', 'client_secret'],
        label: 'setting_authentication_google_client_secret',
        dependenciesFields: ['social.google.enabled'],
        type: DetailItemType.password,
        required: ({ values }) => _get(values, 'social.google.enabled'),
      },
    ]
  }
]

export default SettingsAuthenPage