import { Mobiles } from '../data/Mobiles';


export const getmarcasbycategoria = ( categoria ) => {

    const validcategorias = ['Samsung', 'Apple', 'Huawei', 'Xiaomi'];

    if ( !validcategorias.includes( categoria ) ) {
        throw new Error(`categoria "${ categoria }" no es correcto`);
    }

    return Mobiles.filter( mobil => mobil.categoria === categoria );

}