import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import useDetail from "@/services/detail"
import { t } from "@/utils/translate"
import { Button } from "antd"
import PageHeader from "../PageHeader"
import TimeStamp from "./TimeStamp"
import { DetailProps } from "./types"
import Section from '../Sections'
import Form from '../Form'
import CustomActions from './CustomActions'
import DeleteButton from './DeleteButton'

const Detail = (props: DetailProps) => {

  const {
    form,
    data,
    actions,
    customActions,
    badgeData,
    mode,
    loading,
    displayTitle,
    onSubmit,
    onDelete,
    onClickCustomAction
  } = useDetail(props)

  if (loading) return null

  return (
    <Form
      form={form}
      name={props.entity}
      initialValues={data}
      onFinish={onSubmit}
    >
      <PageHeader
        title={displayTitle}
        badge={badgeData}
        extra={[
          <TimeStamp
            createdAt={_get(data, 'created_at')}
            updatedAt={_get(data, 'updated_at')}
          />,
          <CustomActions
            actions={customActions}
            onClick={onClickCustomAction}
            mode={mode}
          />,
          <DeleteButton
            actions={actions}
            mode={mode}
            onClick={onDelete}
          />,
          <Button
            type={'primary'}
            htmlType={'submit'}
          >
            {t('common_save_button')}
          </Button>
        ]}
      />
      {props.sections.map((i, index) => (
        <Section
          key={`section-${index}`}
          extraData={{
            value: data,
            mode
          }}
          {...i}
        />
      ))}
    </Form>
  )
}

export default Detail