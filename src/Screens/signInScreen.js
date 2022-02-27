import React, { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AbstractButton from '../Components/AbstractComponents/abstractButton';
import authControl from '../Controllers/authController'


const SignInScreen = () => {

  const [myData, setMyData] = useState(null)
  const [storageData, setStorageData] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [signInData, setSignData] = useState({
    email: '',
    password: ''
  })





  const _handleLogin = () => {
   if(signInData.email != '' && signInData.password != '' ){
    setProcessing(true)
    authControl.login(signInData.email, signInData.password).then((result) => {
      switch (result.message) {
        case 'Login Successfully':
          setMyData(result)
          setProcessing(false)
          break
        case 'Password Incorrect':
          Alert.alert(result.message)
          setProcessing(false)
          break
        case 'User Not Found':
          Alert.alert(result.message)
          setProcessing(false)
          break
        default:
          setMyData(result)
          setProcessing(false)
      }
      
    })
      .catch((error) => {
        // console.log(error)
        setProcessing(false)
      })
    }

  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.viewOne}>
        <TextInput
          placeholder='Enter Email'
          value={signInData.email}
          onChangeText={(txt) => setSignData({ ...signInData, email: txt })}
        />
        <TextInput
          placeholder='Enter Password'
          value={signInData.password}
          onChangeText={(txt) => setSignData({ ...signInData, password: txt })}
        />
        <AbstractButton
          onPress={_handleLogin}
          processing={processing} width={'100%'} label={'Log In'} />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  viewOne: {
    width: '90%',
    alignSelf: 'center'
  }
});
