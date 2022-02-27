import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CartItem = ({imgUrl,title,price,quantity,increaseProduct,decreaseProduct}) => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.viewOne}>
          <View style={styles.viewTwo}>
           <Image resizeMode='contain' source={{uri:imgUrl}} style={{width:'100%',height:'100%'}} />
          </View>
           
           <View style={{width:'42%',height:'100%',justifyContent:'center',paddingLeft:15}}>
               <Text numberOfLines={1} >Name:{title}</Text>
               <Text>Price:{price} </Text>
           </View>

           <View style={{flexDirection:'row',height:'100%',width:'30%',justifyContent:'center',alignItems:'center'}}> 
               <TouchableOpacity
               onPress={increaseProduct}
               style={styles.btnView}>
               <Text style={{color:'white'}}>+</Text>
               </TouchableOpacity>
               <View style={{height:30,width:30,justifyContent:'center',alignItems:'center'}}>
                   <Text>{quantity}</Text>
               </View>
               <TouchableOpacity
               onPress={decreaseProduct}
               style={styles.btnView}>
               <Text style={{color:'white'}}>-</Text>
               </TouchableOpacity>
           </View>
        </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:80,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5
    },
    viewOne:{
        width:'90%',
        height:'90%',
        flexDirection:'row'
    },
    viewTwo:{
        width:100,
        height:'100%',
    },
    btnView:{
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        backgroundColor:'blue'
    }
})