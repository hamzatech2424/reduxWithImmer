import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';

const AbstractHeader = ({onPress}) => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.viewOne} >

            <TouchableOpacity
            style={styles.btnStyle}
            onPress={onPress}
            >
                <Text style={{padding:10,color:'white'}}>Cart</Text>
            </TouchableOpacity>

        </View>   
    </View>
  );
};

export default AbstractHeader;

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:60,
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    viewOne:{
        width:'90%',
        height:'90%',
        justifyContent:'center',
    },
    btnStyle:{
        backgroundColor:'grey',
        height:40,
        width:100,
        justifyContent:'center',
        alignItems:'center'
    }
});
