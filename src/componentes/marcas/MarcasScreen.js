



import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';

import { startNewcalificacion } from '../../actions/calificacion';


import { getmarcasbyid } from '../../selectors/getmarcasbyid';





export const MarcasScreen = ({ history }) => {

    const dispatch = useDispatch();

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

    const handleAddNew = () => {
        dispatch( startNewcalificacion ());
    }

    const {
        
        id,
        foto,
        modelo,
        descripcion,
        categoria,
        almacenamiento,
        precio,
        puntuacion,
        bateria,
        camara,
        pantalla,
        procesador,
        OS,
        peso
        

        
    } = cate;
    
    return (
        <div className="ContainerDetalles">
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/celulares/${ marcaid }.jpg` }
                    alt={ modelo }
                    className="img-thumbnail animate__animated "
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { modelo } </h3>
                
                
                <br/>

                <ul className="list-group list-group-flush">
                    <p className="list-group"> <b> Caracteristicas principales: </b>  </p>
                    <li className="list-group-item"> <b> Pantalla: </b> { pantalla } </li>
                    <li className="list-group-item"> <b> Procesador: </b> { procesador } </li>
                    <li className="list-group-item"> <b> Almacenamiento: </b> { almacenamiento } </li>
                    <li className="list-group-item"> <b> Camara: </b> { camara } </li>
                    <li className="list-group-item"> <b> OS: </b> { OS } </li>
                    <li className="list-group-item-precio"> <b> Precio: </b> { precio } </li>

                    
                </ul>

                <button 
                    className="btnreturn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
        <br/>
        <br/>
        <br/>

        <ul className="list-group list-group-flush">
                    <p className="tittle" > <b> Caracteristicas principales: </b>  </p>
                    <li className="list-group-item"> <b> Descripcion: </b> { descripcion } </li>

        </ul>
        <br/>
        <br/>
        <br/>


        <ul className="list-group list-group-flush">
                    <p className="list-group"> <b> Caracteristicas principales: </b>  </p>
                    <li className="list-group-item"> <b> Pantalla: </b> { pantalla } </li>
                    <li className="list-group-item"> <b> Procesador: </b> { procesador } </li>
                    <li className="list-group-item"> <b> Almacenamiento: </b> { almacenamiento } </li>
                    <li className="list-group-item"> <b> Camara: </b> { camara } </li>
                    <li className="list-group-item"> <b> OS: </b> { OS } </li>
                    <li className="list-group-item"> <b> Bateria: </b> { bateria } </li>
                    <li className="list-group-item"> <b> Peso: </b> { peso } </li>
                    <li className="list-group-item"> <b> Peso: </b> { peso } </li>
                    <li className="list-group-item"> <b> Peso: </b> { peso } </li>
                </ul>  

            <br/>
            <br/>
            <br/>


            <p className="list-group"> <b> Calificaion del producto: </b>  </p><br/>

            
            
            <p class="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5"></input>
                <label for="radio1">★</label>

                <input id="radio2" type="radio" name="estrellas" value="4"></input>
                <label for="radio2">★</label>
                
                <input id="radio3" type="radio" name="estrellas" value="3"></input>
                <label for="radio3">★</label>

                <input id="radio4" type="radio" name="estrellas" value="2"></input>
                <label for="radio4">★</label>
                
                <input id="radio5" type="radio" name="estrellas" value="1"></input>
                <label for="radio5">★</label>
            </p>
                       
           
                <input type="text" placeholder="Comentario" 
                class="form-control" name="searchText" autocomplete="off" ></input>
                    
                    <button 
                    className="btnenviar btn-outline-info"
                    onClick={handleAddNew}
                    >Enviar...</button>
                    
                    <br/>
                    <br/>
                    <br/>

                






            <div class="cardcalificacion">
            <div class="card-header">
                 5.0 (5)  Usuariop prueb
            </div>
           
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>Comentario de usuario comentario omentario </p>
                {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                </blockquote>
            </div>
            </div>
            <br/>
            <br/>
            <br/>





             <div class="cardcalificacion">
            <div class="card-header">
             { puntuacion }  { modelo } Javier Alvarez
            </div>
           
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>{ descripcion }</p>
                {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                </blockquote>
            </div>
            </div>
            <br/>
            <br/>
            <br/>

            




         </div>


    )

}



