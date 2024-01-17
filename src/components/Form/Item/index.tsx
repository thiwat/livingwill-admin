import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import _cloneDeep from 'lodash/cloneDeep'
import { DetailItemType } from "@/enums/detail"
import { Checkbox, DatePicker, Input, Switch } from "antd"
import { FormItem } from ".."
import { FormItemByTypeProps } from "./types"
import { getItemProps } from '@/utils/form'
import Select from '@/components/Select'
import WysiwygEditor from '@/components/Wysiwyg'
import TranslateModal from '@/components/TranslateModal'
import Editor from '@/components/Editer'
import Attachment from '@/components/Attachment'
import AddableList from '@/components/AddableList'
import { t } from '@/utils/translate'
import Tags from '@/components/Tags'
import NotificationTemplate from '@/components/NotificationTemplate'
import ColorPicker from '@/components/ColorPicker'

const FormItemByType = ({
  type,
  extraData,
  options,
  ...props
}: FormItemByTypeProps) => {

  const _renderItem = ({ disabled, ...props }) => {

    if (type === DetailItemType.string) {
      if (props.allowTranslate) {
        return (
          <FormItem {...props}>
            <Input
              disabled={disabled}
              addonAfter={<TranslateModal name={props.name} type={type} label={props.label} />}
            />
          </FormItem>
        )
      }
      return (
        <FormItem {...props}>
          <Input disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.number) {
      return (
        <FormItem {...props}>
          <Input type={'number'} disabled={disabled} suffix={t(options?.suffix)} />
        </FormItem>
      )
    }
    if (type === DetailItemType.boolean) {
      return (
        <FormItem {...props} valuePropName="checked" style={{ marginBottom: 5 }}>
          <Switch disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.password) {
      return (
        <FormItem {...props}>
          <Input.Password disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.color_picker) {
      return (
        <FormItem {...props}>
          <ColorPicker disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.checkbox) {
      return (
        <FormItem {...props}>
          <Checkbox.Group options={options.options.map(i => ({
            label: t(i.label),
            value: i.value
          }))} />
        </FormItem>
      )
    }
    if (type === DetailItemType.select) {
      return (
        <FormItem {...props}>
          <Select options={options} disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.datetime) {
      return (
        <FormItem {...props}>
          <DatePicker disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.addable) {
      return (
        <FormItem {...props}>
          <AddableList
            detailLayout={options.detailLayout}
            listLayout={options.listLayout}
            allowDrag={options.allowDrag}
            disabled={disabled}
          />
        </FormItem>
      )
    }
    if (type === DetailItemType.json) {
      return (
        <FormItem {...props}>
          <Editor />
        </FormItem>
      )
    }
    if (type === DetailItemType.attachment) {
      return (
        <FormItem {...props}>
          <Attachment
            disabled={disabled}
            accept={options.accept}
          />
        </FormItem>
      )
    }
    if (type === DetailItemType.notification_template) {
      return (
        <NotificationTemplate />
      )
    }
    if (type === DetailItemType.wysiwyg) {
      if (props.allowTranslate) {
        return (
          <>
            <TranslateModal
              name={props.name}
              type={type}
              label={props.label}
            />
            <FormItem {...props}>
              <WysiwygEditor />
            </FormItem>
          </>
        )
      }
      return (
        <FormItem {...props}>
          <WysiwygEditor />
        </FormItem>
      )
    }
    if (type === DetailItemType.tags) {
      return (
        <FormItem {...props}>
          <Tags entity={options.entity} />
        </FormItem>
      )
    }
  }

  if (!_isEmpty(props.dependenciesFields)) {
    return (
      <FormItem
        noStyle
        shouldUpdate={(prev, curr) => {
          for (const field of props.dependenciesFields) {
            if (_get(prev, field) !== _get(curr, field)) {
              return true
            }
          }
          return false
        }}
      >
        {({ getFieldsValue }) => {
          return _renderItem(getItemProps(props, {
            values: {
              ...(extraData?.values || {}),
              ...getFieldsValue()
            },
            mode: extraData?.mode
          }))
        }}
      </FormItem>
    )
  }

  return _renderItem(getItemProps(props, extraData))
}

export default FormItemByType