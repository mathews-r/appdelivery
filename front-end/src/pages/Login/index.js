import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context';
import api from '../../service/request';

function Login() {
  const userEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const MAX_PASSWORD_LENGTH = 6;

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(true);
  const { storageUser } = useContext(userContext);

  const login = async () => {
    try {
      const { data } = await api.post.login({ email, password });

      setUserData(data);
      setIsLogged(true);
      storageUser(data);
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
      setIsLogged(false);
    }
  };

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
        disabled={
          !(password.length >= MAX_PASSWORD_LENGTH && userEmail.test(email))
        }
        onClick={ login }
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta

      </button>

      { !isLogged && (
        <h1 data-testid="common_login__element-invalid-email">
          INVALID USER OR EMAIL
        </h1>
      )}

    </form>
  );
}

export default Login;
