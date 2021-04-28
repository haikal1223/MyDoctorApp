import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { GetStarted, Splash } from './pages'
import Router from './router'

const App = () => {
  return (
   <NavigationContainer>
     <Router />
   </NavigationContainer>
  )
}

export default App
