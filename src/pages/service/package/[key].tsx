import Detail from "@/components/Detail"
import { ActionMode, DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { useParams } from "next/navigation"

const PackageDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.package}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'package_general_information',
    fields: [
      {
        label: 'package_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'package_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
        allowTranslate: true
      },
      {
        label: 'package_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'package_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      },
    ]
  },
  {
    title: 'package_detail_information',
    fields: [
      {
        label: 'package_is_default',
        name: 'is_default',
        type: DetailItemType.boolean,
        required: true
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'package_price',
        name: 'price',
        type: DetailItemType.number,
        required: true,
      },
      {
        label: 'package_number_of_asset',
        name: 'number_of_asset',
        type: DetailItemType.number,
        required: true,
      },
      {
        label: 'package_detail',
        name: 'detail',
        type: DetailItemType.wysiwyg,
        required: true,
        allowTranslate: true,
        span: 24
      }
    ]
  }
]

export default PackageDetail