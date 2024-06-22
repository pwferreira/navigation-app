import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';

const Stack = createNativeStackNavigator()

export default props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaA">
          <Stack.Screen name="TelaA" 
                        component={TelaA}
                        options={{title: 'Tela A'}}/>
          <Stack.Screen name="TelaB" component={TelaB}></Stack.Screen>
          <Stack.Screen name="TelaC" component={TelaC}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  )
}

