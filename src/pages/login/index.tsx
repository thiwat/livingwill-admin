import { Typography } from "antd"
import { LoginForm } from "../../components/Forms/LoginForm"
import { t } from "../../utils/translate"

const LoginPage = () => {
  return (
    <div>
      <Typography.Title level={3}>
        {t('login_title')}
      </Typography.Title>
      <LoginForm />
    </div>
  )
}

export default LoginPage