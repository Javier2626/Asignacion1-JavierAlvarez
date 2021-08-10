
import { loadcel } from "../helpers/loadcel";
import { types } from "../types/types";





export const startLoadingCel = ( id ) => {
    return async( dispatch ) => {
        
        const cel = await loadcel( id );
        dispatch( setCel( cel ) );
    }}


export const setCel = ( cel ) => ({
    type: types.celLoad,
    payload: cel
});


