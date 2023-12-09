import { Entity } from "@/enums/entity";
import { ListItemProps } from "@/types/list";

export type ListProps = {
  entity: Entity,
  columns: ListItemProps[],
  rowKey: string,
  baseFilters?: object,
}