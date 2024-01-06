import List from "@/components/List"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const BlogPage = () => {
  return (
    <List
      entity={Entity.blog}
      columns={COLUMNS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'blog_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'blog_code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    type: ListItemType.boolean,
    title: 'blog_enabled',
    dataIndex: 'enabled',
    key: 'enabled',
  },
  {
    type: ListItemType.date,
    title: 'blog_last_update',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
]

export default BlogPage