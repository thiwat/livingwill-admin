import { ActionMode } from "@/enums/detail";
import { prepareInitialData } from "@/utils/form";
import { t } from "@/utils/translate";
import { Modal, Form as AntForm, Button } from "antd";
import React, { useEffect } from "react";
import Form from "../Form";
import Section from "../Sections";
import { FormModalProps } from "./types";

const FormModal = ({
  open,
  name,
  title,
  data,
  mode,
  sections,
  onClose,
  onSubmit,
  onDelete
}: FormModalProps) => {

  const [form] = AntForm.useForm()

  useEffect(() => {
    if (open) {
      form.setFieldsValue(prepareInitialData(data, sections))
    }
  }, [open])

  const _onClose = () => {
    form.resetFields()
    onClose()
  }

  const _onFinish = (values: any) => {
    form.resetFields()
    onClose()
    onSubmit(values)
  }

  const _onDelete = () => {
    form.resetFields()
    onDelete()
  }

  return (
    <Modal
      open={open}
      title={title}
      width={800}
      onCancel={_onClose}
      footer={[
        <Button
          key={'cancel'}
          id={'cancel'}
          onClick={_onClose}
        >
          {t('form_button_cancel')}
        </Button>,
        <React.Fragment key={'delete'}>
          {!!onDelete && mode === ActionMode.update &&
            <Button danger onClick={_onDelete}>
              {t('form_button_delete')}
            </Button>
          }
        </React.Fragment>,
        <Button
          key={'save'}
          type={'primary'}
          onClick={form.submit}
        >
          {t('form_button_submit')}
        </Button>
      ]}
    >
      <Form
        name={name}
        form={form}
        onFinish={_onFinish}
      >
        {sections.map((i, index) => (
          <Section
            noStyle
            key={`section-${index}`}
            extraData={{
              value: data,
              mode
            }}
            {...i}
          />
        ))}
      </Form>
    </Modal>
  )
}

export default FormModal