import TrashIcon from './../../assets/icons/Trash.svg';
import PencilIcon from './../../assets/icons/Pencil.svg';
import css from './Users.module.css';

export function Users() {
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
            <tr>
              <td>1</td>
              <td>John</td>
              <td>john@example.com</td>
              <td>
                <img src="https://via.placeholder.com/150" alt=""/>
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
                <button className={`${css.button} ${css.buttonEdit}`}>
                  <img 
                    src={PencilIcon}
                    alt="Icono de lápiz"
                    className={css.icon}
                  />                  
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>jane@example.com</td>
              <td>
                <img src="https://via.placeholder.com/150" alt=""/>
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
                <button className={`${css.button} ${css.buttonEdit}`}>
                  <img 
                    src={PencilIcon}
                    alt="Icono de lápiz"
                    className={css.icon}
                  />                  
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}