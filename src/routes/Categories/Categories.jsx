import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Categories.module.css';

export function Categories() {
  const [categories, setCategories] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error))
  }, [])


  return (
    <div className={css.main}>
      <h1 className={css.title}>Categorias</h1>

        <div className={css.container}>
          <table className={css.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Total de productos</th>              
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.products.length}</td>               
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={css.footer}>
          <p className={css.total}>
            Total: <span className={css.totalValue}>{categories.length}</span>
          </p>
        </div>

      <div>
        <Link className={css.link} to={"/"}>Volver</Link>
      </div>

    </div>
  );
}