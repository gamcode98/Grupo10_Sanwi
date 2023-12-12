import TrashIcon from './../../assets/icons/Trash.svg';
import PencilIcon from './../../assets/icons/Pencil.svg';
import css from './Products.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Products() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.log(error))
  },[])

  return (
    <div className={css.main}>
      <h1 className={css.title}>Productos</h1>
      <div className={css.container}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              {/* <th>Descuento</th>
              <th>Categoría</th>
              <th>Stock</th> */}
              <th>Imagen</th>
              <th>Eliminar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (              
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price} $</td>
              <td>{product.description}</td>
              {/* <td>{product.discount}%</td>
              <td>{product.category.name}</td>
              <td>{product.stock} U</td> */}
              <td>
                <img src={product.image} alt="" width={50}/>
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
                  onClick={() => goToEditForm(product.id)}
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
    </div>
  );
}