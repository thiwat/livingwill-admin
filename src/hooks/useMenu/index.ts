import { MENU } from "@/constants/menu"
import { t } from "@/utils/translate"
import { useRouter } from "next/router"
import { useMemo } from "react"

const useMenu = () => {

  const router = useRouter()

  const items = useMemo(() => {
    return MENU.map(i => {
      const item = i
      item.label = t(item.label)
      if (item.children) {
        item.children = item.children.map(i => ({
          label: t(i.label),
          key: i.key
        }))
      }
      return item
    })
  }, [])

  const onClick = ({ key }: { key: string }) => {
    router.push(key)
  }

  const getDefaultSelectedKeys = (): string[] => {
    return [router.asPath]
  }

  return {
    items,
    defaultSelectedKeys: getDefaultSelectedKeys(),
    onClick
  }
}

export default useMenu