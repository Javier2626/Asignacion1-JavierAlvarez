


import React, { useContext } from 'react'
import { ProductsContext } from '../productos/CalificacionContext';
// import { ProductsContext } from '../../productos/ProductsContext'
// import { CartContext } from '../Global/CartContext'

export const Cali = () => {

    const { products } = useContext(ProductsContext);
    console.log(products);

    // const { dispatch } = useContext(CartContext);
  
    const getcelByOwner = () => {
        return products.filter(( mod ) => mod.celular === 'SAM GALAXY S21');

           
    }
    // console.log (getcelByid("SAM GALAXY S21 PRO"))
    // console.log (getcelByOwner('SAM GALAXY S21'));
    console.log (getcelByOwner());

    


    return (
        
            
            <div class="cardcalificacion">
                {getcelByOwner.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    
                    
                    <div class="cardcalificacion">
                    <div class="card-header">
                    { product.puntuacionEst }  { product.usuario }  
                    </div>
                
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                       
                        <p> { product.data } </p>
                        <p>{ product.comentario }</p>


                        {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                        </blockquote>
                    </div>
                    <br/>
                    
                    </div>

                    
                    
                ))}
                

                


            </div>
            




       
    )

    

    }
