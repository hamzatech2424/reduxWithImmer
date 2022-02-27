import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.mainConatiner}>
      <Text style={{color:'white'}} >SpalshScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    mainConatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink'
    }
});
