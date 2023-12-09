import { useProfileState } from "@/atoms/profile"
import { cookies } from "@/utils/cookies"
import { useRouter } from "next/router"

const useProfile = () => {

  const router = useRouter()
  const [profile, setProfile] = useProfileState()

  const onLogout = () => {
    setProfile({})
    cookies.remove('token')
    router.push('/login')
  }

  return {
    profile,
    onLogout
  }
}

export default useProfile