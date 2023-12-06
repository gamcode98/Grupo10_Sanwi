import { Card } from "../../components/Card/Card";
import css from "./Dashboard.module.css";

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
  return (
    <div className={css.container}>
      {routes.map((route) => (
        <Card key={route.id}>
          <h2>{route.name}</h2>
          <a
            className={css.link}
            href={route.path}>{route.name}</a>
        </Card>
      ))}
    </div>
  );
}