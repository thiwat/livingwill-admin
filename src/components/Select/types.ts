import { FieldItemOptions } from '@/types/detail'

export type SelectProps = {
  value?: any;
  options: FieldItemOptions;
  onChange?: (value) => void;
}