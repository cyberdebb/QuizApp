import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Quiz from '../screens/Quiz'
import Result from '../screens/Result'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
      <Stack.Screen name='Quiz' component={Quiz} options={{headerShown:false}} />
      <Stack.Screen name='Result' component={Result} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default MyStack