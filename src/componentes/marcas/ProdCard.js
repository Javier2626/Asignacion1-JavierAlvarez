
import React from 'react';
import { Link } from 'react-router-dom';





export const ProdCard = ({
    id,
    modelo,
    categoria,
    almacenamiento,
    precio,
    puntuacion,
    }) => {

    return (
        
        <div className="shadow p-0 mb-4 bg-body rounded">
      
      <div className="card" style={ { maxwidth: 18 }}>

            <img src={ `./assets/celulares/${ id }.jpg`} className="card-img-top" alt={ modelo } />
               
                <div className="card-body">
                 <h5 className="card-title"> { modelo }</h5>
                 <p className="card-text"> { almacenamiento }</p>
                 <p className="card-text"> { precio }</p>
                 <p className="card-text"> { puntuacion }</p>
                 {/* <a href="#" class="btn btn-primary">Añadir al carrito  </a> */}
                 <button className="btn btn-primary">Añadir al carrito</button>
                 
                 
                 <Link to={ `./marcas/${ id }`}>
                     Mas detalles  
                 </Link>
                 </div>
                 </div>
        </div>


        
    )
}
