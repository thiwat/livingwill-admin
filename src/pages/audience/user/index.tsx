import List from "@/components/List"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { Roles } from "@/enums/role"
import { ListItemProps } from "@/types/list"

const UserPage = () => {
  return (
    <List
      entity={Entity.user}
      columns={COLUMNS}
      rowKey={'user_id'}
      baseFilters={{ role: Roles.admin }}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'user_user_id',
    dataIndex: 'user_id',
    key: 'user_id'
  },
  {
    type: ListItemType.string,
    title: 'user_username',
    dataIndex: 'username',
    key: 'username'
  },
  {
    type: ListItemType.string,
    title: 'user_email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    type: ListItemType.string,
    title: 'user_full_name',
    dataIndex: 'full_name',
    key: 'full_name'
  },
  {
    type: ListItemType.date,
    title: 'user_last_logged_in_date',
    dataIndex: 'last_logged_in_at',
    key: 'last_logged_in_at'
  },
]

export default UserPage