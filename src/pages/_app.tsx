import '../../public/styles/index.css'
import { useEffect, useState } from 'react'
import Head from 'next/head';
import _get from 'lodash/get'
import Layout from '../components/Layout';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import { requestMyProfile } from '@/apis/server/auth';
import { profileAtom } from '@/atoms/profile';
import { useRouter } from 'next/router';

const NOT_REQUIRE_AUTH = ["/login"];

const MyApp = ({ Component, pageProps }) => {

  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initialData()
  }, [])

  const initialData = () => {

    if (pageProps?.token && NOT_REQUIRE_AUTH.includes(router.pathname)) {
      return router.push('/').then(() => setLoading(false))
    }

    if (!pageProps?.token && !NOT_REQUIRE_AUTH.includes(router.pathname)) {
      return router.push('/login').then(() => setLoading(false))
    }

    setLoading(false)
  }

  const _setInitialState = (data) => ({ set }) => {
    if (_get(data, 'profile')) {
      set(profileAtom, data['profile'])
    }
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
        <RecoilRoot initializeState={_setInitialState(pageProps)}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#9BBC4E',
                borderRadius: 0
              }
            }}
          >
            <Layout>
              <Component
                {...pageProps}
              />
            </Layout>
          </ConfigProvider>
        </RecoilRoot>
      }
    </>
  )
}

MyApp.getInitialProps = async ({ ctx }) => {
  const pageProps = {}
  const isServer = typeof window === 'undefined'

  if (isServer) {
    let accessToken = _get(ctx, 'req.cookies.token')

    if (accessToken) {
      const profile = await requestMyProfile({ Authorization: `Bearer ${accessToken}` })
        .catch(e => { accessToken = '' })
      pageProps['token'] = accessToken
      pageProps['profile'] = profile
    }
  }

  return { pageProps }
}


export default MyApp