

import { db } from "../firebase/firebase-config";
import { types } from "../types/types";





export const startNewcalificacion = () => {
    return async( dispatch, getstate) => {


        const uid = getstate().auth.uid;

        const newcalificacion = {
            
            puntuacion: '',
            usuario: '',
            comentario: '',
            data: new Date().getTime()

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