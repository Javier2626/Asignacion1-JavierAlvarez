

import React from 'react';
import { getmarcasbycategoria } from '../../selectors/getmarcasbycategoria'
import { ProdCard } from './ProdCard';

export const MarcasList = ( {categoria} ) => {

    const Mobiles = getmarcasbycategoria( categoria );
    return (
        <div className="card-columns animate__animated animate__fadeIn  " justify-content="center"   >
            {
                Mobiles.map( mobil => (
                    <ProdCard 
                        key={mobil.id}
                        { ...mobil }
                    />
                ))
            }
        </div>
    )
}
