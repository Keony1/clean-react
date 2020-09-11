import React from 'react';
import Styles from './login-styles.scss';

import HeaderLogin from '@/presentation/components/login-header/login-header';
import Input from '@/presentation/components/input/input';
import Spinner from '@/presentation/components/spinner/spinner';
import Footer from '@/presentation/components/footer/footer';

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <HeaderLogin />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
