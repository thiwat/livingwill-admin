import { ListItemType } from "@/enums/list";

export type ListItemProps = {
  type: ListItemType,
  title: string,
  dataIndex: string,
  key: string,
  sorter?: boolean
}