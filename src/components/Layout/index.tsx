import { useRouter } from "next/router"
import AuthLayout from "./AuthLayout"
import MainLayout from "./MainLayout"
import { LayoutProps } from "./types"

const AUTH_PATH = [
  '/login'
]

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  if (AUTH_PATH.includes(router.pathname)) {
    return (
      <AuthLayout>
        {children}
      </AuthLayout>
    )
  }

  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}

export default Layout