import TrashIcon from './../../assets/icons/Trash.svg';
import PencilIcon from './../../assets/icons/Pencil.svg';
import DocumentMagnifyingGlassIcon  from './../../assets/icons/DocumentMagnifyingGlass.svg';
import css from './Products.module.css';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Products() {
  const [products, setProducts] = useState([])
  const [reload, setReload] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [productId, setProductId] = useState()
  const modal = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error))
  }, [reload])

  const goToEditForm = (id) => {
    navigate(`/products/edit/${id}`)
  }

  const openModal = (id) => {
    setProductId(id)
    modal.current.showModal();
  }

  const closeModal = () => {
    modal.current.close();
  }

  const goToDetails = (id) => {
    navigate(`/products/detail/${id}`)
  }

  const deleteProduct = () => {
    setIsLoading(true)
    fetch(`http://localhost:3000/api/products/${productId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setReload(!reload)
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false)
        closeModal()
      })
  }

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
              <th>Imagen</th>
              <th>Eliminar</th>
              <th>Detalle</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>$ {product.price}</td>
                <td>{product.description}</td>
                <td>
                  <img src={product.image} alt="product image" width={70} />
                </td>
                <td>
                  <button
                    className={`${css.button} ${css.buttonDelete}`}
                    onClick={() => openModal(product.id)}
                  >
                    <img
                      src={TrashIcon}
                      alt="Icono de tacho de basura"
                      className={css.icon}
                    />
                  </button>
                </td>
                <td>
                  <button
                    className={`${css.button} ${css.buttonDetail}`}
                    onClick={() => goToDetails(product.id)}
                  >
                    <img
                      src={DocumentMagnifyingGlassIcon}
                      alt="Icono de documento de detalle" 
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

      <div className={css.footer}>
        <p className={css.total}>
          Total: <span className={css.totalValue}>{products.length}</span>
        </p>
      </div>

      <dialog className={css.dialog} ref={modal}>
        <h3>¿Esta seguro de eliminar este producto?</h3>
        <div className={css.buttons}>
          <button
            onClick={deleteProduct}
            className={`${css.button} ${css.buttonDelete}`}
            disabled={isLoading}
          >{isLoading ? 'Eliminando...' : 'Eliminar'}</button>
          <button
            onClick={closeModal}
            className={`${css.button} ${css.buttonCancel}`}
            disabled={isLoading}
          >Cancelar</button>
        </div>
      </dialog>
      <div>
        <Link className={css.link} to={"/"}>Volver</Link>
      </div>

    </div>
  );
}