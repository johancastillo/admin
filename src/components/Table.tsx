import React from 'react'

const Table = () => {
    return (
        <div className="col-md-8">
          <div className="client-bar">
            <h1>Proveedores</h1>

            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
              + Add provider
            </button>

          </div>
          
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Productos/Servicios</th>
                        <th scope="col">Rif</th>
                        <th scope="col">Creado</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="client-column">
                            <div>
                                <img className="img-client" src="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=TcQ2NnxSMGEAX9sZw2Z&tp=1&oh=65d25b8817040f9d2ec7deb68ce9678f&oe=602873F4" alt="" />
                            </div>

                            <div className="client-info">
                                <span>Johan Castillo</span>
                                <p>jcjohan2707@gmail.com</p>
                            </div>
                        </td>

                        <td>
                            Desarrollo Web
                        </td>

                        <td>
                            V34343534
                        </td>

                        <td>
                            01-12-2020
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
