import { PageHeaderProps } from "./types"
import styles from './index.module.css'
import { Row, Space } from "antd"
import React from "react"

const PageHeader = ({
  title,
  extra
}: PageHeaderProps) => {
  return (
    <>
      <Row
        justify={'space-between'}
        align={'middle'}
        className={styles.header}
      >
        <h1 className={styles.title}>{title}</h1>
        {extra?.length > 0 &&
          <Space>
            {extra.map((i, index) => (
              <React.Fragment key={`extra-${index}`}>
                {i}
              </React.Fragment>
            ))}
          </Space>
        }
      </Row>
    </>
  )
}

export default PageHeader