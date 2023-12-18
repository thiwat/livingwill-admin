import useDetail from "@/services/detail"
import { t } from "@/utils/translate"
import { Button, Row, Space, Typography } from "antd"
import { DetailProps } from "./types"
import styles from './index.module.css'

const Detail = ({
  title,
  sections,
  entity,
  keyData
}: DetailProps) => {

  const { displayTitle } = useDetail({
    entity,
    keyData,
    title
  })

  return (
    <>
      <Row justify={'space-between'} align={'middle'} className={styles.header}>
        <h1 className={styles.title}>
          {displayTitle}
        </h1>
        <Space>
          <Button
            type={'primary'}
          >
            {t('common_save_button')}
          </Button>
        </Space>
      </Row>
    </>
  )
}

export default Detail