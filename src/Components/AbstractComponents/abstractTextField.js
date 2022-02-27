import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AbstractTextField = ({label,value}) => {
 
    const defLabel = label ? label : 'textHere'
    const defValue = value ? value : 'value'


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textOne}>{defLabel}:</Text>
      <Text>{defValue}</Text>
    </View>
  );
};

export default AbstractTextField;

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textOne:{
        fontWeight:'bold'
    }
});
