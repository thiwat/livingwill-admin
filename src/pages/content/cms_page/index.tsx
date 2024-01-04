import List from "@/components/List"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const CmsPagePage = () => {
  return (
    <List
      entity={Entity.cms_page}
      columns={COLUMNS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'cms_page_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'cms_page_code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    type: ListItemType.boolean,
    title: 'cms_page_enabled',
    dataIndex: 'enabled',
    key: 'enabled',
  },
  {
    type: ListItemType.date,
    title: 'cms_page_last_update',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
]

export default CmsPagePage