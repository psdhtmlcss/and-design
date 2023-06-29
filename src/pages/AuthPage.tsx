import { Layout, Card } from 'antd';
import AuthForm from '../components/AuthForm/AuthForm';
import './authPage.scss';
import Logo from '../components/Logo/Logo';

const { Content } = Layout;

const AuthPage = () => {
  return (
    <Layout className="auth-page">
      <Content className="auth-page__content">
        <Card>
          <Logo text="Вход в личный кабинет" />
          <AuthForm />
        </Card>
      </Content>
    </Layout>
  )
}

export default AuthPage;