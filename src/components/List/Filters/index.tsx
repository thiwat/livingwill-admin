import { Button } from "antd"
import { FilterOutlined } from '@ant-design/icons'
import styles from './index.module.css'

const Filters = () => {
  return (
    <>
      <Button
        className={styles.button}
        icon={<FilterOutlined />}
      />
    </>
  )
}

export default Filters