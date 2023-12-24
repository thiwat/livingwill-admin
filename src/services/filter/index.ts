import _reduce from 'lodash/reduce'
import _isEmpty from 'lodash/isEmpty'
import { FilterProps } from "@/components/List/Filters/types"
import { useEffect, useState } from "react"
import { Form } from 'antd'

const useFilter = ({
  fields,
  value,
  onChange
}: FilterProps) => {

  const [open, setOpen] = useState<boolean>(false)
  const [form] = Form.useForm()

  useEffect(() => {
    if (open) {
      _isEmpty(value)
        ? form.setFieldsValue(_reduce(fields, (r, i) => {
          r[i.name] = undefined
          return r
        }, {}))
        : form.setFieldsValue(value)
    }
  }, [open])

  const toggleOpen = () => {
    setOpen(prev => !prev)
  }

  const onClearAll = () => {
    onChange({})
    toggleOpen()
  }

  const onSubmit = () => {
    const values = form.getFieldsValue()
    onChange(values)
    toggleOpen()
  }

  return {
    open,
    form,
    toggleOpen,
    onSubmit,
    onClearAll
  }
}

export default useFilter