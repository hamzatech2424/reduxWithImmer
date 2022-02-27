import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux'
import CartItem from '../Components/ModuleComponents/cartItem';
import productsController from '../Controllers/productController';


const CartScreen = () => {

  const reduxCart = useSelector((state) => state.CartReducer.cart)
  const [totalPrice, settotalPrice] = useState(0)
  const [totalitemInCart, settotalitemInCart] = useState(0)
  const [subTotal, setsubTotal] = useState(0)


  useEffect(()=>{

    let items = 0
    let price = 0
    let subTotal = 0

    {
      reduxCart ?
      reduxCart.map((item) => {
          items += item.quantity
          price += item.quantity * item.price

          if (items == 0) {
            subTotal = 0

          }
          else {
            subTotal += item.quantity * item.price 
          }

        })
        : false
    }
    settotalPrice(price)
    settotalitemInCart(items)
    setsubTotal(Math.floor(subTotal))


  },[totalPrice, totalitemInCart, settotalPrice, settotalitemInCart, reduxCart])




  return (
    <React.Fragment>
    <View>
      {reduxCart.map((item,index)=>{
        return <CartItem
         key={index}
          imgUrl={item.image}
           title={item.title}
            price={item.price}
             quantity={item.quantity}
             increaseProduct={()=>productsController.incrementItem(item.id)}
             decreaseProduct={()=>productsController.decrementItem(item.id)}
             />
      })}
    </View>
    <View style={{flexDirection:'row'}}>
      <Text>Total Items:</Text>
      <Text>{totalitemInCart}</Text>
    </View>

    <View style={{flexDirection:'row'}}>
      <Text>Total Price:</Text>
      <Text>{subTotal}</Text>
    </View>
    </React.Fragment>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    }
});
