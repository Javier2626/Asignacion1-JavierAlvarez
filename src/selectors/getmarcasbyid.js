import { Mobiles } from "../data/Mobiles";



export const getmarcasbyid = ( id ) => {

    return Mobiles.find( cate => cate.id === id );

}
