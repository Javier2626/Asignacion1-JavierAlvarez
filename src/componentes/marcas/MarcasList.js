

import React from 'react';
import { loadcel } from '../../helpers/loadcel';
import { getmarcasbycategoria } from '../../selectors/getmarcasbycategoria'
import { ProdCard } from './ProdCard';

import { useSelector } from 'react-redux';
import { Cellist } from './Cellist';
import { Mobiles } from '../../data/Mobiles';







export const MarcasList = ( {marca} ) => {

    const Mobiles = getmarcasbycategoria( marca );
    const { cellist } = useSelector(state => state.cellist);
    // const {cel} = useSelector(state => state.cel);
    // console.log(state)
    

    // console.log(loadcel);
    console.log(cellist);
    console.log(Mobiles);
    
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