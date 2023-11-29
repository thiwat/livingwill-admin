import { LayoutProps } from "../types"
import styles from './index.module.css'

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.cardItem} ${styles.cardImg}`}>
        </div>
        <div className={`${styles.cardItem} ${styles.cardForm}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout