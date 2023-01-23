import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className="form">

      <input
        data-testid="common_login__input-email"
        type="email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
        placeholder="E-mail"
      />

      <input
        data-testid="common_login__input-password"
        type="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
        placeholder="Senha"
      />

      <button
        data-testid="common_login__button-login"
        type="button"
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
    </form>

  );
}

export default Login;
