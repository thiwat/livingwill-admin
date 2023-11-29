import '../../public/styles/index.css'
import { useEffect, useState } from 'react'
import Head from 'next/head';
import Layout from '../components/Layout';
import { ConfigProvider } from 'antd';


const MyApp = ({ Component, pageProps }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initialData()
  }, [])

  const initialData = () => {
    setLoading(false)
  }


  return (
    <>
      <Head>
        <title>{'Living Will - Admin Portal'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={'Meta Description'}></meta>
        <meta name="keywords" content={'Meta Keywords'} />
      </Head>
      {loading
        ? <div></div>
        :
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#9BBC4E',
            }
          }}
        >
          <Layout>
            <Component
              {...pageProps}
            />
          </Layout>
        </ConfigProvider>
      }
    </>
  )
}

MyApp.getInitialProps = async ({ ctx }) => {
  const pageProps = {}
  const isServer = typeof window === 'undefined'
  if (isServer) { }
  return { pageProps }
}


export default MyApp