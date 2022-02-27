import { ADD_PRODUCTS } from './types'


const initialState = {
    Allproducts:[]
}


export default ProductReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_PRODUCTS:
         
        return {
            ...state,
            Allproducts:[...action.payload]
        }
        break;
        default: return state
    }
}