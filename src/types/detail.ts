import { DetailItemType } from "@/enums/detail"

export type FieldItem = {
  title?: string;
  name?: string;
  type?: DetailItemType;
  span?: number;
}

export type Section = {
  title: string;
  fields: FieldItem[]
}