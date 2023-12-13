import TrashIcon from './../../assets/icons/Trash.svg';
import PencilIcon from './../../assets/icons/Pencil.svg';
import css from './Users.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.log(error))
  },[])

  const goToEditForm = (id) => {
    navigate(`/users/${id}`)
  }
  return (
    <div className={css.main}>
      <h1 className={css.title}>Usuarios</h1>
      <div className={css.container}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre de usuario</th>
              <th>Correo electrónico</th>
              <th>Imagen</th>
              <th>Eliminar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (              
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.image} alt="" width={50}/>
              </td>
              <td>                
                <button className={`${css.button} ${css.buttonDelete}`}>
                  <img 
                    src={TrashIcon}
                    alt="Icono de tacho de basura"
                    className={css.icon}
                  />                  
                </button>
              </td>
              <td>                
                <button 
                  onClick={() => goToEditForm(user.id)}
                  className={`${css.button} ${css.buttonEdit}`}
                >
                  <img 
                    src={PencilIcon}
                    alt="Icono de lápiz"
                    className={css.icon}
                  />                  
                </button>
              </td>
            </tr>
            ))}            
          </tbody>
        </table>
      </div>
      <div className={css.footer}>
        <p className={css.total}>
          Total: <span className={css.totalValue}>{users.length}</span>
        </p>
      </div>
    </div>
  );
}