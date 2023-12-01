import { MENU } from "@/constants/menu"
import { t } from "@/utils/translate"
import { useRouter } from "next/router"
import { useMemo } from "react"

const useBreadcrumb = () => {

  const router = useRouter()

  const _getMenuFromPath = (items: any, path: string): any => {
    for (const menu of items) {
      if (menu.key === path) {
        return t(menu.label)
      }

      if (menu.children) {
        const match = _getMenuFromPath(menu.children, path)
        if (match) return match
      }
    }
    return ''
  }

  const activeItem: string = useMemo<string>(() => {
    return _getMenuFromPath(MENU, router.asPath)

  }, [router.asPath])

  return {
    activeItem
  }
}

export default useBreadcrumb