import { LanguageItemProps } from "./types"
import styles from './index.module.css'
import { PRIMARY_COLOR } from "@/constants/colors"

const style: any = {
  '--primary-color': PRIMARY_COLOR
}

const LanguageItem = ({
  name,
  code,
  icon,
  isActive,
  onClick
}: LanguageItemProps) => {

  const className = isActive
    ? `${styles.container} ${styles.active}`
    : styles.container

  const _onClick = () => {
    onClick(code)
  }

  return (
    <div className={className} style={style} onClick={_onClick}>
      <img src={icon} className={styles.icon} />
      <span>
        {`${name} (${code})`}
      </span>
    </div>
  )
}

export default LanguageItem