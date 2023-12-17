import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import css from "./ProductDetail.module.css";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
    .then(res => res.json())    
    .then(data => {
      setProduct(data)
    })
    .catch(error => console.log(error))
  },[])

  return (
    <div className={css.container}>
      <Card>
        <h1>{product?.name}</h1>
        <p><span className={css.bold}>Descripción:</span> {product?.description}</p>
        <p><span className={css.bold}>Precio:</span> $ {product?.price}</p>
        <p><span className={css.bold}>Categoría:</span> {product?.category?.name}</p>
        <p><span className={css.bold}>Cantidad disponible:</span> {product?.stock}</p>
        <p>
          <span 
            className={css.bold}>
            {product?.discount > 0 ? "Con descuento:" : "Sin descuento:"}
          </span>
           {product?.discount > 0 && ` - $${product?.discount}`}
        </p>
        <img 
        src={product?.image} 
        alt={product?.name} 
        className={css.image}
        />
      </Card>
      
      <Link className={css.link} to={"/products"}>Volver</Link>
    </div>
  );
}