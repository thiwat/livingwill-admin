import { DetailItemType } from "@/enums/detail";
import { FieldValueFunction } from "@/types/detail";
import { FormItemProps } from "antd";

type Overwrite<T, U> = Omit<T, keyof U> & U;

export type FormItemByTypeProps = Overwrite<FormItemProps, {
  type: DetailItemType,
  dependenciesFields?: string[],
  required?: boolean | FieldValueFunction;
  hidden?: boolean | FieldValueFunction;
  extraData: any;
}>