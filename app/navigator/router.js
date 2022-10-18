import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {cBlack, cWhite} from '../components/styles/color';
//Pages list
import HomeScreen from '../pages/Home';
import AboutScreen from '../pages/About';
import DetailScreen from '../pages/Landpads/LandpadsDetail';
//Stack Navigator

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTintColor: cWhite,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        options={{title: 'SpaceX'}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{title: 'About'}}
        name="About"
        component={AboutScreen}
      />
      <Stack.Screen
        options={{title: 'Detail'}}
        name="Detail"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
export default Router;
