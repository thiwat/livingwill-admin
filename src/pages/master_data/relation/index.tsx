import ListModal from "@/components/ListModal"
import { ActionMode, DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { SectionProps } from "@/types/detail"
import { ListItemProps } from "@/types/list"

const MasterDataRelationPage = () => {
  return (
    <ListModal
      entity={Entity.master_data_relation}
      columns={COLUMNS}
      sections={SECTIONS}
      defaultData={{ type: 'relation' }}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'master_data_relation_label',
    dataIndex: 'label',
    key: 'label'
  },
  {
    type: ListItemType.string,
    title: 'master_data_relation_value',
    dataIndex: 'value',
    key: 'value'
  },
]

const SECTIONS: SectionProps[] = [
  {
    fields: [
      {
        label: 'master_data_relation_label',
        name: 'label',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'master_data_relation_value',
        name: 'value',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'master_data_relation_maximum_of_item',
        name: ['extra', 'maximum_of_item'],
        type: DetailItemType.number,
        required: true,
      }
    ]
  }
]


export default MasterDataRelationPage