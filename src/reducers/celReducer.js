
import { types } from '../types/types';


const initialState = {
    cellist: [],
    active: null
}





export const celReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.celLoad:
            
            return {
                ...state,
                cellist: [ ...action.payload ]
            }
            

      
        
    
        default:
            return state
    }

}