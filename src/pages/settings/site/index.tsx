import _get from 'lodash/get'
import SettingForm from "@/components/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"
import { Entity } from '@/enums/entity'

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
        required: true,
      },
    ]
  },
  {
    title: 'setting_site',
    fields: [
      {
        name: ['site', 'primary_color'],
        label: 'setting_site_site_primary_color',
        type: DetailItemType.color_picker,
        required: true,
      },
      { type: DetailItemType.space },
      {
        name: ['site', 'home_page'],
        label: 'setting_site_site_home_page',
        type: DetailItemType.select,
        required: true,
        options: {
          entity: Entity.cms_page,
          label: '${ name }',
          value: '${ code }'
        }
      },
      {
        name: ['site', 'footer_block'],
        label: 'setting_site_site_footer_block',
        type: DetailItemType.select,
        required: true,
        options: {
          entity: Entity.cms_block,
          label: '${ name }',
          value: '${ code }'
        }
      },
    ]
  }
]

export default SettingSitePage