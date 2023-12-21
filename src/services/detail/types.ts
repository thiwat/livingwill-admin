import { Entity } from "@/enums/entity";
import { Action, DetailBadgeProps } from "@/types/detail";

export type DetailServiceProps = {
  entity: Entity,
  keyData: string,
  title: string,
  badge?: DetailBadgeProps,
  actions?: Action[]
}