import CheckboxGroup from "@/components/CheckboxGroup";
import { FilterItemType } from "@/enums/list";
import { FilterItemProps } from "./types";

const FilterItem = ({ type, options, value, onChange }: FilterItemProps) => {
  if (type === FilterItemType.options) {
    return <CheckboxGroup value={value} options={options} onChange={onChange} />
  }
}

export default FilterItem