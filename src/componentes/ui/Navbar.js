
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
// import "../../styles/componentes/navbar";


import { startLogout } from '../../actions/auth';

export const Navbar = () => {
   
   

    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

   
    return (
        // <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
       
       
       <nav className="navbar">
            

            <div className="na">
            <Link 
                className="navbar-brand" 
                to="/"
            >                
                <img src={`./assets/logo/logoms.PNG`} width="280" height="80" alt=" "></img>
                
            </Link>

                   <form className="form-inline my-2 my-lg-0">
                   <input className="form-search" type="search" placeholder="Search" aria-label="Search"/>
                   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                   </form>

            </div>
                 
                            
           
            {/* <a className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
               </ul>
              </a> */}
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
            </div>
            

                     <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        className="btn btn-secondary"
                        exact
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        className="btn btn-secondary"
                        exact
                        to="/apple"
                    >
                        Apple
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        className="btn btn-secondary"
                        exact
                        to="/samsung"
                    >
                        Samsung
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        className="btn btn-secondary"
                        exact
                        to="/huawei"
                    >
                        Huawei
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        className="btn btn-secondary"
                        exact
                        to="/xiaomi"
                    >
                        Xiaomi
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <a className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/auth/login"
                    >
                        login 
                        
                    </NavLink>  
                    </a>
                     
                    <NavLink 

                        activeClassName="active"
                        className="nav-item nav-link" 
                        onClick={ hanleLogout }
                        exact
                        to="/auth/login"
                    >
                        logout 
                    </NavLink>                                 
                    
               
              

               

        </nav>
    )
}