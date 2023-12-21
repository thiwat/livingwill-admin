import { Entity } from "@/enums/entity";
import { Actions, CustomAction, DetailBadgeProps } from "@/types/detail";

export type DetailServiceProps = {
  entity: Entity,
  keyData: string,
  title: string,
  badge?: DetailBadgeProps,
  actions?: Actions,
  customActions?: CustomAction[]
}