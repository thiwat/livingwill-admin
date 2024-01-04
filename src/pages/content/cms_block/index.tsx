import List from "@/components/List"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const CmsBlockPage = () => {
  return (
    <List
      entity={Entity.cms_block}
      columns={COLUMNS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'cms_block_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'cms_block_code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    type: ListItemType.boolean,
    title: 'cms_block_enabled',
    dataIndex: 'enabled',
    key: 'enabled',
  },
  {
    type: ListItemType.badge,
    title: 'cms_block_type',
    dataIndex: 'type',
    key: 'type',
    options: {
      prefixTranslate: 'cms_block_type_'
    }
  },
  {
    type: ListItemType.date,
    title: 'cms_block_last_update',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
]

export default CmsBlockPage