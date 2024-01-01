import { t } from '@/utils/translate'
import { Select as AntSelect } from 'antd'
import { SelectProps } from './types'

const Select = ({ options, disabled, value, onChange }: SelectProps) => {
  return (
    <AntSelect
      value={value}
      disabled={disabled}
      mode={options.mode ? options.mode : undefined}
      onChange={onChange}
      options={options.options?.map(i => ({
        label: t(i.label),
        value: i.value
      }))}
    />
  )
}

export default Select