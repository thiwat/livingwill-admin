import { Form as AntForm, FormItemProps } from 'antd'
import { FormProps } from './types'

const Form = ({ children, ...props }: FormProps) => {
  return (
    <AntForm
      {...props}
      requiredMark={'optional'}
      layout={'vertical'}
    >
      {children}
    </AntForm>
  )
}

export const FormItem = (props: FormItemProps) => {

  const rules = props.rules || []
  if (props.required) {
    rules.push({
      required: true,
      message: ('info_required_field')
    })
  }

  return (
    <AntForm.Item {...props} rules={rules} required={props.required}>
      {props.children}
    </AntForm.Item>
  )
}

export default Form
