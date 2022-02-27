import { ADD_TO_CART,INCREMENT_ITEM,DECREMENT_ITEM } from './types'
import produce from 'immer'

const initialState = {
    cart: [],
}


export default CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            return produce(state, (draftState) => {
               const inCart = draftState.cart.find(item => item.id === action.payload.id ? true : false)

                 inCart ?
                    draftState.cart.map((item) => item.id == action.payload.id
                        ?
                        { ...item, quantity: 1, active: true }
                        :
                        item
                    )
                    :
                    draftState.cart.push({ ...action.payload, quantity: 1, active: true })
            })

            // return {
            //     ...state,
            //     cart: inCart ?
            //         state.cart.map((item) =>
            //             item.id == action.payload.id
            //                 ?
            //                 { ...item, quantity: 1,active:true }
            //                 : item
            //         )
            //         :
            //         [...state.cart, {...action.payload,quantity:1,active:true}]
            // }
            break;


        case INCREMENT_ITEM:
            // console.log(action.payload)
            return produce(state,(draftState) =>{
                draftState.cart.map((item)=>item.id == action.payload?{ ...item, quantity: ++item.quantity } : item)
            })
           break;

           case DECREMENT_ITEM:
            // console.log(action.payload)
            return produce(state,(draftState) =>{
               const quantityCheck= draftState.cart.find(item => item.id === action.payload)
               const myValue = quantityCheck.quantity
               if(myValue > 1){
                draftState.cart.map((item)=>item.id == action.payload?{ ...item, quantity: --item.quantity } : item)
               }
               else if(myValue == 1){
                const deleteItem  = draftState.cart.filter((item)=>item.id != action.payload)
                draftState.cart = deleteItem
               }
            })
           break;


        default: return state
    }
}