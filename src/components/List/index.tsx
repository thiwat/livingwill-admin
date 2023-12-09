import useList from "@/services/list"
import { Button, Col, Input, Row, Space, Table } from "antd"
import { ListProps } from "./types"
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import Filters from "./Filters"
import { t } from "@/utils/translate"

const List = (props: ListProps) => {

  const {
    data,
    keyword,
    columns,
    loading,
    onSearch,
    onRefresh
  } = useList(props)

  return (
    <>
      <Row align={'middle'} className={styles.header}>
        <Col span={12}>
          <Input
            allowClear
            defaultValue={keyword}
            addonBefore={<SearchOutlined />}
            onChange={onSearch}
          />
        </Col>
        <Filters />
        <Space className={styles.rightActions}>
          <Button
            icon={<ReloadOutlined />}
            onClick={onRefresh}
          />
          <Button type={'primary'}>
            {t('common_table_create_button')}
          </Button>
        </Space>
      </Row>
      <Table
        loading={loading}
        rowKey={props.rowKey}
        dataSource={data}
        columns={columns}
      />
    </>
  )
}

export default List