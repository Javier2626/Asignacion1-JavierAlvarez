import { Mobiles } from '../data/Mobiles';
// import { loadcel } from '../helpers/loadcel';
// import React from 'react';

// import { useSelector } from 'react-redux';





export const getmarcasbycategoria = ( marca ) => {

     


   
    const validmarca = ['Samsung', 'Apple', 'Huawei', 'Xiaomi'  ];
    

    if ( !validmarca.includes( marca ) ) {
        throw new Error(`marca "${ marca }" no es correcto`);
    }

    return Mobiles.filter( mobil => mobil.marca === marca );

}
