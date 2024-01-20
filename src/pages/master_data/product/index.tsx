import ListModal from "@/components/ListModal"
import { ActionMode, DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { SectionProps } from "@/types/detail"
import { ListItemProps } from "@/types/list"

const MasterDataProductPage = () => {
  return (
    <ListModal
      entity={Entity.master_data_product}
      columns={COLUMNS}
      sections={SECTIONS}
      defaultData={{ type: 'product' }}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'master_data_product_label',
    dataIndex: 'label',
    key: 'label'
  },
  {
    type: ListItemType.string,
    title: 'master_data_product_value',
    dataIndex: 'value',
    key: 'value'
  },
]

const SECTIONS: SectionProps[] = [
  {
    fields: [
      {
        label: 'master_data_product_label',
        name: 'label',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'master_data_product_value',
        name: 'value',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'master_data_product_price',
        name: ['extra', 'price'],
        type: DetailItemType.number,
        required: true,
      }
    ]
  }
]


export default MasterDataProductPage