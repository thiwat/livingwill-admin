import useAuth from "@/services/auth"
import { Button, Input } from "antd"
import { t } from "../../../utils/translate"
import Form, { FormItem } from "../../Form"

export const LoginForm = () => {

  const { login } = useAuth()

  return (
    <Form
      name={'login-form'}
      style={{ marginTop: 16 }}
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
        style={{ width: '100%', marginTop: 8 }}
        type={'primary'}
        htmlType={'submit'}
        size={'large'}
      >
        {t('login_button_submit')}
      </Button>
    </Form>
  )
}