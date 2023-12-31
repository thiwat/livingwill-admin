import { Entity } from "@/enums/entity";
import { ListItemProps } from "@/types/list";
import { FilterField } from "./Filters/types";

export type ListProps = {
  entity: Entity,
  columns: ListItemProps[],
  rowKey: string,
  baseFilters?: object,
  filters?: FilterField[],
}