


import React, { useState } from 'react'
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';




const customStyles = {
    content: {
    //   top: '50%',
    //   left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',

        position: 'absolute',
        inset: '55% auto auto 50%',
        border: '1px solid rgb(204, 204, 204)',
        background: 'rgb(255, 255, 255)',
        overflow: 'auto',
        borderradius: '15px',
        outline: 'none',
        padding: '20px',
        marginRight: '30%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',

    },
  };

  Modal.setAppElement('#root');


export const DetalleModal = () => {

        const{ modalOpen } = useSelector( state => state.ui);

        const [isOpen, setIsopen ] = useState(true);


        const closeModal = () => {
            console.log('closing...');
            setIsopen( false );
        }


    return (

    //    <div>
    //       <h1>Hola Mundo</h1>

    //    </div>

        <Modal
        isOpen={ modalOpen }
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={ 200 }
        // className="modal"
        // overlayClassName="modal-fondo"
      >
                    {/* <p> Detalles del producto </p>
                    <br/> */}
            <form className="containerModal">

                       
        <div className='card'>
        <p> Detalles del producto </p>
                    <br/>
            <div className='product-img'>
                    
               <img src='./assets/celulares/HUA P30.JPG' className='product-img' alt="not found" />
                      {/* Foto del producto */}
            

            </div>

            <div className='product-name'>
                 Descripcion corta, del celulares huawei p30, camara, bateria, almacenamiento, descripcion de carateristica 

            </div>   
            <br/>

                  <Link >
                     Mas detalles  
                  {/* <DetalleModal/> */}
                 
                 </Link>


            </div>   





            </form>


          </Modal>
    )
}
