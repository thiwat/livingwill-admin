import useAuth from "@/services/auth"
import { Button, Input } from "antd"
import { GoogleReCaptcha } from "react-google-recaptcha-v3"
import { t } from "../../../utils/translate"
import Form, { FormItem } from "../../Form"
import styles from './index.module.css'

export const LoginForm = () => {

  const {
    recaptcha,
    login,
    onVerifyCaptcha
  } = useAuth()

  return (
    <Form
      name={'login-form'}
      className={styles.form}
      onFinish={login}
    >
      <FormItem
        label={t('login_username')}
        name={'username'}
        required
      >
        <Input />
      </FormItem>
      <FormItem
        label={t('login_password')}
        name={'password'}
        required
      >
        <Input.Password />
      </FormItem>
      <Button
        className={styles.loginButton}
        type={'primary'}
        htmlType={'submit'}
        size={'large'}
      >
        {t('login_button_submit')}
      </Button>
      {recaptcha?.enabled &&
        <GoogleReCaptcha
          onVerify={onVerifyCaptcha}
        />
      }
    </Form>
  )
}