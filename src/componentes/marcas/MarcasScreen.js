// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';


import swal from 'sweetalert';


import React, { useContext, useMemo, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';

import { startNewcalificacion } from '../../actions/calificacion';


import { getmarcasbyid } from '../../selectors/getmarcasbyid';

import { ProductsContext } from '../productos/CalificacionContext';


import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';





export const MarcasScreen = ({ history }) => {



    const dispatch = useDispatch();

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);


    const { marcaid } = useParams();

    const cate = useMemo(() => getmarcasbyid( marcaid ), [ marcaid ]);


    // const [ formValues, handleInputChange, reset ] = useForm(  );

    // const { Comentario } = formValues;

    const {name} = useSelector(state => state.auth);
    console.log(name);
    console.log("prevProducts");

    const { products } = useContext(ProductsContext);
    console.log(products);



    
    // const [ formValues, handleInputChange ] = useForm({
    //     // email: '',
    //     // password: ''
    //     // ComentarioC: ''
    // });

    // const { ComentarioC } = formValues;

    // const coment ={ ComentarioC } 

    const handleAddNew = () => {
        // e.preventDefault();
        dispatch( startNewcalificacion ());
    }
    


   
    










    const [ formValues, handleInputChange, reset ] = useForm(  );
    
    const { ComentarioC } = formValues;
    // const [setInputValue] = useState()

    // const handleEnviarr = (e) => {
    //     setInputValue( e.target.value);
    // }

    function App() {
        
            swal("Comentario enviado!");
           
        };
    
    // const { products } = useContext(ProductsContext);
    // console.log(products);

    // const { body, title, id } = formValues;
    // const { puntuacionEst, usuario, comentario } = formValues;



    
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
                    // src={ `../assets/celulares/${ marcaid }.jpg` }
                    src={foto} 

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

            
            
          

            <form>
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
            </form>

                                                      
           


                     
           
                    
                
                <input 
                type="text" 
                placeholder="Comentario" 
                class="form-control"
                name="ComentarioText" 
                autocomplete="off"
                value={ ComentarioC }
                // readOnly="true"          
                // value={ comentario } 
                //  onChange={ handleInputChange }
                />   
               
                

                {/* <div class="alert alert-danger  align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"></svg>
                <div>
                    Debe iniciar sesion
                </div>
                </div> */}

                    {/* <form onSubmit={ handleAddNew }> */}
                    <button 
                    className="btnenviar btn-outline-info"
                    // onClick={handleAddNew} 
                    
                    onClick={() => {
                        handleAddNew();
                        App();
                        
                     }}
                                     
                                    
                               
                        >
                           

                        Enviar...    
                                                          
                    
                    </button>
                   

                    
                    <br/>
                    <br/>
                    <br/>

                

        
                


                    <div class="cardcalificacion">
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    
                    
                    <div class="cardcalificacion">
                    <div class="card-header">
                    { product.puntuacionEst }  { product.usuario }  
                    </div>
                
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                       
                        {/* <p> { product.data } </p> */}
                        <p>{ product.comentario }</p>


                        {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                        </blockquote>
                    </div>
                    <br/>
                    
                    </div>                   
                  ))}                            

            </div>

            




         </div>


    )


    

}

