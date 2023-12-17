import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import css from "./ProductForm.module.css";

export function ProductForm() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigation = useNavigate();

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

   console.log('formData', formData);
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: "PUT",
      body: formData,
    })
    .then(response => response.json())
    .then(() => {
      navigation('/products')
      
    })
    .catch(error => console.log(error))
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
          <input 
            type="file"
            name="image"
            id="image"
          />
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

