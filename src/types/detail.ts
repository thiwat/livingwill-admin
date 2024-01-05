import { ActionMode, AfterActionExecute, DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity";
import { ListItemProps } from "./list";

export type FieldValueFunction = ({ values, mode }: { values: any, mode: ActionMode }) => boolean

export type CustomActionExecute = ({ values }: { values: any }) => any;

export type ActionCondition = ({ values }) => boolean;

export type FieldItemOption = {
  label: string;
  value: string;
}

export type FieldItemOptions = {
  options?: FieldItemOption[],
  entity?: Entity;
  label?: string;
  value?: string;
  mode?: 'multiple' | 'tags';
  suffix?: string;
  path?: string;
  accept?: string;
  allowDrag?: boolean;
  rowKey?: string;
  detailLayout?: SectionProps[];
  listLayout?: ListItemProps[]
}

export type FieldItem = {
  label?: string;
  name?: string | string[];
  type: DetailItemType;
  span?: number;
  dependenciesFields?: string[];
  allowTranslate?: boolean;
  required?: boolean | FieldValueFunction;
  hidden?: boolean | FieldValueFunction;
  disabled?: boolean | FieldValueFunction;
  options?: FieldItemOptions
}

export type SectionProps = {
  title?: string;
  fields: FieldItem[];
  extraData?: object;
  noStyle?: boolean;
}

export type DetailBadgeProps = {
  fieldName: string,
  mapColors: object;
  prefixTranslate?: string;
}

export type CustomAction = {
  label: string;
  key: string;
  action: Function;
  conditions: CustomActionExecute;
  params: CustomActionExecute;
  afterExecute?: AfterActionExecute;
}

export type Actions = {
  delete: boolean | ActionCondition;
}