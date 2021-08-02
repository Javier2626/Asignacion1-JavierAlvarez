
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
        
        <div >
      
      <div className="card " style={ { maxwidth: 18 }} >

            <img src={ `./assets/celulares/${ id }.jpg`} className="card-img-top" alt={ modelo } />
               
                <div className="card-body">
                 <h5 className="card-title"> { modelo }</h5>
                 <br/>
                 <p className="card-text"> { almacenamiento }</p>
                 <p className="card-text"> { precio }</p>
                 <p className="card-text"> { puntuacion }</p>
                 {/* <a href="#" class="btn btn-primary">Añadir al carrito  </a> */}
                 <button className="btn btn-primary">Añadir al carrito </button>
                 
        
                 <ul/>
                 <Link to={ `./marcas/${ id }`}>
                     Mas detalles  
                     
                 </Link>
                 </div>
                 </div>
         </div>





    
    // <div className="card  flex-fill" style={ { maxwidth: 18 }} >

    //     <div className="row"> 
    //     <img src={`./assets/celulares/SAM GALAXY S21.JPG`}   /> 
    //         <h5 className="align-self-center ml-2">Apple</h5>
    //         <div className="ml-auto"><span class="text-success">Seats available</span></div>
    //     </div>
    //     <p className="mt-3 mb-2">10/06/20 -- Remote</p>
    //     <h5>Apple Worldwide Developer conference 2020</h5>
    //     <p className="mt-4 mb-2">Hosted by</p>
    //     <div className="users mb-5"> 
    //      </div> <button className="btnp"><span>Book a seat</span></button> <button className="btnp info"><span>More information</span></button>
    // </div>








        
    )
}
