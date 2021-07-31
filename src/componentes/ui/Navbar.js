
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Logo MobileStore
                
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

            <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
               </ul>
              </li>
                     
                     
                     
                     <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/apple"
                    >
                        Apple
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/samsung"
                    >
                        Samsung
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/huawei"
                    >
                        Huawei
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
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

                   

                </div>
               
            </div>


            <form className="d-flex">
                   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                   <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/auth/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}