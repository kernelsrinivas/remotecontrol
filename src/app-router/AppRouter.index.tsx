import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home/HomeScreen.index';
import SplashScreen from '../splash/SplashScreen.index';
import { ROUTE } from './router.constants';
const Stack = createStackNavigator();
const defaultOption = { headerShown: false};

export default function AppRouter(){
    return <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTE.HOME_SCREEN}>
      <Stack.Screen name={ROUTE.SPLASH_SCREEN} component={SplashScreen} options={defaultOption}/>
      <Stack.Screen name={ROUTE.HOME_SCREEN} component={HomeScreen} options={defaultOption} />
    </Stack.Navigator>
    </NavigationContainer>
}