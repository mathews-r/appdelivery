import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../service/request';

function Register() {
  const userEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const MAX_PASSWORD_LENGTH = 6;
  const MAX_NAME_LENGTH = 12;

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(true);

  const register = async () => {
    try {
      await api.post.register({ name, email, password });
      setIsLogged(true);
      navigate('/customer/products');
    } catch (error) {
      setIsLogged(false);
    }
  };

  return (
    <form className="form">
      <input
        data-testid="common_register__input-name"
        type="email"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
        placeholder="Seu Nome"
      />
      <input
        data-testid="common_register__input-email"
        type="email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
        placeholder="E-mail"
      />

      <input
        data-testid="common_register__input-password"
        type="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
        placeholder="*******"
      />

      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={
          !(password.length >= MAX_PASSWORD_LENGTH
            && userEmail.test(email)
            && name.length >= MAX_NAME_LENGTH)
        }
        onClick={ () => register() }
      >
        CADASTRAR
      </button>

      { !isLogged && (
        <h1 data-testid="common_register__element-invalid_register">
          INVALID USER OR EMAIL
        </h1>
      )}

    </form>
  );
}

export default Register;
