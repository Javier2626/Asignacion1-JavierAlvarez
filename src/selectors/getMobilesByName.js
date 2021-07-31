import { Mobiles } from '../data/Mobiles';

export const getMobilesByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }
   
   
    name = name.toLocaleLowerCase();
    return Mobiles.filter( mobil => mobil.modelo.toLocaleLowerCase().includes( name )  );
   
}