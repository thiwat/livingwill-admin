import { Layout } from 'antd'
import Menu from './Menu'
import Logo from "./Logo"
import { LayoutProps } from "../types"
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider theme={'light'}>
        <Logo />
        <Menu />
        <Footer />
      </Layout.Sider>
      <Layout>
        <Header />
        <Layout.Content style={{ padding: 10 }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout