import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {cBlack, cWhite} from '../components/styles/color';
//Pages list
import HomeScreen from '../pages/Home';
import AboutScreen from '../pages/About';
import DetailScreen from '../pages/Landpads/LandpadsDetail';
import LaunchesScreen from '../pages/Launches';

//Stack Navigator
const Drawer = createDrawerNavigator();

const DrawerRouter = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: cBlack,
        },
        headerTintColor: cWhite,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        options={{title: 'SpaceX'}}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{title: 'Launch'}}
        name="Launch"
        component={LaunchesScreen}
      />
      <Drawer.Screen
        options={{title: 'About'}}
        name="About"
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
};
export default DrawerRouter;
