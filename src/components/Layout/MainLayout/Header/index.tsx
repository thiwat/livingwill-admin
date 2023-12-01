import useBreadcrumb from '@/hooks/useBreadcrumb'
import { Layout, Typography } from 'antd'
import styles from './index.module.css'

const Header = () => {

  const { activeItem } = useBreadcrumb()

  return (
    <Layout.Header className={styles.header}>
      <Typography.Text className={styles.activeBreadcrumb}>
        {activeItem}
      </Typography.Text>
    </Layout.Header>
  )
}

export default Header