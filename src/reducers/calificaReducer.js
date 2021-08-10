


import { types } from '../types/types';

const initialState = {
    calificaciones: [],
    active: null
}


export const calificacionesReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.calificacionesLoad:
            console.log(action.payload)
            return{
                ...state,
                calificaciones: [ ...action.payload ]
            }
        
        default:
            return state
        
    }
}



