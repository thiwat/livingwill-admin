import List from "@/components/List"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const PackagePage = () => {
  return (
    <List
      entity={Entity.package}
      columns={COLUMNS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'package_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'package_code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    type: ListItemType.number,
    title: 'package_price',
    dataIndex: 'price',
    key: 'price',
    options: {
      format: 'currency'
    }
  },
  {
    type: ListItemType.boolean,
    title: 'package_enabled',
    dataIndex: 'enabled',
    key: 'enabled',
  },
  {
    type: ListItemType.boolean,
    title: 'package_is_default',
    dataIndex: 'is_default',
    key: 'is_default',
  }
]

export default PackagePage