import _get from 'lodash/get'
import _cloneDeep from 'lodash/cloneDeep'
import { ListItemOptionProps, ListItemProps } from '@/types/list'
import { ListItemType } from "@/enums/list";
import { formatDateTime } from '@/utils/date'
import ListActions from '@/components/List/Actions';
import { t } from './translate';
import { Tag } from 'antd';


export const prepareListColumns = (columns: ListItemProps[], key: string) => {
  const cols = _cloneDeep(columns)
  cols.push({
    dataIndex: key,
    key,
    width: 50,
    align: 'right',
    fiexed: 'right',
    type: ListItemType.action
  })

  for (const col of cols) {
    col.title = t(col.title)
    col.render = _renderByType(col.type, col.options)
    col.align = _getAlign(col.type)
  }

  return cols
}

const _getAlign = (type: ListItemType): string => {
  if ([ListItemType.boolean, ListItemType.number].includes(type)) {
    return 'center'
  }
  return ''
}

const _renderByType = (type: ListItemType, options?: ListItemOptionProps) => {
  switch (type) {
    case ListItemType.date:
      return _renderDate
    case ListItemType.number:
      return _renderNumber(options)
    case ListItemType.badge:
      return _renderBadge(options)
    case ListItemType.boolean:
      return _renderBoolean
    case ListItemType.action:
      return rowId => <ListActions rowId={rowId} />
    default:
      return undefined
  }
}

const _renderDate = (value: string) => {
  return formatDateTime(value)
}

const _renderNumber = (options: ListItemOptionProps) => (value: string) => {
  if (options?.format === 'currency') {
    return `฿${(+value || 0).toLocaleString()}`
  }

  return value
}

const _renderBoolean = (value: boolean) => {
  return value
    ? <Tag color={'green'}>
      {t('common_yes')}
    </Tag>
    : <Tag color={'red'}>
      {t('common_no')}
    </Tag>
}

const _renderBadge = (options: ListItemOptionProps) => (value: string) => {
  return (
    <Tag color={_get(options, `mapColors.${value}`)} >
      {t(`${options.prefixTranslate}${value}`)}
    </Tag>
  )
}