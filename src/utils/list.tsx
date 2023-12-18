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
    align: 'right',
    fiexed: 'right',
    type: ListItemType.action
  })

  for (const col of cols) {
    col.title = t(col.title)
    col.render = _renderByType(col.type, col.options)
  }

  return cols
}

const _renderByType = (type: ListItemType, options?: ListItemOptionProps) => {
  switch (type) {
    case ListItemType.date:
      return _renderDate
    case ListItemType.badge:
      return _renderBadge(options)
    case ListItemType.action:
      return rowId => <ListActions rowId={rowId} />
    default:
      return undefined
  }
}

const _renderDate = (value: string) => {
  return formatDateTime(value)
}

const _renderBadge = (options: ListItemOptionProps) => (value: string) => {
  return (
    <Tag color={_get(options, `mapColors.${value}`)} >
      {t(`${options.prefixTranslate}${value}`)}
    </Tag>
  )
}