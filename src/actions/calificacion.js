

import { MarcasScreen } from "../componentes/marcas/MarcasScreen";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";





export const startNewcalificacion = ( ComentarioC ) => {
    return async( dispatch, getstate) => {


        const uid = getstate().auth.uid;
        const name = getstate().auth.name;
        

        console.log( ComentarioC );

        
        const newcalificacion  = {
            
            puntuacionEst: '5',
            usuario: name,
            comentario: 'Testing comment',
            data: new Date()
            

        }

        const doc = await db.collection(`${ uid }/journal/notes`).add( newcalificacion ) 

        console.log( doc );

        // dispatch( activeCalificacion( doc.id, newcalificacion ) );

        }}


    export const setCalificaciones = ( calificaciones ) => ({
        type: types.calificacionesLoad,
        payload: calificaciones
    });


    

    // export const activeCalificacion = ( id, note ) => ({
    //     type: types.notesActive,
    //     payload: {
    //         id,
    //         ...note
    //     }
    // });