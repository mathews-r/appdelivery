import { useEffect, useState } from 'react';
import NavAdmin from '../../components/NavBar/NavAdmin';
import api from '../../services/request';

export default function AdminManage() {
  const MAX_PASSWORD_LENGTH = 6;
  const MAX_NAME_LENGTH = 12;
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState('');
  const [isExist, setIsExist] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const userEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const RegisterBtn = async (e) => {
    e.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));
    try {
      const newUser = await api.post
        .newAdminRegister({ name, email, password, role: select }, token);
      setUser(newUser.data);
    } catch (error) {
      setErrorMsg(error.response.data.message);
      setIsExist(true);
    }
  };

  const deleteUser = async (id) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await api.delete.deleteUser(id, token);
    setIsDeleted(!isDeleted);
  };

  const getUsers = async () => {
    const allUsers = await api.get.getAllUsers();
    setUsers(allUsers.data);
  };

  useEffect(() => {
    getUsers();
  }, [user, isDeleted]);

  return (
    <div style={ { backgroundColor: '#FAFAFA' } }>
      <NavAdmin />

      <form
        className="form justify-content-around"
        onSubmit={ RegisterBtn }
      >
        <div className="d-flex justify-content-center">

          <label className="form-label" htmlFor="name-input">
            Nome
            <input
              className="form-control"
              id="name-input"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
              data-testid="admin_manage__input-name"
            />
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <label className="form-label" htmlFor="email-input">
            Email
            <input
              className="form-control"
              type="email"
              id="email-input"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
              data-testid="admin_manage__input-email"
            />
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <label className="form-label" htmlFor="password-input">
            Password
            <input
              className="form-control"
              type="password"
              id="password-input"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
              data-testid="admin_manage__input-password"
            />
          </label>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <select
            id="select"
            className="form-select-w-70"
            name="role-input"
            type="role"
            value={ select }
            onChange={ (e) => setSelect(e.target.value) }
            data-testid="admin_manage__select-role"
          >
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
            <option value="administrator">Administrator</option>
          </select>

        </div>

        <div className="d-flex flex-column-w-90 gap-3 justify-content-center">
          <button
            className="btn btn-primary"
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
        </div>

        { isExist && (
          <h1 data-testid="admin_manage__element-invalid-register">
            {errorMsg}
          </h1>
        )}

      </form>

      <table className="table">
        <thead className="text-center">
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
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
                  className="btn btn-danger"
                  data-testid={
                    `admin_manage__element-user-table-remove-${index}`
                  }
                  type="button"
                  onClick={ () => deleteUser(elem.id) }
                >
                  REMOVE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
