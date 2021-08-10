import { db } from "../firebase/firebase-config";




export const loadcel = async ( id ) => {
    
    // const celSnap = await db.collection(`${ uid }/journal/notes`).get();
    const celSnap = await db.collection(`/celulares`).get();


    const cel =[];

    // console.log(celSnap);

    // celSnap.forEach( snapHijo => {
    //     console.log(snapHijo.data());

    // })
    celSnap.forEach( snapHijo => {
        cel.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    // console.log(cel);
   

    
    return cel;

  

}


