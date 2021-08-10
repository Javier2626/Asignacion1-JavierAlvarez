import { db } from "../firebase/firebase-config";


export const loadCalificaiones = async( uid ) => {


    const calificacionesSnap = await db.collection(`${ uid }/journal/notes/`).get();

    const calificaciones = [];
    // console.log(calificacionesSnap)

    calificacionesSnap.forEach( snapHijo => {
        calificaciones.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    console.log(calificaciones);



    return calificaciones;
}