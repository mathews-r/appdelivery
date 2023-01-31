import { useEffect, useState } from 'react';
import NavAdmin from '../../components/NavBar/NavAdmin';
import api from '../../service/request';

export default function AdminManage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState('');
  const MAX_PASSWORD_LENGTH = 6;
  const MAX_NAME_LENGTH = 12;
  const CONFLICT = 409;
  const [isExist, setIsExist] = useState(true);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const userEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  async function RegisterBtn(e) {
    e.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    const newUser = await api.post
      .newAdminRegister({ name, email, password, role: select }, token);
    if (newUser.status === CONFLICT) return setIsExist(false);
    setUser(newUser.data);
  }

  async function deleteUser(id) {
    await api.delete.deleteUser(id);
    setIsDeleted(!isDeleted);
  }

  async function getUsers() {
    const allUsers = await api.get.getAllUsers();
    setUsers(allUsers.data);
  }

  useEffect(() => {
    getUsers();
  }, [user, isDeleted]);

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

          { isExist && (
            <h1 data-testid="admin_manage__element-invalid-register">
              Usuário já existe.
            </h1>
          )}

        </label>
      </form>
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>nome</th>
            <th>email</th>
            <th>tipo</th>
            <th>excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elem, index = 1) => (
            <tr key={ index }>
              <td
                data-testid={
                  `admin_manage__element-user-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {elem.name}
              </td>
              <td
                data-testid={
                  `admin_manage__element-user-table-email-${index}`
                }
              >
                {elem.email}
              </td>
              <td
                data-testid={
                  `admin_manage__element-user-table-role-${index}`
                }
              >
                {elem.role}
              </td>
              <td>
                <button
                  data-testid={
                    `admin_manage__element-user-table-remove-${index}`
                  }
                  type="button"
                  // disabled={ u.id === user.data.id }
                  onClick={ () => deleteUser(elem.id) }
                >
                  EXCLUIR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
