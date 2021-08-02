
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';


export const LoginScreen = () => {



    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        // email: '',
        // password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }
















    return (
        <>
            <h3 className="auth__title">Iniciar sesion</h3>
            <hr />

            <form onSubmit={ handleLogin }>

            <div className="auth__social-networks">
                    <p>Iniciar con redes sociales</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
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
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
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
