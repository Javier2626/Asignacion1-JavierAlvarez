

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { calificacionesReducer } from '../reducers/calificaReducer';

import { celReducer } from '../reducers/celReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,



    cellist: celReducer,
    calificaciones: calificacionesReducer
    
});




export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);