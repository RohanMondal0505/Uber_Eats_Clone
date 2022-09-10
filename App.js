import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/screen/Home';
import RestaurantDetail from './src/screen/RestaurantDetail';


const App = () => {
  const Stack = createStackNavigator();

  const screenOption = {
    headerShown: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOption}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App










