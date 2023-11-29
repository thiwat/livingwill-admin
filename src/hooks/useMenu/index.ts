import { useRouter } from "next/router"

const useMenu = () => {

  const router = useRouter()

  const onClick = ({ key }: { key: string }) => {
    router.push(key)
  }

  const getDefaultSelectedKeys = (): string[] => {
    return [router.asPath]
  }

  return {
    defaultSelectedKeys: getDefaultSelectedKeys(),
    onClick
  }
}

export default useMenu