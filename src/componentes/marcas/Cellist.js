
import React from 'react'
import { useSelector } from 'react-redux';

import { ProdCard } from './ProdCard';



export const Cellist = () => {

     const { cellist } = useSelector(state => state.cellist);


  
    
 
           console.log(cellist);

        
    return (
        

        <div className="card-columns animate__animated animate__fadeIn  " justify-content="center"   >
            {
                cellist.map( cel => (
                    <ProdCard
                        key={ cel.id }
                        { ...cel }
                    />                
                    
                ))               
            }           

        </div>


        
)}
        
