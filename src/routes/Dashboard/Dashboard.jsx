import { Card } from "../../components/Card/Card";
import css from "./Dashboard.module.css";
import { useEffect, useState } from 'react';

const routes = [
  {
    id: 1,
    path: "/users",
    exact: true,
    name: "Usuarios",
  },
  {
    id: 2,
    path: "/products",
    exact: true,
    name: "Productos",
  },
  {
    id: 3,
    path: "/categories",
    exact: true,
    name: "Categorias",
  }
];

export function Dashboard() {
  const [lastProduct, setLastProduct] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/products/last')
      .then(response => response.json())
      .then(data => setLastProduct(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className={css.body}>
      <div className={css.container}>
        {routes.map((route) => (
          <Card key={route.id}>
            <section>
              <h2>{route.name}</h2>
              <a
                className={css.link}
                href={route.path}>Acceder al Panel</a>
            </section>
          </Card>
        ))}
      </div>
      <div className={css.product}>
        <h1>Último producto creado</h1>
        <h2>{lastProduct.name}</h2>
        <img src={lastProduct.image} alt="" width={300} />
        <table className={css.table}>
          <tbody>
            <tr>
              <th scope="row">Descripción:</th>
              <td>{lastProduct.description}</td>
            </tr>
            <tr>
              <th scope="row">Precio:</th>
              <td>{lastProduct.price} $</td>
            </tr>

            <tr>
              <th scope="row">Stock:</th>
              <td>{lastProduct.stock} U</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}