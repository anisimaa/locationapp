import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationStart from './LocationStart';
import LocationMap from './LocationMap';
import LocationAdd from './LocationAdd';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Locations">
      <Stack.Screen name="Locations" component={LocationStart} options={{ headerShown: true }}/>
      <Stack.Screen name="Map" component={LocationMap} options={{ headerShown: true }}/>
      <Stack.Screen name="Add" component={LocationAdd} options={{ headerShown: true }}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;