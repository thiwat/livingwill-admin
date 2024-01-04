import Detail from "@/components/Detail"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { useParams } from "next/navigation"

const CmsPageDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.cms_page}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'cms_page_general_information',
    fields: [
      {
        label: 'cms_page_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'cms_page_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'cms_page_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'cms_page_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      }
    ]
  },
  {
    title: 'cms_page_content_information',
    fields: [
    ]
  }
]

export default CmsPageDetail