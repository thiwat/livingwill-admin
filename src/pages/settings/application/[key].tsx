import Detail from "@/components/Detail"
import { ActionMode, DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { useParams } from "next/navigation"

const ApplicationDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.application}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'application_general_information',
    fields: [
      {
        label: 'application_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'application_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'application_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'application_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      },
    ]
  },
  {
    title: 'application_key_information',
    fields: [
      {
        label: 'application_app_key',
        name: 'app_key',
        type: DetailItemType.string,
        disabled: true,
      },
      {
        label: 'application_secret_key',
        name: 'secret_key',
        type: DetailItemType.string,
        disabled: true,
      },
      {
        label: 'application_roles',
        name: 'roles',
        type: DetailItemType.select,
        options: {
          multiple: true,
          options: [
            { label: 'user_role_admin', value: 'admin' },
            { label: 'user_role_customer', value: 'customer' },
            { label: 'user_role_lawyer', value: 'lawyer' },
            { label: 'user_role_web_master', value: 'web_master' },
          ]
        }
      }
    ]
  }
]

export default ApplicationDetail