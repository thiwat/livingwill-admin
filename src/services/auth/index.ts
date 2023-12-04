import { requestAuthLogin, requestMyProfile } from "@/apis/client/auth"
import { useSetProfileState } from "@/atoms/profile"
import { cookies } from "@/utils/cookies"
import { useRequest } from "ahooks"
import { useRouter } from "next/router"

const useAuth = () => {

  const router = useRouter()
  const setProfile = useSetProfileState()

  const authRequest = useRequest(requestAuthLogin, {
    manual: true,
    onSuccess: (r) => {
      cookies.set('token', r.token, r.expires_in)
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
    authRequest.run({
      username: values.username,
      password: values.password
    })
  }

  return {
    login
  }
}

export default useAuth