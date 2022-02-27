import React, { createRef, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './authStack';
import AppStack from './appStack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import authControl from '../Controllers/authController'
import SplashScreen from '../Screens/splashScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function clearAndNavigate(name, params) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name }],
    params: params,
  });
}

export function goBack() {
  navigationRef.current?.goBack();
}


const MainNavigation = () => {

  const [user, setUser] = useState({})
  const [splashHide, setSplashHide] = useState(true)



  useEffect(() => {
    authControl.getAsyncStorageData()
      .then((result) => {
        setUser(JSON.parse(result))
      })
      .catch((error) => {
        console.log(error)
      })

      // AsyncStorage.clear()

    setTimeout(() => {
      setSplashHide(false)
    }, 2000)
  }, [])



  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {splashHide ?
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
          />
          : null}

        {!user ?
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
          />
          :
          <Stack.Screen
            name="App"
            component={AppStack}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});