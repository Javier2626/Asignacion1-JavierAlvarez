
import React, { createContext } from 'react'

import { db } from '../../firebase/firebase-config';
// import { db } from '../../firebase/firebase-config';


export const ProductsContext = createContext();



export class ProductsContextProvider extends React.Component {

    state = {
        products: []
    }

    
    

    componentDidMount() {
        
        const prevProducts = this.state.products;
        
        // db.collection("celulares").where("marca", "==", "Samsung").onSnapshot(snapshot => {
            
            // db.collection('/ZiyeJLovaJQahrNfa2dPOnQQt2l1/journal/notes').where("celular", "==", "SAM GALAXY S21").onSnapshot(snapshot => {
                

                // db.collection('/calificaciones/').onSnapshot(snapshot => {
                db.collection("celulares").onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        productID: change.doc.id,
                        almacenamiento: change.doc.data().almacenamiento,
                        OS: change.doc.data().OS,
                        procesador: change.doc.data().procesador,
                        bateria: change.doc.data().bateria,
                        camara: change.doc.data().camara,
                        categoria: change.doc.data().categoria,
                        marca: change.doc.data().marca,
                        modelo: change.doc.data().modelo,
                        pantalla: change.doc.data().pantalla,
                        peso: change.doc.data().peso,
                        puntuacion: change.doc.data().puntuacion,
                        precio: change.doc.data().precio,
                                          
                        foto: change.doc.data().foto
                        

                        
                        

                                        })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })

        
       
        console.log(prevProducts);
        // console.log(filter(prevProducts, "Samsung"));

    }
    
        

    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}
