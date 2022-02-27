import React from 'react'
import MainNavigation from './src/Navigations/mainNavigation'
import { LogBox } from 'react-native';
import { Provider } from "react-redux";
import Store from "./src/Store/index"

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);


const App = () => {
  return (
    <Provider store={Store}>
      <MainNavigation />
    </Provider>
  )
}

export default App