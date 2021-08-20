
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiOpenModal } from '../../actions/ui';
import { DetalleModal } from './DetalleModal';


import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function modal() {
        
    <DetalleModal/>
   
};

export const ProdCard = ({
    OS,
    almacenamiento,
    bateria,
    camara,
    categoria,
    descripcioncorta,
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

        const dispatch = useDispatch();



    return (
        

        <div className='products-container'>
        
            
            <div className='card' key={id}>
                <div className='product-img'>
               

                   <img src={foto} 
                   className='product-img' 
                   alt="not found" 
                   onClick={() => {
                    // <DetalleModal/>  
                    console.log('carga de modal2') 
                    dispatch( uiOpenModal() );
                      }}
                      />
                   {/* <DetalleModal/> */}

               
                


                </div>
                <div className='product-name'>
                    {modelo}
                </div>                        
                <div className='product-name' >                            
                    {almacenamiento}
                    </div>
                    <br/>
                    <div className='product-det'>
                    
                     {descripcioncorta}
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
                    
                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend"> </Typography>
                     
                    <Rating name="read-only" value={puntuacion} readOnly />
                    {puntuacion}
                    </Box>
                    </div>      

                    <div className='product-price'>
                    {/* Rs {product.ProductPrice}.00 */}
                    {precio}
                    </div>

                <button 
                className='btn btn-primary' 
                onClick={() => {
                console.log('carga de modal2') 
                dispatch( uiOpenModal() );
                }}
                >AÑADIR AL CARRITO</button>

      

                
                 <Link to={ `./marcas/${ id }`}>
                     Mas detalles  
                  {/* <DetalleModal/> */}
                  
                 
                 </Link>
{/*                  
                 < button  
                 onClick={() => {
                     
                    <DetalleModal/>  

                      }} >

                     modal
                 </button> */}


                 {/* <DetalleModal/> */}


            </div>
            {/* <DetalleModal/> */}
            
        
    </div>






)
}

