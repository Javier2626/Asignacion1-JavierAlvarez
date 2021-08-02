
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppleScreen } from '../componentes/apple/AppleScreen';
// import { LoginScreen } from '../componentes/auth/LoginScreen';
// import { RegisterScreen } from '../componentes/auth/RegisterScreen';
import { HomeScreen } from '../componentes/home/HomeScreen';
import { HuaweiScreen } from '../componentes/huawei/HuaweiScreen';
import { MarcasScreen } from '../componentes/marcas/MarcasScreen';
import { SamsungScreen } from '../componentes/samsung/SamsungScreen';
import { SearchScreen } from '../componentes/search/SearchScreen';
import { Navbar } from '../componentes/ui/Navbar';
import { XiaomiScreen } from '../componentes/xiaomi/XiaomiScreen';
import { AuthRouter } from './AuthRouter';

export const DashboardRouters = () => {
    return (
        <>
        <Navbar/>

        <div className="container mt-3">
            <Switch>
                <Route exact path="/home" component={ HomeScreen } />
                <Route exact path="/samsung" component={ SamsungScreen } />
                <Route exact path="/marcas/:marcaid" component={ MarcasScreen } />
                <Route exact path="/apple" component={ AppleScreen } />
                <Route exact path="/huawei" component={ HuaweiScreen } />
                <Route exact path="/xiaomi" component={ XiaomiScreen } />
                <Route exact path="/search" component={ SearchScreen } />

                <Route exact path="/auth/login" component={ AuthRouter } />
                <Route exact path="/auth/register" component={ AuthRouter } />
                                


                <Redirect to="/home"  />






            </Switch>
        </div>
            
        </>
    )
}
