import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Quiz from './screens/Quiz'
import Result from './screens/Result'
import MyStack from './navigation'

const App = () => {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16
  }
})

export default App 
