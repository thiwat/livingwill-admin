import { message } from 'antd'
import dynamic from 'next/dynamic'
import { useMemo, useRef } from 'react'
import { WysiwygEditorProps } from './types'

const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false
})

const WysiwygEditor = ({
  value,
  disabled,
  onChange
}: WysiwygEditorProps) => {

  const firstTime = useRef<boolean>(true)

  const _onChange = (newValue: string) => {
    if (firstTime.current) {
      firstTime.current = false
      return
    }

    onChange && onChange(newValue)
  }

  const config = useMemo(() => {
    return {
      readonly: disabled,
      uploader: {
        url: '/api/attachment/upload',
        isSuccess: (res) => {
          return !!res?.url;
        },
        defaultHandlerSuccess: function (data, res) {
          this.s.insertImage(data.url)
        },
        buildData: (data) => {
          const file = data.getAll('files[0]')[0]

          // const form = new FormData()
          // form.append('file', file, file.name)
          // form.append('size', file.size / 1e6)
          // form.append('path', 'wysiwyg')

          // return form
        },
        process: (res) => {
          return {
            url: res.url
          }
        },
        getMessage: (res) => {
          return res?.msg;
        },
        error: (e) => {
          message.error(e.message)
        },
      }
    }
  }, [disabled])


  return (
    <JoditEditor
      value={firstTime.current ? value : null}
      onChange={_onChange}
      config={config}
    />
  )
}

export default WysiwygEditor