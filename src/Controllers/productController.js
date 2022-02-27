const axios = require('axios');
import Store from '../Store'
import { ADD_TO_CART,INCREMENT_ITEM,DECREMENT_ITEM } from '../Store/Reducers/types'
import { ADD_PRODUCTS } from '../Store/Reducers/types'


class ProductController {
    constructor(){}

 getProducts(){
     return new Promise((resolve,reject)=>{
           axios.get('https://fakestoreapi.com/products?limit=5')
           .then((res)=>{
              const mapped = res.data.map((element) => ({
                ...element,
                active: false
              }))
              resolve(mapped)
            //   Store.dispatch({
            //     type:ADD_PRODUCTS,
            //     payload:mapped
            // })
              
           })
           .catch((error)=>{
               reject(error)
           })
     })
 }

 addToCart(obj){
   Store.dispatch({
    type:ADD_TO_CART,
    payload:obj
})
 }

 
 incrementItem(id){
   Store.dispatch({
    type:INCREMENT_ITEM,
    payload:id
})
 }


 decrementItem(id){
  Store.dispatch({
   type:DECREMENT_ITEM,
   payload:id
})
}



}


const productsController = new ProductController()
export default productsController
