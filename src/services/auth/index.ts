import { requestAuthLogin, requestMyProfile } from "@/apis/client/auth"
import { useSetProfileState } from "@/atoms/profile"
import { useSettingsStateValue } from "@/atoms/settings"
import { useRequest } from "ahooks"
import { useRouter } from "next/router"
import { useRef } from "react"

const useAuth = () => {

  const router = useRouter()
  const recaptchaToken = useRef<string>('')
  const settings = useSettingsStateValue()
  const setProfile = useSetProfileState()

  const authRequest = useRequest(requestAuthLogin, {
    manual: true,
    onSuccess: (r) => {
      myProfileRequest.run()
    },
  })

  const myProfileRequest = useRequest(requestMyProfile, {
    manual: true,
    onSuccess: (r) => {
      setProfile(r)
      router.push('/')
    }
  })

  const login = (values: any) => {
    settings.recaptcha?.enabled
      ? authRequest.run({
        username: values.username,
        password: values.password,
        recaptcha_token: recaptchaToken.current
      })
      : authRequest.run({

        username: values.username,
        password: values.password
      })
  }

  const onVerifyCaptcha = (token: string) => {
    recaptchaToken.current = token
  }

  return {
    recaptcha: settings['recaptcha'],
    login,
    onVerifyCaptcha,
  }
}

export default useAuth