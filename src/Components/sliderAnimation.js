import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import cardsData from '../Utils/dataHere'
import Animated ,{
    useSharedValue,
    useAnimatedStyle,
    interpolate,
} from 'react-native-reanimated'


const SW = Dimensions.get('window').width
const CARD_WIDTH = SW * 0.8 
const SPACING_FOR_CARD_INSET = SW * 0.1 - 10






const Cards = ({ imgUrl,activeIndex,myIndex,myAnimatedValue }) => {

   const [myState,setMystate] = useState(false)

   useEffect(()=>{
      if(myAnimatedValue == 3.394444402058919){
          setMystate(true)
      }
   })


   const scaling = useAnimatedStyle(()=>{
       return {
           transform:[{scale:2}]
       }
   })


    return (
        <View style={[styles.cardOne, { width: CARD_WIDTH },{transform:[{scale:myState?1.5:1}]}]}>
            <Image resizeMode='cover' source={imgUrl} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
        </View>
    )
}


const SliderAnimation = () => {

    const myAnimatedValue = useSharedValue(0)
    
    console.log(myAnimatedValue.value,'myAnimated Value')

    return (
        <View style={styles.mainContainer}>
            <ScrollView
            onScroll={(e)=> parseInt(myAnimatedValue.value = e.nativeEvent.contentOffset.x/SW)}
            pagingEnabled
            horizontal
            snapToAlignment='center'
            snapToInterval={CARD_WIDTH + 20}
            contentContainerStyle={{
                paddingHorizontal:SPACING_FOR_CARD_INSET
            }}
             >
                {cardsData.map((value, index) => {
                    return (
                        <Cards 
                        key={index}
                        imgUrl={value.imgUrl}
                        activeIndex={value.id}
                        myIndex={index}
                        myAnimatedValue={myAnimatedValue.value}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default SliderAnimation

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    cardOne: {
        height: 400,
        backgroundColor: 'grey',
        borderRadius: 20,
        marginHorizontal:10
    }
})
