
import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';


import { getmarcasbyid } from '../../selectors/getmarcasbyid';


export const MarcasScreen = ({ history }) => {

    const { marcaid } = useParams();

    const cate = useMemo(() => getmarcasbyid( marcaid ), [ marcaid ]);

    if ( !cate ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        modelo,
        almacenamiento,
        precio,
        puntuacion,
    } = cate;
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/celulares/${ marcaid }.jpg` }
                    alt={ modelo }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { modelo } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> almacenamiento: </b> { almacenamiento } </li>
                    <li className="list-group-item"> <b> precio: </b> { precio } </li>
                    <li className="list-group-item"> <b> puntuacion: </b> { puntuacion } </li>
                </ul>

                <h5> precio </h5>
                <p> { precio } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>

    )
}


