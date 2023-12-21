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

const Detail = ({
  sections,
  ...props
}: DetailProps) => {

  const {
    form,
    data,
    actions,
    badgeData,
    mode,
    loading,
    displayTitle,
    onSubmit,
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
            actions={actions}
            onClick={onClickCustomAction}
            mode={mode}
          />,
          <Button
            type={'primary'}
            htmlType={'submit'}
          >
            {t('common_save_button')}
          </Button>
        ]}
      />
      {sections.map((i, index) => (
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