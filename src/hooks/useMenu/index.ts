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
    const lastPath = router.pathname.split('/').at(-1)
    const isDetail = lastPath.startsWith('[') && lastPath.endsWith(']')
    return isDetail
      ? [router.asPath.split('/').slice(0, -1).join('/')]
      : [router.asPath]
  }

  const getDefaultOpenKeys = (): string[] => {
    const paths = router.pathname.split('/')
    if (paths.length < 3) {
      return []
    }
    return [`/${paths[1]}`]
  }

  return {
    items,
    defaultSelectedKeys: getDefaultSelectedKeys(),
    defaultOpenKeys: getDefaultOpenKeys(),
    onClick
  }
}

export default useMenu