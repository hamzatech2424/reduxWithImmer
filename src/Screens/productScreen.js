import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React,{useEffect,useState} from 'react';
import AbstractHeader from '../Components/AbstractComponents/abstractHeader';
import productsController from '../Controllers/productController'
import { navigate } from '../Navigations/mainNavigation';
import ProductItem from '../Components/ModuleComponents/productItem';
import { useSelector } from 'react-redux'


const ProductScreen = () => {

  const [productsData, setProductData] = useState([])
  // const reduxProducts = useSelector((state) => state.ProductReducer.Allproducts)
   
  // console.log(reduxProducts)

  useEffect(() => {

    productsController.getProducts().then((result) => {
      setProductData(result)
    })

  }, [])


  return (
    <View style={styles.mainContainer}>
      <AbstractHeader onPress={()=>navigate('Cart')}  />
      <View style={{flex:1,alignSelf:'center',width:'90%'}} >
        
       <ScrollView contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}} > 
       {productsData.map((item,index)=>{
          return <ProductItem
           key={item.id}
            aciveBtn={item.active}
             imageUrl={item.image}
              price={item.price}
               addToCart={()=>productsController.addToCart(item)}
               />
       })}
       </ScrollView>

      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    }
});
