
import React from 'react'
import { useSelector } from 'react-redux';
import { Mobiles } from '../../data/Mobiles';
import { MarcasList } from './MarcasList';
import { ProdCard } from './ProdCard';



export const Cellist = () => {

     const { cellist } = useSelector(state => state.cellist);


    //  {cellist.filter(modelo => modelo.includes('S')).map(filteredModelo => (
    //     <li>
    //       {filteredModelo}
    //     </li>
    //   ))}
    
 
           console.log(cellist);
        // console.log(Mobiles);

        //    console.log(filteredModelo)

        // if ( name === '' ) {
        //     return [];
        // }
       
       
        // name = name.toLocaleLowerCase();
        // return Mobiles.filter( mobil => mobil.modelo.toLocaleLowerCase().includes( name )  );
       

        // return Cellist


        
    return (


            // <div>
            //     {
            // cellist.map((element)=>{ <div className="titulo-noticia">{element}</div>   })
            // }

            

            // </div>

           



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
        
