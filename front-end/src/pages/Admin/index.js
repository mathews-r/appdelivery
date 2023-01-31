import { useState } from 'react';
import NavAdmin from '../../components/NavBar/NavAdmin';
import api from '../../service/request';

export default function AdminManage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState('');
  const MAX_PASSWORD_LENGTH = 6;
  const MAX_NAME_LENGTH = 12;
  const [isLogged, setIsLogged] = useState(true);
  const userEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  async function RegisterBtn(e) {
    e.preventDefault();
    const newUser = await api.post.register({ name, email, password, select });
    console.log(newUser);
  }

  return (
    <div>
      <header>
        <NavAdmin />
      </header>

      <form className="container" onSubmit={ RegisterBtn }>
        <label htmlFor="name-input">
          Nome
          <input
            name="name-input"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
            data-testid="admin_manage__input-name"
          />
        </label>

        <label htmlFor="email-input">
          Email
          <input
            type="email"
            name="email-input"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            data-testid="admin_manage__input-email"
          />
        </label>

        <label htmlFor="password-input">
          Password
          <br />
          <input
            type="password"
            id="password-input"
            name="password-input"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            data-testid="admin_manage__input-password"
          />

          <select
            name="role-input"
            type="role"
            value={ select }
            onChange={ (e) => setSelect(e.target.value) }
            data-testid="admin_manage__select-role"
          >
            <option value="Default">-------</option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>

          <button
            type="submit"
            data-testid="admin_manage__button-register"
            disabled={
              !(password.length >= MAX_PASSWORD_LENGTH
                && userEmail.test(email)
                && name.length >= MAX_NAME_LENGTH
                && select !== 'Default')
            }
          >
            Cadastrar
          </button>

          { !isLogged && (
            <h1 data-testid="admin_manage__element-invalid-register">
              Usuário já existe.
            </h1>
          )}

        </label>
      </form>
    </div>
  );
}
