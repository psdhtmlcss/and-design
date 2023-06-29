import { Form } from 'antd';
import InputWrapper from '../InputWrapper/InputWrapper';
import InputPasswordWrapper from '../InputPasswordWrapper/InputPasswordWrapper';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';

const AuthForm = () => {
  return (
    <Form
      style={{width: '264px', margin: '0 auto'}}
      name="authForm"
      autoComplete="off"
    >
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Неверный логин' }]}
      >
        <InputWrapper placeholder="Логин" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Неверный пароль' }]}
      >
        <InputPasswordWrapper placeholder="Пароль" />
      </Form.Item>

      <ButtonWrapper type="primary" block htmlType="submit">Войти</ButtonWrapper>
    </Form>
  )
}

export default AuthForm;