import _get from 'lodash/get'
import SettingForm from "@/components/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"

const SettingSitePage = () => {
  return (
    <SettingForm
      name={'site'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'setting_admin_site',
    fields: [
      {
        name: ['admin', 'primary_color'],
        label: 'setting_site_admin_primary_color',
        type: DetailItemType.color_picker,
      },
    ]
  }
]

export default SettingSitePage