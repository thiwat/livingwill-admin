import { DetailItemType } from '@/enums/detail'
import { FieldItem, FieldValueFunction, SectionProps } from '@/types/detail'
import _cloneDeep from 'lodash/cloneDeep'
import _flattenDeep from 'lodash/flattenDeep'
import _get from 'lodash/get'
import _set from 'lodash/set'
import _isString from 'lodash/isString'

export const executeBooleanValue = (value: boolean | FieldValueFunction, extra): boolean => {
  if (typeof value === 'function') {
    return value(extra)
  }

  return value || false
}

export const getItemProps = (props, extra) => {
  const temp = _cloneDeep(props)
  temp['required'] = executeBooleanValue(temp.required, extra)
  temp['disabled'] = executeBooleanValue(temp.disabled, extra)
  temp['hidden'] = executeBooleanValue(temp.hidden, extra)

  if (temp.dependenciesFields) {
    temp['dependencies'] = temp.dependenciesFields
    delete temp['dependenciesFields']
  }

  return temp
}

export const prepareInitialData = (data: any, sections: SectionProps[]) => {
  const cloneData = _cloneDeep(data)
  const fields = sections.map(i => i.fields).flat()
  for (const field of fields) {
    if (field.type === DetailItemType.json && _get(data, field.name)) {
      _set(cloneData, field.name, JSON.stringify(_get(data, field.name), null, 2))
    }
    if (field.type === DetailItemType.boolean) {
      _set(cloneData, field.name, _get(cloneData, field.name) ?? false)
    }
  }
  return cloneData
}


export const prepareDataBeforeSave = (data: any, sections: SectionProps[]): any => {
  const cloneData = _cloneDeep(data)
  const fields: FieldItem[] = _flattenDeep([...sections.map(i => i.fields)])

  for (const field of fields) {
    if (field.type === DetailItemType.number) {
      if (_get(data, field.name)) {
        _set(cloneData, field.name, +_get(data, field.name))
      }
    }
    if (field.type === DetailItemType.json && _isString(_get(data, field.name))) {
      _set(cloneData, field.name, JSON.parse(_get(data, field.name)))
    }
  }

  return cloneData
}