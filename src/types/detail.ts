import { ActionMode, DetailItemType } from "@/enums/detail"

export type FieldValueFunction = ({ values, mode }: { values: any, mode: ActionMode }) => boolean

export type FieldItemOption = {
  label: string;
  value: string;
}

export type FieldItemOptions = {
  options?: FieldItemOption[],
  multiple?: boolean;
}

export type FieldItem = {
  label?: string;
  name?: string | string[];
  type: DetailItemType;
  span?: number;
  dependenciesFields?: string[];
  required?: boolean | FieldValueFunction;
  hidden?: boolean | FieldValueFunction;
  disabled?: boolean | FieldValueFunction;
  options?: FieldItemOptions
}

export type SectionProps = {
  title?: string;
  fields: FieldItem[];
  extraData?: object;
}

export type DetailBadgeProps = {
  fieldName: string,
  mapColors: object;
  prefixTranslate?: string;
}