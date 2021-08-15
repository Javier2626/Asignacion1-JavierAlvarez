
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouters } from './routers/AppRouters';

// import { ProductsContextProvider } from './componentes/marcas/MarcasScreen';
import { ProductsContextProvider } from './componentes/productos/CalificacionContext';



export const MobstoreApp = () => {
    
   


    return (
        <ProductsContextProvider>
        <Provider store={ store }>
        
            <AppRouters />
        
        </Provider>
        </ProductsContextProvider>

        
    )
}




