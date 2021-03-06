import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { consultarDatabase } from '../config/firebase'
import { Loading } from './Loading'


export const Productos = () => {

  const [listaProductos, setListaProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const cargarProductos = async () => {
    setLoading(true)
    const listaTemporal = await consultarDatabase('lista-productos')
    // console.log(listaTemporal);
    setListaProductos(listaTemporal)
    setLoading(false)
  }
  // cargarProductos()

  useEffect(() => {
    cargarProductos()
  }, [])


  return (
    <div>
      {
        loading
          ?
          <Loading />
          :
          <>
            <h1>
              Lista Productos
              <Link to="/lista-productos/create"
                className="btn btn-outline-success float-end"
              >Adicionar Producto</Link>
            </h1>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio Unitario</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody>
                {
                  listaProductos.map((producto, index) => (
                    <tr key={producto.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{producto.descripcion}</td>
                      <td>{producto.cantidad}</td>
                      <td>{producto.precioUnitario}</td>
                      <td>
                        <Link className="btn btn-outline-primary btn-sm"
                          to={`/lista-productos/${producto.id}`}>
                          Editar
                        </Link>

                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </>
      }


    </div>
  )
}
