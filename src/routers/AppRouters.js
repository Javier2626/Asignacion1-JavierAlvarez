import React, { useEffect, useState }  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

  } from "react-router-dom";

// import { LoginScreen } from "../componentes/auth/LoginScreen";
import { DashboardRouters } from "./DashboardRouters";



import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config'

import { startLoadingCel } from "../actions/cel";
import { loadCalificaiones } from "../helpers/loadcalificaiones";
// import { setCalificaciones } from "../actions/calificacion";




export const AppRouters = () => {


  const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

        


    useEffect(() => {
                
        firebase.auth().onAuthStateChanged( async (user) => {

            

            // if ( user?.uid ) {
                // dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                dispatch( startLoadingCel() );

                // const calificaciones = loadCalificaiones( user.uid );
                // const calificaciones = loadCalificaiones( user.uid );
                // dispatch( setCalificaciones );

              

                // dispatch( startLoadingCel() );

                // loadcel( );
                //  console.log(celSnap);
                // console.log(cel);

            //    const cel = await loadcel( user.uid );
            //     dispatch( setCel ( cel ) );
            // console.log(cel);
                                    


            // } else {
            //     setIsLoggedIn( false );
            // }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Wait...</h1>
        )
    }



    return (
      <Router>
          <div>
              <Switch>


              <Route  path="/" component={ DashboardRouters }  />
              <Route   path="/auth"  component={ AuthRouter }  />

                



                  {/* <PublicRoute 
                      path="/auth"
                      component={ AuthRouter }
                      isAuthenticated={ isLoggedIn }
                      
                  />

                  <PrivateRoute 
                      
                      isAuthenticated={ isLoggedIn }
                      path="/"
                      component={ DashboardRouters }
                       /> */}


                  

                  <Redirect to="/home" />


              </Switch>
          </div>
      </Router>
  )
}