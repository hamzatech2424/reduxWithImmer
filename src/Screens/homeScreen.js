import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import authControl from '../Controllers/authController';
import { navigate } from '../Navigations/mainNavigation';

const HomeScreen = () => {

  const reduxData = useSelector((state) => state.AuthReducer.loggedInUserData.UserData)
  const myData = JSON.parse(reduxData)


  const _handleBtn = () => {
    navigate('Products')
  }


  return (
    <View style={styles.mainContainer}>

      <View style={styles.viewOne}>
        <Button title={'Products Screen'} onPress={_handleBtn}/>
      </View>


    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewOne: {
    width: '70%',
    alignSelf: 'center',

  }
});
