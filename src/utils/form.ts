import { FieldValueFunction } from '@/types/detail'
import _cloneDeep from 'lodash/cloneDeep'

export const executeBooleanValue = (value: boolean | FieldValueFunction, extra): boolean => {
  if (typeof value === 'function') {
    return value(extra)
  }

  return value || false
}

export const getItemProps = (props, extra) => {
  const temp = _cloneDeep(props)
  temp['required'] = executeBooleanValue(temp.required, extra)

  if (temp.dependenciesFields) {
    temp['dependencies'] = temp.dependenciesFields
    delete temp['dependenciesFields']
  }

  return temp
}
