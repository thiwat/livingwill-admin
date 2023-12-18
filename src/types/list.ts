import { ListItemType } from "@/enums/list";

export type ListItemOptionProps = {
  mapColors?: { [key: string]: string },
  prefixTranslate?: string
}

export type ListItemProps = {
  type: ListItemType,
  title: string,
  dataIndex: string,
  key: string,
  sorter?: boolean,
  options?: ListItemOptionProps
}