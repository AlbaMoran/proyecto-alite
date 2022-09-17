import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import ItemList from "./ItemList";
import products from "../../assets/database/products";
import { customFetch } from "../../utilities/customFetch";

function ItemListContainer() {
  const [listProducts, setListProduct] = useState([]);
  const [status, setStatus] = useState(`flex`);

  useEffect(() => {
    customFetch(products)
      .then((data) => {
        setListProduct(data);
        setStatus(`none`);
        // console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  // console.log(listProducts);

  const onAdd = () => {
    swal({
      title: `Se agregó correctamente al carrito`,
      icon: "success",
      button: "Aceptar",
      timmer: "2000",
    });
  };

  return (
    <>
      <ItemList listProducts={listProducts} />
      <div style={{ display: status }}>
        <div className="d-flex justify-content-center my-2">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"> </span>
          </div>
            <span> Cargando ...</span>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
