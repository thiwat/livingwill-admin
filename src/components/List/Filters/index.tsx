import { Button, Drawer } from "antd"
import { FilterOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { useState } from "react"
import { t } from "@/utils/translate"

const Filters = () => {

  const [open, setOpen] = useState<boolean>(false)

  const _toggleOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <Button
        className={styles.button}
        icon={<FilterOutlined />}
        onClick={_toggleOpen}
      />
      <Drawer
        title={t('common_filter_title')}
        open={open}
        onClose={_toggleOpen}
      />
    </>
  )
}

export default Filters