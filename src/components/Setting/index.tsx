import { t } from "@/utils/translate"
import { Button, Col, Row } from "antd"
import Form from "../Form"
import FormItemByType from "../Form/Item"
import PageHeader from "../PageHeader"
import Section from "../Sections"
import { SettingFormProps } from "./types"

const SettingForm = ({
  name,
  sections
}: SettingFormProps) => {
  return (
    <Form
      name={name}
      onFinish={(values) => console.log(values)}
    >
      <PageHeader
        title={t(`menu_settings_${name}`)}
        extra={[
          <Button type={'primary'} htmlType={'submit'}>
            {t('common_save_button')}
          </Button>
        ]}
      />
      {sections.map((i, index) => (
        <Section
          key={`section-${index}`}
          {...i}
        />
      ))}

    </Form>
  )
}

export default SettingForm