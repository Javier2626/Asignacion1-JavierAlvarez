

import swal from 'sweetalert';


import React, { useContext, useMemo, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import moment from 'moment';




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
    // console.log(name);
    // console.log("prevProducts");

    

    // const isLoggedIn = props.isLoggedIn;
    // console.log(isLoggedIn);


    const { products } = useContext(ProductsContext);
    // console.log(products);


    const noteData = moment(products.data);
    // console.log(noteData)


    
    // const [ formValues, handleInputChange ] = useForm({
    //     // email: '',
    //     // password: ''
    //     // ComentarioC: ''
    // });

    // const { ComentarioC } = formValues;

    // const coment ={ ComentarioC } 

   
    


   
    








    const [valueS, setValueS] = React.useState();

    // console.log('cantidad');
  
    // console.log(valueS);
    // console.log(newValue);

  
    
    


    const [ formValues, handleInputChange, reset ] = useForm({
        ComentarioC: '',
        valueS: '',

       
    });
    
    const { ComentarioC, newValue } = formValues;
    // const [setInputValue] = useState()

    // const handleEnviarr = (e) => {
    //     setInputValue( e.target.value);
    // }

    const handleAddNew = () => {
        // setInputValue( e.target.value);
    // e.preventDefault();
    dispatch( startNewcalificacion (ComentarioC, valueS, modelo));



}


         function App() {
        
            // swal("Comentario enviado!");
            swal("Bien hecho!", "Comentario enviado!", "success");
           
        };

        function Appl() {
        
            // swal.fire('Error','Debe registrarse para calificar producto!');
            swal("error", "Debe identificarse para calificar el producto!", "info");
           
        };
        function App2() {
        
            // swal.fire('Error','Debe registrarse para calificar producto!');
            swal("error", "Comentario es necesario!", "info");
           
        };
        function App3() {
        
            // swal.fire('Error','Debe registrarse para calificar producto!');
            swal("error", "calificaion de estrellas es necesario!", "info");
           
        };
        function limpiar() {
            document.getElementById("prueba").value = "";
            document.getElementById("prueba2").valueS = "0";

        }
        function actualizar() {
            window.location.reload(); 
        }

        const resetInputField = () => {
            ComentarioC("");
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
        descripcioncorta,
        descripcionlarga,
        categoria,
        almacenamiento,
        precio,
        puntuacion,
        bateria,
        camara,
        pantalla,
        procesador,
        OS,
        peso,
        palabrasclave,
        fechacreacion
        

        
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
                <p className="list-group"> <b> { descripcioncorta } </b>  </p>

                
                
                <br/>
                <br/>

                <ul className="list-group list-group-flush">
                    <p className="list-group"> <b> Caracteristicas principales: </b>  </p>
                    <li className="list-group-item"> <b> Categoria: </b> { categoria } </li>

                    <li className="list-group-item"> <b> Pantalla: </b> { pantalla } </li>                    
                    <li className="list-group-item"> <b> Almacenamiento: </b> { almacenamiento } </li>
                    <li className="list-group-item"> <b> Camara: </b> { camara } </li>
                    <li className="list-group-item"> <b> OS: </b> { OS } </li>
                    <li className="list-group-item"> <b> Palabras claves: </b> { palabrasclave } </li>
                    <li className="list-group-item"> <b> Fecha de creacion: </b> { fechacreacion } </li>


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
                    <li className="list-group-item"> <b> Descripcion: </b> { descripcionlarga } </li>

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
                    
                </ul>  

            <br/>
            <br/>
            <br/>


            <p className="list-group"> <b> Calificaion del producto: </b>  </p><br/>

            
            
          

            {/* <form>
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
            </form> */}

            


            <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Estrellas</Typography>
                <Rating
                name="simple-controlled"
                id="prueba2"
                value={valueS}
                onChange={(event, newValue) => {
                    setValueS(newValue);
                }}
                
                />
                 
            </Box>  
            
            </div>  
           
        











                                                      
           


                     
           
                    
                
                <input 
                type="text" 
                placeholder="Comentario" 
                // class="form-control"
                className="auth__input"
                name="ComentarioC" 
                autocomplete="off"
                value={ ComentarioC }
                // readOnly="true"          
                // value={ comentario } 
                 onChange={ handleInputChange }
                 id="prueba"
                //  required minlength="2" 
                 maxlength="200"
               
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

                        if(name == null){
                            // console.log('can register data') 
                            Appl()
                                            
                        }else{
                            if ( ComentarioC.trim().length === 0 ) {
                                App2()
                                return false;}
                                if ( valueS === 0 ) {
                                    App3()
                                    return false;}    

                            // console.log('you even are registered') 
                            handleAddNew();
                            App();
                            // limpiar();

                            // resetInputField();

                            document.getElementById("prueba").value = "";



                            // actualizar();

                            

                            
                        }                      
                        
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

                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend"> </Typography>

                     <p> Fecha: { noteData.format('M/D/YYYY') } </p>
                    <Rating name="read-only" value={product.puntuacionEst} readOnly />
                   
                    </Box>

                     
                    </div>
                
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                       
                        <p> Usuario: { product.usuario }</p>
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

