
import React from 'react';
import { Link } from 'react-router-dom';




export const ProdCard = ({
    OS,
    almacenamiento,
    bateria,
    camara,
    categoria,
    descripcion,
    foto,
    id,
    marca,
    modelo,
    pantalla,
    peso,
    precio,
    procesador,
    puntuacion

    }) => {

    return (
        
        <div className='products-container'>
        
            
            <div className='card' key={id}>
                <div className='product-img'>
                    <img src={foto} className='product-img' alt="not found" />
                </div>
                <div className='product-name'>
                    {modelo}
                </div>                        
                <div className='product-name' >                            
                    {almacenamiento}
                    </div>
                    <br/>
                    <div className='product-det'>
                    
                    Camara : {camara}
                    </div>
                    <div className='product-det'>
                     Pantala : {pantalla}
                    </div>
                    <div className='product-det'>
                    Bateria : {bateria}
                    </div>     

                    <br/>  
                    <div className='product-det'>
                    <img className="img-est" src={`./assets/logo/estrellas.png`}  alt=""></img>{puntuacion}
                    </div>      

                    <div className='product-price'>
                    {/* Rs {product.ProductPrice}.00 */}
                    {precio}
                    </div>

                <button className='btn btn-primary' >AÑADIR AL CARRITO</button>

      

                
                 <Link to={ `./marcas/${ id }`}>
                     Mas detalles  
                     
                 </Link>

            </div>
            
        
    </div>

)
}

