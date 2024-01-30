import { Entity } from "@/enums/entity";
import { t } from "@/utils/translate";
import { Table } from "antd";
import _get from 'lodash/get'
import _set from 'lodash/set'
import _cloneDeep from 'lodash/cloneDeep'
import Select from "../Select";
import { BlockMappingProps } from "./types";

const BLOCKS = ['login', 'register', 'forgot_password']

const BlockMapping = ({
  value,
  onChange
}: BlockMappingProps) => {

  const _transformData = (value: any): any[] => {
    const res = []
    for (const block of BLOCKS) {
      res.push({
        key: block,
        value: _get(value, block)
      })
    }
    return res
  }

  const _onChange = (key: string) => (data: string) => {
    const cloneValue = _cloneDeep(value || {})
    _set(cloneValue, key, data)
    onChange(cloneValue)
  }

  return (
    <Table
      dataSource={_transformData(value)}
      columns={[
        {
          title: t('site_setting_block_mapping_key'),
          key: 'key',
          dataIndex: 'key'
        },
        {
          title: t('site_setting_block_mapping_value'),
          key: 'value',
          dataIndex: 'value',
          render: (value, row) => (
            <Select
              value={value}
              options={{
                entity: Entity.cms_block,
                label: '${ name }',
                value: '${ code }'
              }}
              onChange={_onChange(row.key)}
            />
          )
        }
      ]}
      pagination={{ hideOnSinglePage: true }}
    />
  )
}

export default BlockMapping