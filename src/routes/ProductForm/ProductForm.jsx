import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./ProductForm.module.css";

export function ProductForm() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log({data});
      setProduct(data)
    })
  },[id])

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      image: formData.get("image"),
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description"),
    }

    console.log({data});
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Editar producto</h1>
      <form onSubmit={handleSubmit}>
        <p>Imagen del producto</p>
        <img 
          src={product?.image}
          alt={product?.name}
          className={css.image}
        />
        <div className={css.control}>
          <label htmlFor="image">Seleccione una imagen</label>
          <input type="file" name="image" id="image" />
        </div>
        <div className={css.control}>
          <label htmlFor="name">Nombre</label>
          <input 
            type="text"
            id="name"
            name="name"
            defaultValue={product?.name}
          />
        </div>
        <div className={css.control}>
          <label htmlFor="name">Precio</label>
          <input 
            type="number"
            id="price"
            name="price"
            defaultValue={product?.price}
          />
        </div>
        <div className={css.control}>
          <label htmlFor="name">Descuento</label>
          <input 
            type="number"
            id="discount"
            name="discount"
            defaultValue={product?.discount}
          />
        </div>
        <div className={css.control}>
          <label htmlFor="name">Cantidad disponible</label>
          <input 
            type="number"
            id="stock"
            name="stock"
            defaultValue={product?.stock}
          />
        </div>
        <div className={css.control}>
          <label htmlFor="description">Descripción</label>
          <textarea 
            name="description"
            id="description"
            rows="5"
            defaultValue={product?.description}
          >
          </textarea>          
        </div>
        <button
          type="submit"
          className={css.buttonSubmit}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

