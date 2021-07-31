import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Registrarse</h3>
            <hr />

            <form>

            <div className="auth__social-networks">
                    <p>Registrarse con redes sociales</p>

                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Registrar con google</b>
                        </p>
                    </div>


                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_Faenza.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Registrar con facebook</b>
                        </p>
                    </div>

                </div>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Ya esta registrado?
                </Link>

            </form>
        </>
    )
}
