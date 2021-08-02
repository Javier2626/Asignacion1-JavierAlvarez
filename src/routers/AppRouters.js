import React, { useEffect, useState }  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect

  } from "react-router-dom";

// import { LoginScreen } from "../componentes/auth/LoginScreen";
import { DashboardRouters } from "./DashboardRouters";

import { HomeScreen } from "../componentes/home/HomeScreen";
import { MobstoreApp } from "../MobstoreApp";


import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config'



export const AppRouters = () => {


  const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );

                // dispatch( startLoadingcel( user.uid ) );

            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Wait...</h1>
        )
    }



    // return (
    //   <Router>
    //      <div>
    //         <Switch>
    //           <Route exact path ="/auth" 
    //           component={ AuthRouter } />

    //           <Route path ="/" 
    //           component={ DashboardRouters } />


    //          </Switch>
    //       </div>
    //   </Router>
    // )


    return (
      <Router>
          <div>
              <Switch>
                  <PublicRoute 
                      path="/auth"
                      component={ AuthRouter }
                      isAuthenticated={ isLoggedIn }
                  />

                  <PrivateRoute 
                      
                      isAuthenticated={ isLoggedIn }
                      path="/"
                      component={ DashboardRouters }
                       />
                  

                  {/* <Redirect to="/auth/login" /> */}


              </Switch>
          </div>
      </Router>
  )
}
