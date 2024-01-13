import { useProfileState } from "@/atoms/profile"
import { useRouter } from "next/router"

const useProfile = () => {

  const router = useRouter()
  const [profile, setProfile] = useProfileState()

  const onLogout = () => {
    setProfile({})
    router.push('/login')
  }

  return {
    profile,
    onLogout
  }
}

export default useProfile