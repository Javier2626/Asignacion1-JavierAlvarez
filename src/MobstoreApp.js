
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouters } from './routers/AppRouters';


import { useSelector } from 'react-redux';
import { ProductosContext } from './componentes/productos/ProductosContext';

export const MobstoreApp = () => {
    
   


    return (
        <Provider store={ store }>
        
            <AppRouters />
        
        </Provider>

        
    )
}




