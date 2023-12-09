import _cloneDeep from 'lodash/cloneDeep'
import { ListItemProps } from '@/types/list'
import { ListItemType } from "@/enums/list";
import { formatDateTime } from '@/utils/date'
import ListActions from '@/components/List/Actions';
import { t } from './translate';


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

const _renderByType = (type: ListItemType, options?: object) => {
  switch (type) {
    case ListItemType.date:
      return _renderDate
    case ListItemType.action:
      return rowId => <ListActions rowId={rowId} />
    default:
      return undefined
  }
}

const _renderDate = (value: string) => {
  return formatDateTime(value)
}