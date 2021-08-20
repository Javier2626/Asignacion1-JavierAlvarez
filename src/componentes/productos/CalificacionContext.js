
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
                db.collection("calificaciones").orderBy("data", "desc").onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        productID: change.doc.id,
                        comentario: change.doc.data().comentario,
                        data: change.doc.data().data,
                        puntuacionEst: change.doc.data().puntuacionEst,
                        celular: change.doc.data().celular,
                        
                        usuario: change.doc.data().usuario
                        
                        

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




