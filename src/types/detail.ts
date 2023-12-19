import { ActionMode, DetailItemType } from "@/enums/detail"

export type FieldValueFunction = ({ values, mode }: { values: any, mode: ActionMode }) => boolean

export type FieldItemOption = {
  label: string;
  value: string;
}

export type FieldItemOptions = {
  options?: FieldItemOption[]
}

export type FieldItem = {
  label?: string;
  name?: string | string[];
  type: DetailItemType;
  span?: number;
  dependenciesFields?: string[];
  required?: boolean | FieldValueFunction;
  hidden?: boolean | FieldValueFunction;
  options?: FieldItemOptions
}

export type SectionProps = {
  title?: string;
  fields: FieldItem[];
}