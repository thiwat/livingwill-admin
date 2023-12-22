import _isArray from 'lodash/isArray'
import { useState } from "react";
import { TranslateModalProps } from "./types";
import { TranslationOutlined } from '@ant-design/icons'
import { Input, Modal, Tabs } from "antd";
import { FormItem } from "../Form";
import { LANGUAGES } from '@/constants/language';
import styles from './index.module.css'
import { DetailItemType } from '@/enums/detail';
import WysiwygEditor from '../Wysiwyg';
import { t } from '@/utils/translate';

const TranslateModal = ({
  name,
  label,
  type
}: TranslateModalProps) => {

  const [open, setOpen] = useState<boolean>(false)

  const _toggleOpen = () => setOpen(prev => !prev)

  const _getName = (lang: string): string[] => {
    if (_isArray(name)) {
      return [`_translates`, lang, ...name as string[]]
    }

    return ['_translates', lang, name as string]
  }

  return (
    <>
      <TranslationOutlined
        onClick={_toggleOpen}
        className={type === DetailItemType.wysiwyg ? styles.wysiwygButton : ''}
      />
      <Modal
        title={t(`common_translate_modal_title`, { field: label })}
        open={open}
        onCancel={_toggleOpen}
        width={800}
        onOk={_toggleOpen}
        bodyStyle={{ paddingTop: 0 }}
      >
        <Tabs
          items={LANGUAGES.map(i => ({
            label: i.name,
            key: i.code,
            children: (
              <>
                <FormItem
                  preserve
                  name={_getName(i.code)}
                >
                  {type === DetailItemType.wysiwyg
                    ? <WysiwygEditor />
                    : <Input />
                  }
                </FormItem>
              </>
            )
          }))}
        />
      </Modal>
    </>
  )
}

export default TranslateModal