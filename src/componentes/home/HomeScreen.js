
import React from 'react';
import { MarcasList } from '../marcas/MarcasList'


export const HomeScreen = () => {
    // <div className="container mt-10  "></div>


    return (
        

        

        <div>
        <div className="caruosel-cel">
         <img class="img-fluid" src={`./assets/bann/bsam2.JPG`}  alt=""></img>
        
         {/* <img src="./assets/bann/bsam2.JPG" alt="Parliament Hill" height="null" width="1900"></img> */}
        </div>

        <hr />

        <MarcasList categoria={"Samsung"} />

      </div>




    )
}






