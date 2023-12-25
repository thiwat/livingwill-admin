import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import _cloneDeep from 'lodash/cloneDeep'
import { DetailItemType } from "@/enums/detail"
import { DatePicker, Input, Switch } from "antd"
import { FormItem } from ".."
import { FormItemByTypeProps } from "./types"
import { getItemProps } from '@/utils/form'
import Select from '@/components/Select'
import WysiwygEditor from '@/components/Wysiwyg'
import TranslateModal from '@/components/TranslateModal'
import Editor from '@/components/Editer'

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
          <Input type={'number'} disabled={disabled} />
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
    if (type === DetailItemType.json) {
      return (
        <FormItem {...props}>
          <Editor />
        </FormItem>
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