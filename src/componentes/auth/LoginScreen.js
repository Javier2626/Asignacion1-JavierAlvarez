
import React from 'react';
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Iniciar sesion</h3>
            <hr />

            <form>

            <div className="auth__social-networks">
                    <p>Iniciar con redes sociales</p>

                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Iniciar con google</b>
                        </p>
                    </div>


                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_Faenza.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Iniciar con facebook</b>
                        </p>
                    </div>

                </div>
                <hr />

                  
                 





                <input 
                    type="text"
                    placeholder="Correo electronico"
                    name="Email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Iniciar
                </button>

                
               


                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Crear cuenta   
                </Link>

            </form>
        </>
    )
}
