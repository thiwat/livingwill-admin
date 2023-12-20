import '../../public/styles/index.css'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head';
import _get from 'lodash/get'
import Layout from '../components/Layout';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import { requestMyProfile } from '@/apis/server/auth';
import { profileAtom } from '@/atoms/profile';
import { useRouter } from 'next/router';
import { requestSiteSetting } from '@/apis/server/system';
import { settingsAtom } from '@/atoms/settings';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const NOT_REQUIRE_AUTH = ["/login"];

const MyApp = ({ Component, pageProps }) => {

  const siteSetting = useRef<any>({})
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initialData()
  }, [])

  const initialData = () => {

    if (pageProps.settings) {
      siteSetting.current = pageProps.settings
    }

    if (pageProps?.token && NOT_REQUIRE_AUTH.includes(router.pathname)) {
      return router.push('/').then(() => setTimeout(() => setLoading(false), 500))
    }

    if (!pageProps?.token && !NOT_REQUIRE_AUTH.includes(router.pathname)) {
      return router.push('/login').then(() => setTimeout(() => setLoading(false), 500))
    }

    setLoading(false)
  }

  const _setInitialState = (data) => ({ set }) => {
    if (_get(data, 'profile')) {
      set(profileAtom, data['profile'])
    }
    if (_get(data, 'settings')) {
      set(settingsAtom, data['settings'])
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
          <GoogleReCaptchaProvider
            reCaptchaKey={siteSetting.current?.recaptcha?.site_key}
          >
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
          </GoogleReCaptchaProvider>
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

    const siteSettings = await requestSiteSetting()
    pageProps['settings'] = { ...siteSettings }
  }

  return { pageProps }
}


export default MyApp