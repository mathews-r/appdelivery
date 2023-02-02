import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context';

function Login() {
  const userEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const MAX_PASSWORD_LENGTH = 6;
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const { signIn } = useContext(userContext);

  const login = async () => {
    const response = await signIn(email, password);
    if (response === undefined) {
      setErrorMsg('Invalid user or password');
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  };

  const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (isLogged === false) {
      navigate('/login');
    }
    if (isLogged === true && user) {
      navigate('/customer/products');
    }
  };

  useEffect(() => checkLogin(), [isLogged]);

  return (
    <section
      style={ { minHeight: '100vh', backgroundColor: '#fafafa' } }
      className="d-flex align-items-center justify-content-center"
    >
      <form className="row gy-2 gx-3 align-items-center justify-content-center">

        <h1 className="display-5 text-center">SIGN IN</h1>

        <div className="d-flex justify-content-center">
          <label htmlFor="InputEmail" className="form-label">
            Email
            <input
              id="InputEmail"
              className="form-control"
              data-testid="common_login__input-email"
              type="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
              placeholder="E-mail"
            />
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <label htmlFor="InputPassword" className="form-label">
            Password
            <input
              id="InputPassword"
              className="form-control"
              data-testid="common_login__input-password"
              type="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
              placeholder="Senha"
            />
          </label>
        </div>

        <div className="d-flex flex-column w-25 gap-3">
          {/* // className="d-flex justify-content-center align-items-center flex-column" */}

          <button
            className="btn btn-primary"
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
            className="btn btn-secondary"
            data-testid="common_login__button-register"
            type="button"
            onClick={ () => navigate('/register') }
          >
            AINDA NÃO TENHO CONTA
          </button>

        </div>
        {!isLogged && (
          <h1 data-testid="common_login__element-invalid-email">{errorMsg}</h1>
        )}
      </form>
    </section>
  );
}

export default Login;
